import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
import { validarDatos } from "../helpers/validarDatos.js"

export class ControladorHabitaciones{
    constructor(){}
    async registrandoHabitacion(peticion,respuesta){
        let datosHabitacion = peticion.body
        let objetoServicioHabitacion = new ServicioHabitacion()
        try{
            if(validarDatos(datosHabitacion)!=true){
                let errorDatos = validarDatos(datosHabitacion)
                respuesta.status(400).json({
                    "Mensaje":"Fallamos en la operacion, "+errorDatos
                })
            }
            else{
                await objetoServicioHabitacion.registrar(datosHabitacion)
                respuesta.status(200).json({
                    "Mensaje":"Exito agregando datos"
                })
            } 
        }
        catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion "+error
            })
        }
    }
    async buscandoHabitacion(peticion,respuesta){
        let objetoServicioHabitacion = new ServicioHabitacion()
        try{
            let idHabitacion = peticion.params.idhabitacion
            respuesta.status(200).json({
                "Mensaje":"Exito buscando habitacion",
                "Habitacion": await objetoServicioHabitacion.buscarPorId(idHabitacion)
            })
        }
        catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion "+error
            })
        }
    }
    async buscandoHabitaciones(peticion,respuesta){
        let objetoServicioHabitacion = new ServicioHabitacion()
        try{
            respuesta.status(200).json({
                "Mensaje":"Exito buscando habitaciones",
                "Habitaciones": await objetoServicioHabitacion.buscarTodas()
            })
        }
        catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion "+error
            })
        }
    }
    async editandoHabitacion(peticion,respuesta){
        let idHabitacion = peticion.params.idhabitacion
        let datosHabitacion = peticion.body
        let objetoServicioHabitacion = new ServicioHabitacion()
        try{
            await objetoServicioHabitacion.editar(idHabitacion,datosHabitacion)
            respuesta.status(200).json({
                "Mensaje":"Exito editando habitacion"
            })
        }
        catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion "+error
            })
        }
    }
}