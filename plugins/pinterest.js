let xfar = require('xfarr-api')
let handler = async (m, { usedPrefix, command, conn, args }) => {
	 	  if (!args[0]) throw `Use format: ${usedPrefix}${command} naruto`
xfar.Pinterest(args[0]).then(async data => {
let pincpt = `🔗Link media : ${data.url}`
conn.sendFile(m.chat,data.url, 'pin.jpg', pincpt,m)})
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest)$/i

module.exports = handler
