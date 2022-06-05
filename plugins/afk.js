const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = +new Date
  user.afkReason = text
  let str = `
🔅 AFK Feature Activated Successfully! 🔅

» User Name : ${conn.getName(m.sender)}
» Reason : ${text ? '' + text : 'No Text'}
`.trim()
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    templateMessage: {
      hydratedTemplate: {
        hydratedContentText: str,
        locationMessage: {
          jpegThumbnail: fs.readFileSync('./media/afk.jpg')
        },
        hydratedFooterText: wm,
        hydratedButtons: [{
          urlButton: {
            displayText: 'Instagram 💤',
            url: instagram
          }

        },
        {
          urlButton: {
            displayText: 'Web 🔰',
            url: 'http://www.alicebot.tk'
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
handler.help = ['afk [Reason]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
