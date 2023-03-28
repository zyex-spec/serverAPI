import {API} from './API.js'
import * as dotenv from 'dotenv' 
dotenv.config()
console.log(process.env.PORT)

let servidorHotel = new API()
servidorHotel.levantarServidor()