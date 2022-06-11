let imageToBase64 = require("image-to-base64");
let axios = require("axios");

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Please Enter Query', m)

  await m.reply('Searching...')
   axios.get(`https://api.zeks.xyz/api/resep-masak?apikey=MIMINGANZ&q=${text}`)
    .then((res) => {
      imageToBase64(res.data.thumb)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let hasil = `*${res.data.title}*\n\nLevel : ${res.data.tingkat}\nTime : ${res.data.duration}\nIngredients :${res.data.bahan}\nPortion : ${res.data.banyak}\nStep2 :\n${res.data.cara}\n\nSumber :\n${res.data.url}\n*Good luck! 😊`

     conn.sendFile(m.chat, buf, 'resep.jpg', hasil, m)
        })
    })
}
handler.help = ['recipe'].map(v => v + ' <Cook>')
handler.tags = ['internet']
handler.command = /^(recipe)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
