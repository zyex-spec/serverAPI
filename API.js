import express from 'express'
import {rutas} from './routes/rutas.js'
import { establecerConexion } from './database/conexion.js'

export class API {

    constructor(){
        this.app = express()
        this.conectarConBD()
        this.enrutarPeticiones()
    }
    levantarServidor(){
        this.app.listen(process.env.PORT,()=>console.log(`Servidor encendido en ${process.env.PORT}`))
    }
    enrutarPeticiones(){
        this.app.use(express.json())
        this.app.use('/',rutas)
    }
    conectarConBD(){
        establecerConexion()
    }
}