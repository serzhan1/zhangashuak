const db = require('../ext/db')

const schema = new db.Schema({
  id:{
    type: Number,
    required: true
  },
  donation: {
    type: String,
    required: true
  }
})

module.exports = db.model('Convert', schema);