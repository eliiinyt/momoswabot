const { createCanvas, loadImage } = require('canvas')
const Jimp = require("jimp");
const fs = require("fs");
let handler = async(m, { conn, args, usedPrefix }) => {
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')
ctx.lineWidth = 5;
// Color de línea
ctx.strokeStyle = "#ffffff";
// Color de relleno
ctx.fillStyle = "#F4511E";
// Dibujamos un rectángulo con lados iguales
ctx.rect(5, 5, 200, 200);
// Hacemos que se dibuje
ctx.stroke();
// Lo rellenamos
ctx.fill();
// Write "Awesome!"
// Draw line under text
/*const data =
  canvas.toDataURL;
const buffer = Buffer.from(data, "base64");
Jimp.read(buffer, (err, res) => {
  if (err) throw new Error(err);
  res.quality(5).write("resized.jpg");
});*/
//console.log('<img src="' + canvas.toDataURL() + '" />')
conn.sendFile(m.chat, canvas.toDataURL(), '', '', m);
}
handler.command = /^(canvastest)$/i
module.exports = handler