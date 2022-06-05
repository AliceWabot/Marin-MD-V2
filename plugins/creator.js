const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
	let vcard = 'BEGIN:VCARD\nVERSION:3.0\nN::;Zero-XD;;;\nFN:Zero Two 🔮\nitem1.TEL;type=VOICE;waid=94711392491:+94 71 139 2491\nitem1.X-ABLabel:Even better\nitem2.EMAIL;type=INTERNET:arisuxdd@yahoo.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/shelby_cer\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Japan;;;;\nitem4.X-ABLabel:Region\nEND:VCARD'
	conn.sendMessage(m.chat, { contacts: { displayName: 'Zero Two 🔮', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler