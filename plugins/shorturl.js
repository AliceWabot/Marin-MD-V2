let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'where is the url?'
  let res = await fetch(`http://hadi-api.herokuapp.com/api/shorturl?url=${text}`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw 'Invalid Link!\nCheck your url'
}
handler.help = ['shorturl'].map(v => v + ' <url>')
handler.tags = ['shortlink']
handler.command = /^shorturl$/i

module.exports = handler
