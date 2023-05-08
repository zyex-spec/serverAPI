import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export async function validarHabitacion (datosReserva,respuesta)
{
    let objetoServicioHabitacion = new ServicioHabitacion()
    try{
        await objetoServicioHabitacion.buscarPorId(datosReserva.idhabitacion)
        return true
    }
    catch(error){
        return false
    }
}
