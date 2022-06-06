const { createCanvas, loadImage } = require('canvas')
const Jimp = require("jimp");
const fs = require("fs");
let handler = async(m, { conn, args, usedPrefix }) => {
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')
// Write "Awesome!"
ctx.font = '30px Impact'
ctx.rotate(0.1)
ctx.fillText('Awesome!', 50, 100)
// Draw line under text
var text = ctx.measureText('Awesome!')
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.beginPath()
ctx.lineTo(50, 102)
ctx.lineTo(50 + text.width, 102)
ctx.stroke()
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