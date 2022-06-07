const { createCanvas, loadImage } = require('canvas')
const Jimp = require("jimp");
const fs = require("fs");
let handler = async(m, { conn, args, usedPrefix }) => {
// Write "Awesome!"
// Draw line under text
function ejercicio1(){
 const canvas = createCanvas(300, 300)
const ctx = canvas.getContext('2d')
//Asigno a una variable el elemento del html que voy a usar
 //Alisto el canvas para que funcione
  ctx.lineWidth=1; //Defino el ancho de la linea en pixeles
  ctx.strokeStyle = '#000'; //Defino el color en hexagesimal
 
//EJEX
  ctx.beginPath(); // Pongo el lápiz
  ctx.moveTo(150,0); // lo ubicó para iniciar el dibujo
  ctx.lineTo(150,300); // trazo la linea hasta este punto
  ctx.stroke(); // levanto el lápiz
  ctx.closePath(); // me alisto para realizar otra parte del dibujo
//EJE Y
  ctx.beginPath(); // Pongo el lápiz
  ctx.moveTo(0,150);// lo ubicó para iniciar el dibujo
  ctx.lineTo(300,150);// trazo la linea hasta este punto
  ctx.stroke();// levanto el lápiz
  ctx.closePath();// me alisto para realizar otra parte del dibujo
 }
conn.sendFile(m.chat, canvas.toDataURL(), '', '', m);
}
handler.command = /^(canvastest)$/i
module.exports = handler