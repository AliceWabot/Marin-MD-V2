let fetch = require('node-fetch')
let handler = async (m, { text }) => {
    if (!text) throw `Uhm .. Where's the text??`
    let res = await fetch(`https://x-restapi.herokuapp.com/api/arti-kata?q=${text}&apikey=BETA`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    m.reply(`
*Search: ${text}*
${json.artikata}

`.trim())
}
handler.help = ['articles <text>']
handler.tags = ['internet']
handler.command = /^articles$/i
module.exports = handler
