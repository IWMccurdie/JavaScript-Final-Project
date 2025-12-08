// inserting the json data manually
require('dotenv').config()
const mongoose=require('mongoose')
const connectDB=require('./config/db')
const Menu=require('./models/Menu')
const Event=require('./models/Event')
const menudata=require('./data/menu.json')
const eventdata=require('./data/events.json')

const seed_data=async()=> {
    await connectDB()

    await Menu.insertMany(menudata)
    await Event.insertMany(eventdata)

    console.log("data inserted")
}
seed_data()