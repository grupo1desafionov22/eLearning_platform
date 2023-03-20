    // check if user sends correct token

    const passport = require('passport')
    const { Strategy } = require('passport-jwt')
    const { db } = require('../config/sqlConnection');
    const User = require('../schemas/users');
    require('dotenv').config();

    //comprueba si existe una cookie que se llame token
    const cookieExtractor = function (req) {
    let token = null
    if (req && req.cookies) token = req.cookies['token']
    return token
    }

    const opts = {
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: cookieExtractor,
    }

    passport.use(
    new Strategy(opts, async ({ email }, done) => {
        console.log(email);
        try {
            //saca el id del token y busca un usuario con ese id
        /* const { rows } = await db.query(
            'SELECT user_id, email FROM users WHERE user_id = $1',
            [id]
        ) */
        console.log(email);
        const user = await User.findOne({
            where: {
            email: email
        } 
        });
        console.log(user);
        
        if (!user) {
            throw new Error('401 not authorized')
        }

      

        return await done(null, user)
        } catch (error) {
        console.log(error.message)
        done(null, false)
        }
    })
    )