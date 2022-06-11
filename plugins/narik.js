let fs = require('fs')
const thumb = fs.readFileSync('./src/bank.jpg')
const xpperatm = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^narik|tarik/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].atm / xpperatm) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].atm >= xpperatm * count) {
    global.db.data.users[m.sender].atm -= xpperatm * count
    global.db.data.users[m.sender].money += count
    conn.sendButtonLoc(m.chat, thumb, `-Rp.${xpperatm * count} 💹\n+ ${count} 💳\n\nInteresting success!`, wm, 'MY', '#my', m)
  } else conn.reply(m.chat, `Your money is not enough to withdraw${count} !`, m)
}
handler.help = ['pull <amount>']
handler.tags = ['xp']
handler.command = /^pull ([0-9]+)|pull|tarik$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler