const mongoose = require('mongose');

const userSchema = mongoose.Schema({
  name:{
    type: String,
    maxLength: 50
  },
  email:{
    type: String,
    trim: true,
    unique: 1
  },
  password:{
    type: String,
    minglength:5
  },
  lastname:{
    type: String, 
    maxlength: 50
  },
  role:{
    type: String,
    default: 0 
  },
  //image: String,
  token:{
    type:String,
  },
  tokenExp:{
    tye: Number
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }