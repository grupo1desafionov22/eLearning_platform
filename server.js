const express = require('express');
require('./config/sqlConnection');
require('./schemas/users');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser')
const { db } = require('./config/sqlConnection');

const passport = require('passport')
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const userRoutes = require ('./routes/userRoutes');
const googleRoutes = require ('./routes/googleRoutes');


//passport middleware
require('./middlewares/passport_middleware')

// Routes modules:
const coursesRouter = require('./routes/coursesRoutes');
const usersRouter = require('./routes/usersRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cookieParser());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(
    cors({
      origin: ["http://localhost:3000", 'http://seenstevo.pythonanywhere.com/recom?user_id=2&course_id=4'],
      methods: "GET,POST,PUT,DELETE,OPTIONS",
      credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
    })
  );
app.use(passport.initialize())

//synchronizing the database and forcing it to false so we dont lose data
/* db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
}) */
// Routes:
app.use('/courses', coursesRouter);
app.use('/users', usersRouter)

app.use('/api/users', userRoutes)

app.use('/google', googleRoutes)



app.use(express.static('client/build'));
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));

app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));



