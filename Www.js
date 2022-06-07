const { createCanvas, loadImage } = require('canvas')
let handler = async (m) => {
  let img1 = await fetch('https://telegra.ph/file/988bf42ae67248d8c5a9d.jpg')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw '¿y la imágen?';
  let media = await q.download();
  let isImg = /image\/(png|jpe?g|gif)/.test(mime);
const canvas = createCanvas(1200, 1200);
const ctx = canvas.getContext('2d');
var img = new Image();
img.src = img1;
ctx.drawImage(img, 0, 0, 200, 1200);
conn.sendFile(m.chat, canvas.toDataURL(), '', '', m);
}
handler.command = /^(canvastest)$/i
module.exports = handler
