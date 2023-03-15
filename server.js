const express = require('express');
require('./config/sqlConnection');
require('./schemas/users');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser')
const { db } = require('./config/sqlConnection');
const userRoutes = require ('./routes/userRoutes')

// Routes modules:
// const coursesRouter = require('./routes/coursesRoutes');
const usersRouter = require('./routes/usersRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

//synchronizing the database and forcing it to false so we dont lose data
/* db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
}) */
// Routes:
// app.use('/', coursesRouter);
app.use('/users', usersRouter)

app.use('/api/users', userRoutes)



app.use(express.static('client/build'));
    
/*     app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'))); */

app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));



