const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `⚠️ You are already registered ⚠️\nWant to re-register? ${usedPrefix}unreg <SN|SERIAL NUMBER> 🍇`
  if (!Reg.test(text)) throw `Incorrect format\n*${usedPrefix}daftar name.age*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Name cannot be empty'
  if (!age) throw 'Age can\'t be empty'
  age = parseInt(age)
  if (age > 120) throw 'wtf you should be in heaven'
  if (age < 5) throw 'Babies not allowed to use whatsapp ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Daftar berhasil!

╭─「 Info 」
│ Name: ${name}
│ Age: ${age} Old
╰────
Serial Number: 
${sn}
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
