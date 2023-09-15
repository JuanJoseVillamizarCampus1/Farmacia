const { response } = require("express");
const { MongoClient } = require('mongodb');


const client = new MongoClient(process.env.MONGO_URI);

// Función que obtiene la coleccion
async function getCollection(collectionName) {
  try {
    await client.connect();
    const database = client.db('farmaciaCampus'); 
    const collection = database.collection(collectionName);
    return collection;
  } catch (error) {
    console.error('Error al obtener la colección:', error);
  }
}
// Obtener todos los medicamentos con menos de 50 unidades en stock.
async function obtenerDatos(req, res=response) {
    try {
        const collection = await getCollection('Medicamentos');
        const documentos = await collection.find({"stock":{$lt:50}}).toArray();
        res.json(documentos);
    } catch (error) {
        console.log(error);
        console.log('Error al obtener la conexion');
    }
}
//Listar los proveedores con su información de contacto en medicamentos.
async function obternerProveedores(req, res= response) {
    try {
        const collection = await getCollection('Medicamentos');
        const documentos = await collection.distinct("proveedor");
        res.json(documentos);
    } catch (error) {
        console.log(error);
        console.log('Error al obtener los datos');
    }
}
//Medicamentos comprados al ‘Proveedor A’.
async function MedicamentosCompProvA(req, res = response) {
    try {
        const colllection = await getCollection('Medicamentos');
        const documentos = await colllection.find({"proveedor.nombre":"ProveedorA"}).toArray();
        res.json(documentos);
    } catch (error) {
        console.log(error);
        console.log('Error al obtener los datos');
    }
}
//Medicamentos que caducan antes del 1 de enero de 2024
async function caducidaMed(req,res = response) {
    try {
        const fecha1 = new Date("2024-01-01T00:00:00.000+00:00")
        const collection = await getCollection('Medicamentos')
        const documentos = await collection.find({"fechaExpiracion":{$lt:fecha1}}).toArray()
        res.json(documentos)
    } catch (error) {
        console.log(error);
        console.log('Error al obtener datos');
    }
}
//Total de medicamentos vendidos por cada proveedor.
async function totalVentasVen(req, res=response) {
    try {
        const collection= await getCollection('Medicamentos')
        const documentos = await collection.find()
        res.json(documentos)
    } catch (error) {
        
    }
}

module.exports = { obtenerDatos,obternerProveedores,MedicamentosCompProvA,getCollection,caducidaMed};
