export class ControladorReservas{
    constructor(){}
    registrandoReseva(peticion,respuesta){
        try{
            let datosReserva = peticion.body
            console.log(datosReserva)
            respuesta.status(200).json({
                "mensaje":"exito agregando datos"
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }
    buscandoReserva(peticion,respuesta){
        try{
            let idReserva = peticion.params.idreserva
            console.log(idReserva)
            respuesta.status(200).json({
                "mensaje":"exito buscando reserva"
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }
    buscandoReservas(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje":"exito buscando reservas"
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }
    editandoReserva(peticion,respuesta){
        let idReserva = peticion.params.idreserva
        let datosReserva = peticion.body
        console.log(idReserva)
        console.log(datosReserva)
        try{
            respuesta.status(200).json({
                "mensaje":"exito editando reserva"
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }

    eliminandoReserva(peticion,respuesta){
        try{
            let idReserva = peticion.params.idreserva
            console.log(idReserva)
            respuesta.status(200).json({
                "mensaje":"exito eliminando reserva"
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion "+error
            })
        }
    }
}