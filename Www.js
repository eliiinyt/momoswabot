
let fs = require('fs')
let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
let vn = './media/menu.mp3'
const rows = [
//LO QUE SE MUESTRA + DESCRIPCION + COMANDO 
{title: 'waifu', description: "envía una imágen de una waifu random", rowId:".waifu"},
{title: 'maid', description: "manda una imagen de una maid", rowId:".maid"},
{title: 'Marin', description: "envía una imagen de Marin Kitagawa", rowId:".marin"},
{title: 'uniforme', description: "envía una imagen de una waifu con uniforme", rowId:".uniforme"},
]
const sections = [{title: "Comandos de internet:", rows: rows}]
const button = {
buttonText: 'SELECCIONE UNA OPCIÓN',
description: "Lista de comandos de internet:\n\n_エリンボット四番_",
sections: sections,
listType: 1
//NOTA: PARA HACER UN SALTO DE LINEA DE USA \n 
//NOTA 2: EL COMANDO PARA PEDIR ESTE MENU ES #wamenu
//NOTA 3: PARA ACTIVAR ESTE COMANDO DEBES ELIMINAR LOS /* DEL INICIO Y EL */ /* DEL FINAL DE ESTE CODIGO
}  
conn.sendMessage(m.chat, button, MessageType.listMessage)
}
handler.command = /^menuinternet$/i
handler.fail = null
module.exports = handler
