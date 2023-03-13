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
    email: { 
      type: String, 
      required: true 
    },
    courses: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Course' 
    }]
  };
  
const userSchema = mongoose.Schema(objectSchema);
const User = mongoose.model('User', userSchema);
module.exports = User;
