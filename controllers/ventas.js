const { response } = require("express");
const {getCollection} = require('../controllers/medicamentos')
//Obtener recetas médicas emitidas después del 1 de enero de 2023.
async function recetas (req,res=response){
    try {
        const fecha = new Date("2023-01-01T00:00:00.000+00:00")
        const collection = await getCollection('Ventas');
        const documentos = await collection.find({fechaVenta:{$gt:fecha}}).toArray()
        res.json(documentos)
    } catch (error) {
        console.log(error);
        console.log('Error al obtener los datos XD');
    }
}
//Total de ventas del medicamento ‘Paracetamol’.
async function paracetamol (req,res=response){
    try {
        const collection = await getCollection('Ventas');
        const documentos = await collection.find({"medicamentosVendidos.nombreMedicamento":"Paracetamol"}).toArray()
        res.json(documentos)
    } catch (error) {
        console.log(error);
        console.log('Error al obtener los datos XD');
    }
}


module.exports= {
    recetas,paracetamol
}