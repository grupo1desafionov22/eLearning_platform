const mongoose = require('mongoose');

const objectSchema = {
    
   
    name: { 
        type: String, 
        required: true,
        unique: true 
    },
    age: { 
        type: Number, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    course: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course' ,
        require: true},

}

const userSchema = mongoose.Schema(objectSchema);
const User = mongoose.model('User', userSchema);
module.exports = User;
