const db = require('../ext/db');

const schema = new db.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 2
  },
  title: {
    type: String,
    required: true, 
    maxlength: 255,
    minlength: 2
  },
  image:{
    type: String,
    required: true
  },
  description:{
    type: String,
    maxlength: 255,
    minlength: 10
  },
  contentImages: {
    type: [String]
  },
  subtitle: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true,
  }
})

module.exports = db.model('Project', schema);
