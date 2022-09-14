let nombre, lugar, valor;
console.log("el premio de concurso de mascotas\n")
console.log("introduce el nombre de tu mascota: \n")
nombre = prompt("nombre")
console.log("introduce el lugar del concurso en el que quedó: \n")
lugar = prompt("lugar")
console.log("introduce el valor de tu mascota: \n")
valor = prompt("valor")

if (lugar==1) {
console.log(`el premio de 1 lugar de ${nombre} es ${valor +2000}`)
} else if (lugar==2) {
console.log(`el premio de 2 lugar de ${nombre} es ${valor + 1500}`)
} else if (lugar==3) {
console.log(`el premio de 3 lugar de ${nombre} es ${valor + 600}`)
} else {
console.log("no hay premio para tu puesto")
}