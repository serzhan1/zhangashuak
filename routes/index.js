const express = require('express')
const router = express.Router();
const manifest = require('../public/manifest.json')

router.get('/', (req, res) => {
    res.render('pages/index', { title: "Басты бет", manifest })
})

module.exports = router;