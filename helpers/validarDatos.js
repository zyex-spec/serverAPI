export function validarDatos (datosHabitacion)
{
if(datosHabitacion.precio<100000 && datosHabitacion.numeropersonas<2){
    return "El precio por noche debe ser superior a $100.000 y la cantidad maxima de personas debe ser por lo menos 2"
}
else if (datosHabitacion.precio<100000){
    return "El precio por noche debe ser superior a $100.000"
}
else if (datosHabitacion.numeropersonas<2){
    return "La cantidad maxima de personas debe ser por lo menos 2"
}
else{
    return true
}
}