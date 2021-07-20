const express = require('express')
const router = express.Router();

const Project = require('../models/Project.js')
const Advice = require('../models/Advice')
const {adviceValidation} = require('../validations/advice')
const manifest = require('../public/manifest.json');
const { json } = require('express');

router.get('/', async (req, res) => {
    let projects = []
    try{
        projects = await Project.find({name: /(en-keremet-kun|mektepke-zhol)/}).exec();
    }
    catch(err){
        throw(err)
    }
    
    res.cookie('foo', 'bar', {sameSite:'Lax'})
    res.render('pages/index', { title: "Басты бет", activePage: '/', manifest, projects})
})

router.post('/', async (req, res) => {
    
    const {error} = adviceValidation(req.body)
    if(error)
        res.json(error.message);
    else{
        let advice = new Advice(req.body);
    
        try{
            await advice.save()
        }
        catch(err){
            throw err
        }
    
        res.json('Сіздің өтініш форманыз қабылданды.')
    }
})

module.exports = router;
