let handler = async (m, { conn, args }) => {
 
if (random(0, 6) == 1) {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))

  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupParticipantsUpdate(m.chat, [user], "perdió la vida")
m.reply(m.chat, 'pendejo perdió la ruleta', m)
  
}
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
handler.help = ['numran <Numero1 Numero2>'];
handler.command = /^(ruleta rusa)$/i;
handler.tags = ['main'];
module.exports = handler