const express = require('express'),
    router  = express.Router();

const manifest = require('../public/manifest.json')
const Project =  require('../models/Project')

router.get('/', (req,res) => {
    res.render('pages/contacts', { title: "Байланыс", activePage: '/contacts', manifest: manifest })
})

module.exports = router;