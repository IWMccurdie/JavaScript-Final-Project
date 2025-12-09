const router=require('express').Router()
const menus=require('../../../data/menu.json')
const menu = require('../../../models/Menu')

//apis










//post route
router.post('/menus',async(req,res)=>{
    const newitem=await menu.create(req.body)
    res.json(newitem)

})


module.exports=router