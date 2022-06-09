module.exports = handler
let fetch = require('node-fetch');
let handler = async(m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu');
  if (!res.ok) throw await res.text();
  let json = await res.json();
  if (!json.url) throw 'Ups, un error!';
  conn.send2ButtonImg(m.chat, json.url, '¿qué tal?', 'sexo', '¿Otra?', `${usedPrefix + command}`, '¿nsfw?', `${usedPrefix}nsfw`, m);
};
handler.help = ['waifu'];
handler.tags = ['internet'];
handler.command = /^(waifu)$/i;
module.exports = handler;

