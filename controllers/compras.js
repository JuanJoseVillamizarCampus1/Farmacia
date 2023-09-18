//Total de medicamentos vendidos por cada proveedor.
const {getCollection}= require('../controllers/medicamentos')
const {response} = require('express')
async function ventasProve(req,res=response) {
    try {
        const collection = await getCollection('Compras');
        const documento = await collection.aggregate([
          {
            $unwind: "$medicamentosComprados"
          },
          {
            $group: {
              _id: "$proveedor.nombre",
              totalMedicamentosVendidos: {
                $sum: "$medicamentosComprados.cantidadComprada"}
            }
          }
        ]).toArray();
        res.json(documento)
    } catch (error) {
        console.log(error);
    }
   
}
module.exports= {
    ventasProve
}