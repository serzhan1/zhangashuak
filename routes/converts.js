const express = require('express'),
    router  = express.Router();
const Convert = require('../models/Convert');
const manifest = require('../public/manifest.json')

router.get('/', async (req,res) => {
    res.render('pages/converts', { title: "Есептер", activePage: '/converts', manifest, donationMessage:false })
})

router.get('/get', async(req,res) => {
    let donationMessage = '';
    
    const {convertID} = req.query;
    
    if(convertID && !isNaN(convertID)){
        donationMessage = await getConvert(convertID)
    }else{
        donationMessage = 'Мейірім конвертінің талонының артқы жағындағы бірегей номерді теріңіз'
    }
    
    res.render('pages/converts', { title: "Есептер", activePage: '/converts', manifest, donationMessage})
})

async function getConvert(convertID){
    let convert

    try{
        convert = await Convert.findOne({id: convertID})
        if(convert){
            return convert.donation
        }else{
            return 'Оңдай конверт жоқ'
        }
    
    }
    catch(err)
    {
        throw err;
    }
}

module.exports = router;