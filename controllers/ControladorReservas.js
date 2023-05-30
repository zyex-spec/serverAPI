import { ServicioReserva } from "../services/ServicioReserva.js"
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
import { validarHabitacion } from "../helpers/validarHabitacion.js"

export class ControladorReservas{
    constructor(){}
    async registrandoReserva(peticion,respuesta){
        let datosReserva = peticion.body
        let objetoServicioReserva = new ServicioReserva()
        let objetoServicioHabitacion = new ServicioHabitacion()
        let fecha1 = new Date(datosReserva.fechaIni)
        let fecha2 = new Date(datosReserva.fechaFin)
        let totalPersonasReserva = datosReserva.numerodeniños + datosReserva.numerodeadultos
        try{
            let habitacion = await objetoServicioHabitacion.buscarPorId(datosReserva.idhabitacion)
            let totalPersonas = habitacion.numeropersonas
            if(await validarHabitacion(datosReserva) == false){
                respuesta.status(400).json({
                    "Mensaje":"No se encontro la habitacion: "+datosReserva.idhabitacion
                })
            }
            else if(fecha1>fecha2){
                respuesta.status(400).json({
                    "Mensaje":"La fecha inicial debe ser anterior a la fecha final"
                })
            }
            else if(totalPersonasReserva>totalPersonas){
                respuesta.status(400).json({
                    "Mensaje":"Se supera la cantidad maxima de personas para esta habitacions"
                })
            }
            else{
                let habitacion = await objetoServicioHabitacion.buscarPorId(datosReserva.idhabitacion)
                let vlrNoche = habitacion.precio
                let diferenciaEnDias = ((((fecha2 - fecha1)/1000)/60)/60)/24;
                let vlrReserva = diferenciaEnDias*vlrNoche
                datosReserva.costoreserva = vlrReserva
                await objetoServicioReserva.registrar(datosReserva)
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
    async buscandoReserva(peticion,respuesta){
        let objetoServicioReserva = new ServicioReserva()
        try{
            let idReserva = peticion.params.idreserva
            respuesta.status(200).json({
                "Mensaje":"Exito buscando reserva",
                "Reserva": await objetoServicioReserva.buscarPorId(idReserva)
            })
        }
        catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion "+error
            })
        }
    }
    async buscandoReservas(peticion,respuesta){
        let objetoServicioReserva = new ServicioReserva()
        try{
            respuesta.status(200).json({
                "Mensaje":"Exito buscando reservas",
                "Reservas": await objetoServicioReserva.buscarTodas()
            })
        }
        catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion "+error
            })
        }
    }
    async editandoReserva(peticion,respuesta){
        let idReserva = peticion.params.idreserva
        let datosReserva = peticion.body
        let objetoServicioReserva = new ServicioReserva()
        try{
            await objetoServicioReserva.editar(idReserva,datosReserva)
            respuesta.status(200).json({
                "Mensaje":"Exito editando reserva"
            })
        }
        catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion "+error
            })
        }
    }

    async eliminandoReserva(peticion,respuesta){
        let objetoServicioReserva = new ServicioReserva()
        try{
            let idReserva = peticion.params.idreserva
            await objetoServicioReserva.eliminar(idReserva)
            respuesta.status(200).json({
                "Mensaje":"Exito eliminando reserva"
            })
        }
        catch(error){
            respuesta.status(400).json({
                "Mensaje":"Fallamos en la operacion "+error
            })
        }
    }
}