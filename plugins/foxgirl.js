let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/fox_girl', {}, 'apikey'), 'UwU', wm, 'NEXT', '.foxgirl', m)
}
handler.help = ['foxgirl']
handler.tags = ['anime']
handler.command = /^(foxgirl)$/i

module.exports = handler