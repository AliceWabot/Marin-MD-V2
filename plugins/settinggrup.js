let { groupSettingUpdate } = require('@adiwajshing/baileys-md')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		'open': 'not_announcement',
		'buka': 'not_announcement',
		'on': 'not_announcement',
		'1': 'not_announcement',
		'close': 'announcement',
		'tutup': 'announcement',
		'off': 'announcement',
		'0': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.send2But(m.chat, `
usage example:
*${usedPrefix + command} closed*
*${usedPrefix + command} Open*
	`.trim(), 'Group Setting', 'Open', '.grup 1', 'Close', '.grup 0')
		throw false
	}
	await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['grup <open/close>']
handler.tags = ['group']
handler.command = /^(gro?up)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
