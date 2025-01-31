const uploadImage = require('../lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys-md')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `reply image with command\n\n${usedPrefix + command} <${atas ? atas : 'top text'}>|<${bawah ? bawah : 'bottom text'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_Mime ${mime} is not supported!_`
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
try {
    let stiker = await sticker(null, meme, global.packname, global.author)
    await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    m.reply('failed to create a sticker, Attempting to Send a picture')
    await conn.sendFile(m.chat, meme, 'image.png', '🤗', m)
  }
}
handler.help = ['smeme<teks atas>|<teks bawah>']
handler.tags = ['sticker']
handler.command = /^(smeme)$/i

handler.limit = false

module.exports = handler
