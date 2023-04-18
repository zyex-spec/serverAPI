import mongoose from 'mongoose';
export async function establecerConexion(){
    try{
       await mongoose.connect(process.env.DATABASE)
       console.log("Exito estableciendo conexion con la base de datos")
    }catch(error){
        console.log("Error estableciendo conexion con la base de datos: "+error)
    }
}