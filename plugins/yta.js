//Thx To Kanna Mentahannya
//Saya Ambil Dari Tmn Saya :v
let limit = 1026
let fetch = require('node-fetch')
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `Example:\n${usedPrefix + command} https://www.youtube.com/watch?v=xylh_sJAYdc`
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  m.reply(isLimit ? `File Size: ${filesizeF}\n🔸 File size above ${limit} MB, download via: ${dl_link}` : global.wait)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
┏┉━━━━━━━━━━━❏
┆ *YOUTUBE MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Title:* ${title}
│• *Type:* MP3
┆• *📥 File Size* ${filesizeF}
└❏
`.trim(), m, null, {
    asDocument: chat.useDocument, mimetype: 'audio/mp4', ptt: true, contextInfo: {
        externalAdReply: {
            title: '▶︎ ━━━━━━━•────────────────── ', 
            body: 'Alice Music Player',
            description: 'Now Playing',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/8bbbb1e410f37d37c8d62.jpg')).buffer(),
         mediaUrl: `https://youtu.be/Rz8d06NfZI4`
        }
     }
  })
}
handler.help = ['mp3/tya'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
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