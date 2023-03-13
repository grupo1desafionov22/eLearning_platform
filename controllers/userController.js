const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');




const registerUser = async (req,res) => {

    const user = req.body
    
    const takenUserName = await User.findOne({username: user.username});
    const takenEmail = await User.findOne({username: user.email});

    if (takenUserName || takenEmail) {
        res.json({massage: 'Nombre de usuario o email ya registradas'})
    } else{
        user.password = await bcrypt.hash(req.body.password, 10);

        const dbUser = new User({
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.password
        })

        dbUser.save();
        res.json({message: 'Succes'});
    }
} 

const userLogin = async (req, res) => {
    const {username, email, password} = req.body;
    User.findOne({username: username})
    .then(dbUser => {
        if (!dbUser) {
            return res.json({message: 'Credenciales incorrectas'});
            
        }
        bcrypt.compare(password, dbUser.password)
        .then(isCorrect => {
            if (isCorrect) {
                const payload = {
                    id: dbUser._id,
                    username: dbUser.username
                }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
//{expiresIn: 86400},
                    (err,token) => {
                        if (err) return res.json({message: err})
                        return res.json({message: 'Success',
                                        token : 'Bearer' + token
                                    })
                        
                    }

                )
                
            }else{
                return res.json({message: 'Credenciales incorrectas'});
            }
        })
    })
}

const getCurrentUser = (req, res) => {
    res.json({isLoggedIn: true, username: req.user.username})
}


module.exports = {
    registerUser,
    userLogin,
    getCurrentUser
}