let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Enter Words'
  m.reply('Sending')
  let res = `https://api.xteam.xyz/randomimage/wpmobile?apikey=beliapikey`
  conn.sendFile(m.chat, res, 'wpmobile.jpg', `he he he`, m, false)
}
handler.help = ['wpmobile'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(wpmobile)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

