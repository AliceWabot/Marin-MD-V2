let handler = async (m, { conn, args, usedPrefix }) => {
    let type = (args[0] || '').toLowerCase()
    let phonix = global.db.data.users[m.sender].phonix
    let kuda = global.db.data.users[m.sender].kuda
    let naga = global.db.data.users[m.sender].naga
    let kucing = global.db.data.users[m.sender].kucing
    let rubah = global.db.data.users[m.sender].rubah
    switch (type) {
        case 'phonix':
            if (phonix == 0) return m.reply('*You don\'t have a Pet phonix yet*')
            if (phonix == 5) return m.reply('*Your pet is lvl max*')
            let __waktur = (new Date - global.db.data.users[m.sender].phonixlastclaim)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - global.db.data.users[m.sender].phonixlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakphonix += 20
                    global.db.data.users[m.sender].phonixlastclaim = new Date * 1
                    conn.reply(m.chat, `Successfully feed the pet ${type}`, m)
                    if (phonix > 0) {
                        let naiklvl = ((phonix * 100) - 1)
                        if (global.db.data.users[m.sender].anakphonix > naiklvl) {
                            global.db.data.users[m.sender].phonix += 1
                            global.db.data.users[m.sender].anakphonix -= (phonix * 100)
                            conn.reply(m.chat, `*Congratulations Pet phonix you leveled up*`, m)
                        }
                    }
                } else m.reply(`Your pet food is not enough`)
            } else m.reply(`Your pet is full, try feeding *${waktur}* again`)
            break
        case 'kuda':
            if (kuda == 0) return m.reply('*You don\'t have a Horse Pet yet*')
            if (kuda == 5) return m.reply('*Your pet is lvl max*')
            let __waktuk = (new Date - global.db.data.users[m.sender].kudalastclaim)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - global.db.data.users[m.sender].kudalastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakkuda += 20
                    global.db.data.users[m.sender].kudalastclaim = new Date * 1
                    conn.reply(m.chat, `Successfully feed the pet  ${type}`, m)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (global.db.data.users[m.sender].anakkuda > naiklvl) {
                            global.db.data.users[m.sender].kuda += 1
                            global.db.data.users[m.sender].anakkuda -= (kuda * 100)
                            conn.reply(m.chat, `*Congratulations Pet Horse you leveled up*`, m)
                        }
                    }
                } else m.reply(`Your pet food is not enough`)
            } else m.reply(`Your pet is full, try feeding *${time}* again`)
            break
        case 'naga':
            if (naga == 0) return m.reply('*You don\'t have a Dragon Pet yet*')
            if (naga == 5) return m.reply('*Your pet is lvl max*')
            let ___waktuuu = (new Date - global.db.data.users[m.sender].nagalastclaim)
            let ____waktuuu = (600000 - ___waktuuu)
            let waktuuu = clockString(____waktuuu)
            if (new Date - global.db.data.users[m.sender].nagalastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anaknaga += 20
                    global.db.data.users[m.sender].kudalastclaim = new Date * 1
                    conn.reply(m.chat, `Successfully feed the pet ${type}`, m)
                    if (naga > 0) {
                        let naiklvl = ((naga * 100) - 1)
                        if (global.db.data.users[m.sender].anaknaga > naiklvl) {
                            global.db.data.users[m.sender].naga += 1
                            global.db.data.users[m.sender].anaknaga -= (naga * 100)
                            conn.reply(m.chat, `*Congratulations your Dragon Pet leveled up*`, m)
                        }
                    }
                } else m.reply(`Your pet food is not enough`)
            } else m.reply(`Your pet is full, try feeding *${time}* again`)
            break
        case 'rubah':
            if (rubah == 0) return m.reply('*You don\'t have a pet fox yet*')
            if (rubah == 5) return m.reply('*Your pet is lvl max*')
            let __waktuu = (new Date - global.db.data.users[m.sender].rubahlastclaim)
            let _waktuu = (600000 - __waktuu)
            let waktuu = clockString(_waktuu)
            if (new Date - global.db.data.users[m.sender].rubahlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakrubah += 20
                    global.db.data.users[m.sender].rubahlastclaim = new Date * 1
                    conn.reply(m.chat, `Successfully feeding the pet ${type}`, m)
                    if (naga > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (global.db.data.users[m.sender].anakrubah > naiklvl) {
                            global.db.data.users[m.sender].rubah += 1
                            global.db.data.users[m.sender].anakrubah -= (rubah * 100)
                            conn.reply(m.chat, `*Congratulations Pet fox you leveled up*`, m)
                        }
                    }
                } else m.reply(`Your pet food is not enough`)
            } else m.reply(`Your pet is full, try feeding *${time}* again`)
            break
        case 'kucing':
            if (kucing == 0) return m.reply('*You don\'t have a Pet Cat yet*')
            if (kucing == 5) return m.reply('*Pet lvl is max*')
            let __waktu = (new Date - global.db.data.users[m.sender].kucinglastclaim)
            let _waktu = (600000 - __waktu)
            let waktu = clockString(_waktu)
            if (new Date - global.db.data.users[m.sender].kucinglastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakkucing += 20
                    global.db.data.users[m.sender].kucinglastclaim = new Date * 1
                    conn.reply(m.chat, `Successfully feed the pet ${type}`, m)
                    if (kucing > 0) {
                        let naiklvl = ((kucing * 100) - 1)
                        if (global.db.data.users[m.sender].anakkucing > naiklvl) {
                            global.db.data.users[m.sender].kucing += 1
                            global.db.data.users[m.sender].anakkucing -= (kucing * 100)
                            conn.reply(m.chat, `*Congratulations Pet Cat you leveled up*`, m)
                        }
                    }
                } else m.reply(`Your pet food is not enough`)
            } else m.reply(`Your pet is full, try feeding *${time}* again`)
            break
        default:
            return conn.reply(m.chat, `${usedPrefix}feed [kucing | phonix | kuda | dragon]\nUsage examples: *${usedPrefix}feed kucing*`, m)
    }
}
handler.help = ['feed [pet type]']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i

module.exports = handler

function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    console.log({ ms, h, m, s })
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}