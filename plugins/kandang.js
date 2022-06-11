let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => { 
  let banteng = global.db.data.users[m.sender].banteng
  let harimau = global.db.data.users[m.sender].harimau
 let gajah = global.db.data.users[m.sender].gajah
let kambing = global.db.data.users[m.sender].kambing
let panda = global.db.data.users[m.sender].panda
 let buaya = global.db.data.users[m.sender].buaya
 let kerbau = global.db.data.users[m.sender].kerbau
let sapi = global.db.data.users[m.sender].sapi
 let monyet = global.db.data.users[m.sender].monyet
 let babihutan = global.db.data.users[m.sender].babihutan
 let babi = global.db.data.users[m.sender].babi
 let ayam = global.db.data.users[m.sender].ayam

let zer = `
*—「 KANDANG 🐾 」—*
    
 *◩   ️ 🐂 = [ ${banteng} ] Bull Tail*
 *◩   ️ 🐅 = [ ${harimau} ] Tiger Tail*
 *◩   ️ 🐘 = [ ${gajah} ] Elephant Tail*
 *◩   ️ 🐐 = [ ${kambing} ] Goat Tail*
 *◩   ️ 🐼 = [ ${panda} ] Panda Tail*
 *◩   ️ 🐊 = [ ${buaya} ] Crocodile Tail*
 *◩   ️ 🐃 = [ ${kerbau} ] Buffalo Tail*
 *◩   ️ 🐮 = [ ${sapi} ] Cow Tail*
 *◩   ️ 🐒 = [ ${monyet} ] Monkey Tail*
 *◩   ️ 🐗 = [ ${babihutan} ] Boar Tail*
 *◩   ️ 🐖 = [ ${babi} ] Pig Tail*
 *◩   ️ 🐓 = [ ${ayam} ] Chicken Tail*
 `.trim()
 conn.sendBut(m.chat, zer,wm, 'Shop', '.pasar', m)
} 
handler.help = ['cage']
handler.tags = ['rpg']
handler.command= /^(cage)$/i
handler.register = true
let wm = global.wm

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)