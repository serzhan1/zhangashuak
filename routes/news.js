const express = require('express'),
    router  = express.Router();

router.get('/', (req,res) => {
    res.send('<h1>News Page</h1>')
})

module.exports = router;