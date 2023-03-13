const User = require('../models/users');
const Course = require('../models/courses');

const getUsers = async (req,res) => {
    if (req.params.id) { // con ID
        try {
            let user = await User.find({id:req.params.id},'-_id -__v').populate('course', '-_id -__v');
            if (user.length > 0) {
                res.status(200).json(user[0]); 
            }
            else {
                res.status(404).json({msj:"usuario no encontrado "+req.params.id}); 
            }    
        }
        catch(err){
            res.status(400).json({msj: err.message});
        }
    } else { 
        try {
            let users = await User.find({},'-_id -__v');
            res.status(200).json(users);
            console.log(users)
        }
        catch(err){
            res.status(400).json({msj: err.message});
        }
    }
}
    const createUser = async (req,res) => {
        console.log("Esto es el console.log de lo que introducimos por postman", req.body); 
        let title_id = await Course.findOne({title: req.body.course}, '_id');
        const newUser = req.body; 
        newUser.course= title_id;
    
        try{
            let response = await new User(newUser);
            let answer = await response.save();
            res.status(201).json({
                msj:`Usuario ${answer.title} guardado en el sistema.`,
                "user": answer
            });
        }catch(err){
            console.log("Este es el error que devuelve la api", err.message);
            res.status(400).json({
                msj: err.message
            });
    
        }
    }



    module.exports = {
        getUsers,
        createUser
        
        
    }