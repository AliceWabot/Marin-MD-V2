// By Johannes 
// Mau copas? silahkan Kasih Nama saya 🗿
// Help BY YUTA

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
const { youtubeSearch } = require('@bochilteam/scraper')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} One piece`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Not found'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  let anu = `
[ YOUTUBE PLAY ]

*🔮 Title:* ${title}
*🔻 Audio File Size:* ${filesizeF}
*🔻 Video File Size:* ${yt2.filesizeF}
*🍃 Server:* ${usedServer}
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: await (await fetch(thumbnail)).buffer() }, 
           hydratedFooterText: `© Alice 🤍🥀`,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Website',
               url: instagram
             }

           },
               {
             quickReplyButton: {
               displayText: 'video ',
               id: `${usedPrefix}ytv ${url}`,
             }

            },
               {
             quickReplyButton: {
               displayText: 'Audio',
               id: `${usedPrefix}yta ${url}`,
             }

            },
               {
             quickReplyButton: {
               displayText: 'Youtube Search',
               id: `${usedPrefix}yts ${url}`, 
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['play'].map(v => v + ' <name>')
handler.tags = ['downloader']
handler.command = /^(p|play)$/i

handler.exp = 0

module.exports = handler