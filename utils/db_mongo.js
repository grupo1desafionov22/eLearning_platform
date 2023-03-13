const mongoose = require("mongoose");
require('dotenv').config();
mongoose.set('strictQuery', true);

const url = process.env.DB_URL_ATLAS;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to Mongodb established :)"));

module.exports = mongoose;