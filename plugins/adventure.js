let { MessageType } = require('@adiwajshing/baileys-md')
let handler = async (m, { conn, usedPrefix, DevMode }) => {
    try {
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (300000 - __timers)
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].healt > 79) {
            if (new Date - global.db.data.users[m.sender].lastadventure > 300000) {
                let armor = global.db.data.users[m.sender].armor
                let rubah = global.db.data.users[m.sender].rubah
                let kuda = global.db.data.users[m.sender].kuda
                let kucing = global.db.data.users[m.sender].kucing
                let ____health = `${Math.floor(Math.random() * 101)}`.trim()
                let ___health = (____health * 1)
                let kucingnya = (kucing == 0 ? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : '' || kucing == 5 ? 30 : '')
                let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
                let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
                let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
                let exp = (Math.floor(Math.random() * 400) + (kuda * 70))
                let uang = `${Math.floor(Math.random() * 650)}`.trim()
                let _potion = `${Math.floor(Math.random() * 2)}`.trim()
                let string = `${Math.floor(Math.random() * 7)}`.trim()
                let kayu = `${Math.floor(Math.random() * 13)}`.trim()
                let arlok = `${Math.floor(Math.random() * 1)}`.trim()
                let potion = (_potion * 1)
                let _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '')
                let diamond = (_diamond * 1)
                let _common = `${Math.floor(Math.random() * 3)}`.trim()
                let common = (_common * 1)
                let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
                let uncommon = (_uncommon * 1)
                let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
                let mythic = (_mythic * 1)
                let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
                let sampah = `${Math.floor(Math.random() * 300)}`.trim()
                let legendary = (_legendary * 1)
                let str = `
♥️️ Your life is reduced -${healt * 1} because you have adventured to ${pickRandom(['🇯🇵Japan', '🇰🇷Korea', '🇮🇩Bali', '🇺🇲America', '🇮🇶Iraq', '🇦🇪Arab', '🇵🇰Pakistan', '🇩🇪German', '🇫🇮Finlandia', '💭 To the world of dreams', '🔚 End of the world', 'Mars', '🌑Bulan', 'Pluto', '☀️Matahari', '❣️ Her heart', '...'])} dan mendapatkan
*✨ exp:* ${exp} 
*💹 money:* ${uang}
*🪵 Wood:* ${kayu}
*🕸️ String:* ${string}
*🗑️ rubbish:* ${sampah}${diamond == 0 ? '' : '\n*🧭 watch:* ' + arlok + ''}${potion == 0 ? '' : '\n*🥤 Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n*💎 diamond:* ' + diamond + ''}${common == 0 ? '' : '\n*📦 common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n*🛍️ uncommon crate:* ' + uncommon + ''}
`.trim()
                conn.reply(m.chat, str, m)
                if (mythic > 0) {
                    global.db.data.users[m.sender].mythic += mythic * 1
                    conn.reply(m.chat, '*Congratulations, you got the rare item*\n' + mythic + ' Mythic Crate 🎁', m)
                }
                if (legendary > 0) {
                    global.db.data.users[m.sender].legendary += legendary * 1
                    conn.reply(m.chat, '*Congratulations you got the Epic item that is*\n' + legendary + ' Legendary Crate 🧰', m)
                }
                global.db.data.users[m.sender].healt -= healt * 1
                global.db.data.users[m.sender].exp += exp * 1
                global.db.data.users[m.sender].money += uang * 1
                global.db.data.users[m.sender].potion += potion * 1
                global.db.data.users[m.sender].diamond += diamond * 1
                global.db.data.users[m.sender].string += string * 1
                global.db.data.users[m.sender].kayu += kayu * 1
                global.db.data.users[m.sender].common += common * 1
                global.db.data.users[m.sender].uncommon += uncommon * 1
                global.db.data.users[m.sender].arlok += arlok * 1.
                global.db.data.users[m.sender].sampah += sampah * 1
                global.db.data.users[m.sender].lastadventure = new Date * 1
            } else conn.reply(m.chat, `You've been adventurous and tired, please rest around\n🕔 *${timers}*`, m)
        } else conn.send2But(m.chat, 'Minimum 80 health ♥️ to be able to adventure, buy lives first by typing' + usedPrefix + '*shop buy potion <total>*\nand type *' + usedPrefix + 'use potion <total>*\n\n_To get free money 💵 and potions 🥤 type_ *' + usedPrefix + 'claim*', wm, `Heal`, `.use potion all`, `Return`, `.menu`, m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.help = ['adventure', 'petualang', 'berpetualang', 'mulung', 'work']
handler.tags = ['rpg']
handler.command = /^(adventure|(ber)?petualang(ang)?|mulung|work)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    console.log({ ms, h, m, s })
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}