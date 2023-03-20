    const User = require('../schemas/users');
    const verifyGoogleToken = require('../middlewares/google');
    const jwt = require("jsonwebtoken");
    
    let DB = []

    // sign-up route
    const signupGoogle  = async (req, res) => {
        try {
        // console.log({ verified: verifyGoogleToken(req.body.credential) });
        if (req.body.credential) {
            const verificationResponse = await verifyGoogleToken(req.body.credential);
    
            if (verificationResponse.error) {
            return res.status(400).json({
                message: verificationResponse.error,
            });
            }
    
            const profile = verificationResponse?.payload;

            const role = 'user'
            const data = {
            username: profile?.given_name,
            email: profile?.email,
            password: 'google',
            HIV_relationship: 'google',
            identity: 'google', 
            age: 0,
            role,
            };
    
            //DB.push(profile);
            const user = await User.create(data);
            console.log(user);
    
            res.status(201).json({
            message: "Signup was successful",
            user: {
                username: profile?.given_name,
                lastName: profile?.family_name,
                picture: profile?.picture,
                email: profile?.email,
                token: jwt.sign({ email: profile?.email }, "myScret", {
                expiresIn: "1d",
                }),
            },
            });
        }
        } catch (error) {
        res.status(500).json({
            message: "An error occurred. Registration failed.",
        });
        }
    }

//login 

    const loginGoogle =  async (req, res) => {
        try {
        if (req.body.credential) {
            // console.log(req.body.credential);
            const verificationResponse = await verifyGoogleToken(req.body.credential);
            // console.log('verificationResponse',verificationResponse);
            if (verificationResponse.error) {
            return res.status(400).json({
                message: verificationResponse.error,
            });
            }
    
            const profile = verificationResponse?.payload;
             console.log(profile?.email);
            const existsInDB = await User.findOne({
                where: {
                email: profile?.email
            }})
            //const existsInDB = DB.find((person) => person?.email === profile?.email);
            if (!existsInDB) {
            return res.status(400).json({
                message: "You are not registered. Please sign up",
            });
            }
    
            return res.status(201).json({
            message: "Login was successful",
            user: {
                firstName: profile?.given_name,
                lastName: profile?.family_name,
                picture: profile?.picture,
                email: profile?.email,
                token: jwt.sign({ email: profile?.email }, process.env.JWT_SECRET, {
                expiresIn: "1d",
                }),
              
            },
            
            });
         
        }
        } catch (error) {
        res.status(500).json({
            message: error?.message || error,
        });
        }
    }

    module.exports = {
        signupGoogle,
        loginGoogle,

        };