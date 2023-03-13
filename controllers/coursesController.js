const courses = require('../models/courses');

const renderCourses = async (req, res) => {
    try {
        const allCourses = await courses.getAllcourses(req);
        res.status(200).json(allCourses);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving courses');
    }
}

const createCourse= async (req,res) => {
    const newCourse= req.body; 
    
    try{
        let response = await new courses(newCourse);
        let answer = await response.save();
        res.status(201).json({
            msj:`Curso ${answer.title} guardado en el sistema.`,
            "course": answer
        });
    }catch(err){
        console.log("Este es el error que devuelve la api", err.message);
        res.status(400).json({
            msj: err.message
        });

    }
}

module.exports = {
    renderCourses,
    createCourse
}