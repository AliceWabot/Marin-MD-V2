let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Enter the name of the region', m)

	axios.get(`https://tobz-api.herokuapp.com/api/jamdunia?lokasi=${text}&apikey=BotWeA`).then ((res) => {
	 	let hasil = `Regional Time *${text}*\n\nTime : ${res.data.time}\nDate : ${res.data.date}\nInfo : ${res.data.title}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['time'].map(v => v + ' <area>')
handler.tags = ['tools']
handler.command = /^(time)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler