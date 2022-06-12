let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Enter Text'
  m.reply('Wait')
  let res = `http://hadi-api.herokuapp.com/api/textpro/3d-underwater-text?teks=${response[0]}&teks2=alice`
  conn.sendFile(m.chat, res, 'underwatee.jpg', `🥶`, m, false)
}
handler.help = ['underwater'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(underwater)$/i

module.exports = handler
