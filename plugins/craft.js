/*
* THX TO
* Allah SWT
* Ortu
* RESTU
* RIZXYU
*/
let { MessageType } = require('@adiwajshing/baileys-md')

/*Count price*/
let sword = 9800
let pickaxe = 8927
let armor = 17290
let pancing = 9278
let Upickaxe = 30000

let Esword = 18290
let Epickaxe = 18230
let Earmor = 23847

let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].pancing = global.db.data.users[m.sender].pancing || 0
  let botol = global.botwm

  let caption = `*💠 Crafting :*
  how to craft: #craft pickaxe
  how to enchant: #epickaxe
⛏️ pickaxe
🗡️ Sword
🎣 fishingrod

*🔮 Enchant*

⛏️  *Pickaxe = ${Epickaxe}*
Resistance ++
Mine ++

*🗡️️Sword = ${Esword}*
Resistance +++
weakness -
Sharpness ++
Burning fire +

[❗] still Beta
`

  try {
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
      switch (type) {
        case 'pickaxe':
          if (user.kayu < 10 || user.iron < 5 || user.string < 20) return m.reply(`Not enough stuff!\nTo make pickaxes. you need : \n10 wood 🪵 \n5 iron ⛓\n20 String 🕸️`)
          global.db.data.users[m.sender].kayu -= 10
          global.db.data.users[m.sender].iron -= 5
          global.db.data.users[m.sender].string -= 20
          global.db.data.users[m.sender].pickaxe += 1
          m.reply("Success in making 1 pickaxe 🔨")
          break
        case 'sword':
          if (user.kayu < 10 || user.iron < 5 || user.string < 20) return m.reply(`Not enough stuff!\nTo make swords. You need : \n10 wood 🪵 \n5 iron ⛓\n20 String 🕸️`)
          global.db.data.users[m.sender].kayu -=
            global.db.data.users[m.sender].iron -= 10
          global.db.data.users[m.sender].string -= 20
          global.db.data.users[m.sender].sword += 1
          m.reply("Successfully made 1 sword 🗡️")
          break
        case 'pancing':
          if (user.kayu < 10 || user.iron < 5 || user.string < 20) return m.reply(`Not enough stuff!\nTo make a fishing rod. You will need :\n10 wood  \n5 iron⛓\n20 String🕸️`)
          global.db.data.users[m.sender].kayu -= 10
          global.db.data.users[m.sender].iron -= 2
          global.db.data.users[m.sender].string -= 20
          global.db.data.users[m.sender].pancing += 1
          global.db.data.users[m.sender].fishingroddurability += 999
          m.reply("Sukses membuat 1 Pancingan 🎣")
          break

        default:
          return conn.sendButton(m.chat, caption, wm, `⋮☰ BACK`, `.menu`, m)
      }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count)
      switch (_type) {
        case 'pickaxe':
          if (user.enchant < 1) return m.reply(`Not enough items!\nTo enchant a pickaxe.You need : 1 Enchant Book`)
          global.db.data.users[m.sender].enchant -= 1
          global.db.data.users[m.sender].pickaxedurability -= 999
          m.reply("Successful Chat Pickaxe 🔨")
        case '':
          break

        default:
          return conn.sendbutton(m.chat, caption, wm, `⋮☰ BACK`, `.menu`, m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['craft']
handler.tags = ['rpg']
handler.command = /^(craft|crafting|enchant)/i

module.exports = handler