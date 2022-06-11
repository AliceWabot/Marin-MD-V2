let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Enter Parameters 😵'
  m.reply('*processing')
  let res = `https://caliphapi.com/api/lolimaker?text=${response[0]}&text2=elyas&apikey=wVLiUzSa`
  conn.sendFile(m.chat, res, 'lolilogo.jpg', `he he`, m, false)
}
handler.help = ['logololi'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logololi)$/i

module.exports = handler
