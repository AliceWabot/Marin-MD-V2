let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Enter Words'
  m.reply('Wait')
  let res = `https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'wolflogo.jpg', `© Alice 🥀`, m, false)
}
handler.help = ['wolflogo'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(wolflogo)$/i

module.exports = handler

