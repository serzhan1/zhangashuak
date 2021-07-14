const express = require('express'),
    router  = express.Router();

router.get('/', (req,res) => {
    res.send('<h1>Contacts Page</h1>')
})

module.exports = router;