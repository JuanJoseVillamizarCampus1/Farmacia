const expres = require('express')
const {dbconnection} = require('../database/config')
const routerMedi = require('../routes/medicamentos.routes')
class Server{
    constructor(){
        this.app = expres()
        this.port = process.env.PORT
        this.middlewares()
        // this.connectDb()
        this.path={
            medicamentos:'/api/medicamentos'
        }
        this.routes()
    }
    // async connectDb (){
    //     await dbconnection()
    // }
    middlewares(){
        this.app.use(expres.json())
    }
    routes(){
        this.app.use(this.path.medicamentos,routerMedi)
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`El servidor esta corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;