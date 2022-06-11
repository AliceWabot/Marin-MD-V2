let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random2/cum_jpg', {}, 'apikey'), 'hmm', wm, 'NEXT', '.cum', m)
}
handler.help = ['cum']
handler.tags = ['nsfw']
handler.command = /^(cum)$/i

module.exports = handler