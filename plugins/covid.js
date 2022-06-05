let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/' + (text)))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.confirmed) throw 'Country?'
  if (json.confirmed) m.reply(`
🌐 Country : ${text}
💢 Confirmed : ${json.confirmed.value}
💕 Healed : ${json.recovered.value}
💮 Died : ${json.deaths.value}
⚜️ Update Info : ${json.lastUpdate}
`.trim())
  else throw json
}
handler.help = ['covid'].map(v => v + ' <country>')
handler.tags = ['internet']
handler.command = /^(corona|covid|covid19)$/i
//susu, tetek, oppai
module.exports = handler