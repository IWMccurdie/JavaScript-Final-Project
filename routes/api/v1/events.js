const router=require('express').Router()
const menus=require('../../../data/events.json')

//apis


router.get('/event/:eventId', (request, response) => {
    const { eventId } = request.params
    const found = events.find(event => event.id.toString() === eventId)
    if (found) return response.send(found)
    
    response.status(400).json({ error: `Couldn't find event ${eventId}`
    })
})

module.exports = router
