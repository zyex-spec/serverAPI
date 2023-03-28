import express from 'express'

//voy a separar personalizar las rutas de cada servicio del API
export let rutas = express.Router()

rutas.get('/buscarhabitaciones', function (req, res) {
    res.send('Estoy buscando todas las habitaciones')
})
  
rutas.get('/buscarhabitacion', function (req, res) {
      res.send('Estoy buscando una habitacion')
})
  
rutas.post('/registrarhabitacion', function (req, res) {
      res.send('Estoy registrando una habitacion')
})
  
rutas.put('/editandohabitacion', function (req, res) {
      res.send('Estoy actualizando una habitacion')
})
  //reservas
rutas.get('/buscarreservas', function (req, res) {
      res.send('Estoy buscando todas las reservas')
})
    
rutas.get('/buscarreserva', function (req, res) {
        res.send('Estoy buscando una reserva')
})
    
rutas.post('/registrarreserva', function (req, res) {
        res.send('Estoy registrando una reserva')
})
    
rutas.put('/editandoreserva', function (req, res) {
        res.send('Estoy actualizando una reserva')
})
  
rutas.put('/eliminarreserva', function (req, res) {
      res.send('Estoy eliminando una reserva')
})