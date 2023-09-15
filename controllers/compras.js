//Total de medicamentos vendidos por cada proveedor.
const {getCollection}= require('../controllers/medicamentos')
const {response} = require('express')
async function ventasProve(req,res=response) {
    const collection = await getCollection('Compras')
    const documento = await collection.aggregate([
        {$:{
            "proveedor.nombre" :"ProveedorB"
        }}
    ]).toArray()
    res.json(documento)
}
module.exports= {
    ventasProve
}