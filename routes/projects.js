const express = require('express')
const router = express.Router();

const Project = require('../models/Project')
const manifest = require('../public/manifest.json')

router.get('/', async (req,res) => {
    let content = []
    
    try {
        content = await Project.find({}).exec();
    }
    catch (err) {
        throw err
    }
    res.render('pages/projects', { 
        title: "Жобалар", 
        activePage: '/projects', 
        manifest, 
        content
    })

})

router.get('/:name', async(req,res) => {
    let project = []

    try{
        project = await Project.findOne({name: req.params.name})
    }
    catch(err){
        throw err
    }
    res.render('pages/project',{
        title: project.title,
        activePage:'/projects',
        manifest,
        project
    })

})

module.exports = router;