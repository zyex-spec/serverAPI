import express from 'express'
import {ControladorHabitaciones} from '../controllers/ControladorHabitaciones.js'
import { ControladorReservas } from '../controllers/ControladorReservas.js'

let controladorHabitacion = new ControladorHabitaciones()
let controladorReserva = new ControladorReservas()

//voy a separar personalizar las rutas de cada servicio del API
export let rutas = express.Router()

rutas.get('/buscarhabitaciones',controladorHabitacion.buscandoHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitacion.buscandoHabitacion)
rutas.post('/registrarhabitacion',controladorHabitacion.registrandoHabitacion)
rutas.put('/editandohabitacion/:idhabitacion',controladorHabitacion.editandoHabitacion)
  //reservas
rutas.get('/buscarreservas',controladorReserva.buscandoReservas)
rutas.get('/buscarreserva/:idreserva',controladorReserva.buscandoReserva)
rutas.post('/registrarreserva',controladorReserva.registrandoReseva)
rutas.put('/editandoreserva/:idreserva',controladorReserva.editandoReserva)
rutas.put('/eliminarreserva/:idreserva',controladorReserva.eliminandoReserva)