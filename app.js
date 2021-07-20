require('dotenv').config()

const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const morgan = require('morgan')
const { shouldSendSameSiteNone } = require('should-send-same-site-none');
const app = express();
const PORT = process.env.PORT || 3000;

const root = require('./routes'),
    about = require('./routes/about'),
    contacts = require('./routes/contacts'),
    converts = require('./routes/converts'),
    projects = require('./routes/projects')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

// app.use(morgan(process.env.LOG_LEVEL))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.resolve(__dirname,'public')))
// app.use(shouldSendSameSiteNone);

app.use('/',root)
app.use('/about',about)
app.use('/contacts',contacts)
app.use('/converts',converts)
app.use('/projects',projects)


app.listen(PORT, () => {
    console.log(`server running at ${PORT} port`)
} )