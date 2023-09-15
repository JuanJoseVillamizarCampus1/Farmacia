const expres = require('express')
//const {dbconnection} = require('../database/config')
const routerMedi = require('../routes/medicamentos.routes')
const routesVent = require('../routes/ventas.routes')
const routerCom = require('../routes/compras.routes')
class Server{
    constructor(){
        this.app = expres()
        this.port = process.env.PORT
        this.middlewares()
        // this.connectDb()
        this.path={
            medicamentos:'/api/medicamentos',
            ventas:'/api/ventas',
            compras : '/api/compras'
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
        this.app.use(this.path.medicamentos,routerMedi);
        this.app.use(this.path.ventas,routesVent);
        this.app.use(this.path.compras,routerCom);
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`El servidor esta corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = Server;