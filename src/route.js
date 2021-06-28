const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'})) // → Caminho da pasta 'home'
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'})) // → Caminho da pasta 'create-pass'

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open) // → Caminho da pasta 'room'
route.post('/enterroom', RoomController.enter)

// Formato que o formulário de dentro da modal tem que passar a info
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route