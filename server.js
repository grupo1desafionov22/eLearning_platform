const express = require('express');
require('./utils/db_mongo')
const cors = require('cors');
require('dotenv').config();
const path = require('path');

// Routes modules:
const coursesRouter = require('./routes/coursesRoutes');
const usersRouter = require('./routes/usersRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());




// Routes:
app.use('/', coursesRouter);
app.use('/users', usersRouter)


app.use(express.static('client/build'));
    
/*     app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
 */
app.listen(PORT, () => console.log(`Server started http://localhost:${PORT}`));