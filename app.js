require('dotenv').config()
const Server = require('./model/Server')

const servidor = new Server()

servidor.listen()