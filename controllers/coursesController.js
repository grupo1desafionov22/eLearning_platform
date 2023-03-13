const Course = require('../models/courses');
const uuid = require('uuid');
const uuid4 = uuid.v4();

/* const renderCourses = async (req, res) => {
    try {
        const allCourses = await courses.getAllcourses(req);
        res.status(200).json(allCourses);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving courses');
    }
} */

const getAllCourses = async (req,res) => {
    
    let allCourses = await Course.find({}, "-_id -__v");
    console.log(allCourses);
    res.status(200).json({allCourses: allCourses });

    
} 


const createCourse = async (req,res) => {
    const {title, description, url} = req.body;
    
    try {
        let response = await new Course({
                id: uuid.v4(),
                title,
                description,
                url
            
        });
        let answer = await response.save();
        
        console.log("Respuesta de la API", answer);
        res.status(201).send({
            msj: `Curso ${answer.title} guardada en el sistema con ID: ${answer.id}`,
            course: answer, 
        }); 
    } catch (error) {
        console.log("Este es el error que devuelve la api", error.message);
        res.status(400).json({
        msj: error.message,
    });
    }
}


const getCourse= async (req, res) => {
    const course = await Course.findOne({id: req.params.id});
    res.send({course: course, id:req.params.id})
    console.log(course);

}


const editCourse = async (req, res) => {
    
    if (req.params.id) {

        const {title, description, url} = req.body;
        console.log(req.params.id);
        console.log(req.body);
        try {
                const filter = {id: req.params.id}
                console.log(filter);
                const update = {
                
                    title,
                    description,
                    url
                
            }
              //console.log(update);
                const doc = await Course.findOneAndUpdate(filter,update);
                let response = await doc.save();
                
            res.status(200).json({
                msj: "Curso actualizado " + response.title,
            }); 
        } catch (err) {
            res.status(400).json({
                msj: err.message,
            });
        }
        } else {
            res.status(400).json({
            msj: "Es necesario introducir el ID del curso para actualizarlo",
        });
        }
    }; 


const removeCourse = async (req,res)=>{
    console.log(req.body.data);
    const doc= Course.findOneAndDelete({id: req.body.data }, function (err, docs) {
      if (err){
        res.status(400).json({
            msj: err.message,
        });
      }
      else{
        //let response =  doc.save();
        
        res.status(200).json({
            msj: "Curso borrado : "+ docs,
        }); 
          
      }
  });
  } 
module.exports = {
    //renderCourses,
    createCourse,
    editCourse,
    removeCourse,
    getAllCourses,
    getCourse
}