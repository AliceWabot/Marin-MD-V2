let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. where is the text?\n\nUsage:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} plugins/aliceweb.js`
    if (!m.quoted.text) throw `reply to the message!`
    let path = `${text}`
    await require('fs').writeFileSync(path, m.quoted.text)
    m.reply(`saved in ${path}`)
}
handler.help = ['sf'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^sf$/i

handler.rowner = true

module.exports = handler
