let fetch = require('node-fetch');
let handler = async(m, { conn, usedPrefix, command, text }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/nhentai/' + `${text}` + '?apikey=9b817532fadff8fc7cb86862');
  if (!res.ok) throw await res.text();
  let json = await res.json();
  let infos = json.result.info;
  console.log(infos);
  let respuesta = `*Título:*\n${json.result.title_romaji}\n*información:*\n*personajes:* ${infos.characters}\n\n*etiquetas:* ${infos.tags}\n\n*paginas:* ${infos.pages}`;
  let paginas = infos.pages;
  //console.log(res);
  //console.log(json);
 await conn.sendButtonImg(m.chat, json.result.image[0], `${respuesta}`, 'sexo', '¿Otra?', `${bucle}`, m);
console.log(paginas);
  async function bucle() {
    for (let i=0; i < paginas; i++ ) {
    await conn.sendFile(m.chat, json.result.image[i], `${i}`, `pagina: ${i}`, m);
    console.log('hola');
    }
    }
bucle();
};
handler.help = ['nhentai <code>'];
handler.tags = ['internet'];
handler.command = /^(nhentai)$/i;
module.exports = handler;