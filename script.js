
var nombre = prompt ("Ingrese su nombre", "")
var apellido = prompt ("Ingrese su apellido")
var edad = prompt ("Indique su edad")
let tabla = {nombre, apellido, edad}
console.table(tabla)

if (edad > 18){
    console.log("bienvenido")
} else {
    console.log("debe ser mayor de edad")
}