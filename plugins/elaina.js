let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/elaina', {}, 'apikey'), 'he he', wm, 'NEXT', '.elaina', m)
}
handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i

module.exports = handler