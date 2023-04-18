import mongoose from "mongoose";

const Schema = mongoose.Schema

const Reserva = new Schema({
    nombre: {
        type:String,
        required: true
    },
    apellido: {
        type:String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    fechaIni:{
        type: Date,
        required: true
    },
    fechaFin:{
        type: Date,
        required: true
    },
    numeropersonas:{
        type: Number,
        required: true
    },
    idhabitacion:{
        type: String,
        required: true
    },
    numerodeniños:{
        type: Number,
        required: true
    },
    numerodeadultos:{
        type: Number,
        required: true
    }
})

export const modeloHabitacion=mongoose.model('reserva',Reserva)