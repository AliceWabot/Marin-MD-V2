let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    conn.sendBut(m.chat, `${global.db.data.users[who].limit} Remaining Limit ಥ_ಥ`, wm, 'Buy', '.buy', m)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler
