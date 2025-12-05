const router = require('express').Router()
const menu = require('../../../data/menu.json')

router.get('/menu/:id', (request, response) => {
    const { id } = request.params
    const found = menu.find(item => item.id.toString() === id)
    if (found) return response.send(found)
    response.json(found)
    response.status(400).json({ message: "Item on menu not found" })
})

module.exports = router