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


});

const model = mongoose.model('Clients', Schema);

module.exports = model;

/*
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
createdDate:{
  type:Date,
  required: True
},
updatedDate:{
  type:Date,
  required: false
} */
