const { mediafireDl } = require('../lib/mediafire.js')
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
if (!text) return m.reply(`Send orders ${usedPrefix + command} *link mediafire*`)
if (!args[0].includes('mediafire.com')) return m.reply(error.linkmf)
let mdjon = args.join(' ')
res = await mediafireDl(mdjon)
result = `「 *MEDIAFIRE DOWNLOAD* 」
*Data Successfully Obtained!*
🆔 Name : ${res[0].nama}
📊 Size : ${res[0].size}
💬 Link : ${res[0].link}
_Wait for the Media Upload Process_`
m.reply(result)
//await sleep(100)
conn.sendFile(m.chat, res[0].link, res[0].nama, null, m, false, {asDocument:true, mimetype:res[0].mime})
}
handler.command = ['mediafire']

module.exports = handler
