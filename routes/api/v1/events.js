const router=require('express').Router()
const menus=require('../../../data/events.json')
const event = require('../../../models/Event')

//apis


router.get('/event/:eventId', (request, response) => {
    const { eventId } = request.params
    const found = events.find(event => event.id.toString() === eventId)
    if (found) return response.send(found)
    
    response.status(400).json({ error: `Couldn't find event ${eventId}`
    })
})



//post route
router.post('/events',async(req,res)=>{
    const newitem=await event.create(req.body)
    res.json(newitem)
   
})

module.exports = router
