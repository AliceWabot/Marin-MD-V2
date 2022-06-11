let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'no'
  if (isAdmin) throw 'Even though I\'m already an admin 🌦'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
