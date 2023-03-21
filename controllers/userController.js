//importing modules
const bcrypt = require("bcrypt");
const { db } = require('../config/sqlConnection');
const jwt = require("jsonwebtoken");

// Assigning users to the variable User
const User = require('../schemas/users');

//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async (req, res) => {
try {
    const { username, email, password, hiv_relationship, identity, age } = req.body;
    const role = 'user'
    const data = {
    username,
    email,
    password: await bcrypt.hash(password, 10),
    hiv_relationship,
    identity, 
    age,
    role,
    };


   //if user details is captured
   //generate token with the user's id and the secretKey in the env file
   // set cookie with the token generated
    if (data.username.length !== 0) {
         //saving the user
        const user = await User.create(data);
        let token = jwt.sign({ id: user.user_id }, process.env.SECRET_KEY, {
       expiresIn: 1 * 24 * 60 * 60 * 1000,
    });

     res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true })
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);
     //send users details
     return res.status(201).json({
        success: true,
        message: 'Registrado correctamente!',
      })
       /*  return res.status(201).send(token); */
    } else {
        console.log(error);
        return res.status(500).json({
            error: error,
        })
        
    }
    } catch (error) {
    console.log(error);
} 
};


//login authentication

const login = async (req, res) => {
    try {
const { email, password } = req.body;

   //find a user by their email
    const user = await User.findOne({
        where: {
        email: email
    } 
        
    });

   //if user email is found, compare password with bcrypt
    if (user) {
        const isSame = await bcrypt.compare(password, user.password);

     //if password is the same
      //generate token with the user's id and the secretKey in the env file

        if (isSame) {
        let token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, {
            expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        //if password matches wit the one in the database
        //go ahead and generate a cookie for the user
        return res.status(200).cookie("token", token, { httpOnly: true }).json({
            success: true,
            message: 'Logged in succefully'
        })
/*         console.log("user", JSON.stringify(user, null, 2));
        //send user data
      /*   return res.status(201).send(user); */
        } else {
        return res.status(401).send("Authentication failed");
        }
    } else {
        return res.status(401).send("Authentication failed");
    }
    } catch (error) {
    console.log(error);
    }
    };



        const protect = async (req, res) => {
            try {
            return res.status(200).json({
                info: 'protected info',
            })
            } catch (error) {
            console.log(error.message)
            }
        }
        
        const logout = async (req, res) => {
            try {
            return res.status(200).clearCookie('token', { httpOnly: true }).json({
                success: true,
                message: 'Logged out succefully',
            })
            } catch (error) {
            console.log(error.message)
            return res.status(500).json({
                error: error.message,
            })
            }
        }

    module.exports = {
    signup,
    login,
    protect,
    logout
    };