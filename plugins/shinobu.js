let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/shinobu', {}, 'apikey'), 'He he', wm, 'NEXT', '.shinobu', m)
}
handler.help = ['shinobu']
handler.tags = ['anime']
handler.command = /^(shinobu)$/i

module.exports = handler