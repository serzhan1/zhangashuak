const express = require('express'),
    router = express.Router();
const manifest = require('../public/manifest.json')

router.get('/', (req, res) => {
    res.render('pages/about', { title: "tit", manifest: manifest })
})

module.exports = router;