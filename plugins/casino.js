let buatall = 1
let { MessageType } = require('@adiwajshing/baileys-md')
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    conn.casino = conn.casino ? conn.casino : {}
    if (m.chat in conn.casino) return m.reply('There is still someone doing casino here, wait until it\'s finished!!')
    else conn.casino[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'casino <total>\n ' + usedPrefix + 'casino 1000', m)
        if (global.db.data.users[m.sender].exp >= count * 1) {
            global.db.data.users[m.sender].exp -= count * 1
            //await m.reply('') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                conn.reply(m.chat, `💰 Casino 💰\n*▪️ You:* ${Kamu} Point\n*▫️ Computer:* ${Aku} Point\n\n*You LOSE*\nYou lose ${count} Money(xp)`.trim(), m)
            } else if (Aku < Kamu) {
                global.db.data.users[m.sender].exp += count * 2
                conn.reply(m.chat, `💰 Casino 💰\n*▪️ You:* ${Kamu} Point\n*▫️ Computer:* ${Aku} Point\n\n*You Win*\nYou get ${count * 2} Money(xp)`.trim(), m)
            } else {
                global.db.data.users[m.sender].exp += count * 1
                conn.reply(m.chat, `💰 Casino 💰\n*▪️ You:* ${Kamu} Point\n*▫️ Computer:* ${Aku} Point\n\n*SERIES*\nYou get ${count * 1} Money(xp)`.trim(), m)
            }
        } else conn.reply(m.chat, `Your money(xp) is not enough for the Casino, please *#work* first!`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'casino.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete conn.casino[m.chat]
    }
}

handler.help = ['casino <total>']
handler.tags = ['game']
handler.command = /^(casino)$/i

handler.fail = null

handler.limit = 1

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
