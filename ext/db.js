const db = require('mongoose')

db.connect(process.env.DB_URI, 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false,
  useCreateIndex: true
});

module.exports = db;