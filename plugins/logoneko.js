let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Enter text1|text2\n\nexample: .logoneko alice|bot'
  m.reply('*Wait ngab*\nProses...')
  let res = `https://caliphapi.com/api/girlneko?text=${response[0]}&text2=${response[1]}&apikey=ELYASXD`
  conn.sendFile(m.chat, res, 'nekologo.jpg', `he he`, m, false)
}
handler.help = ['logoneko'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logoneko)$/i

module.exports = handler
