const db = require('../ext/db');

const schema = new db.Schema({
  name: {
    type: String, 
    required: true,
    maxlength: 255,
    minlength: 2
  },
  surname: {
    type: String, 
    required: true,
    maxlength: 255,
    minlength: 2
  },
  email: {
    type: String, 
    required: true,
    maxlength: 255,
    minlength: 5
  },
  phone: {
    type: String, 
    required: true, 
    maxlength: 20,
    minlength: 4
  },
  message:{
    type: String, 
    required: true
  }
})

module.exports = db.model('Advice', schema);