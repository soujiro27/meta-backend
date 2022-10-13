const { required } = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  firstName:{
    type:String,
    required: true,
  },
  lastName:{
    type:String,
    required: true
  },

  address:{
    type:String,
    required: true
  },
  age:{
    type: Number,
    required: false
  },
  phone:{
    type: String,
    required:true
  },
  email:{
    type: String,
    required:false
  },
  updatedDate:{
    type:Date,
    required: false
  }

});

const model = mongoose.model('Clients', Schema);

module.exports = model;


