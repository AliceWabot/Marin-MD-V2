let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `${pickRandom(['Yep ', ' It seems so ', ' I think so ', ' I don\'t think so ', ' No ', 'It\'s impossible'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['guesswhether <text>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^guesswhether$/i
handler.owner = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
