//KALAU MAU BCGC REPLY PESAN YANG MAU DI BC
//KALAU GAK PAKE REPLY MASIH ERROR
let handler = async (m, { conn, text, participants }) => {
    const { delay } = require("@adiwajshing/baileys-md")

    async function f() {
        let getGroups = await conn.groupFetchAllParticipating()

        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])

        let anu = groups.map(v => v.id)

        m.reply(`💮 Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} seconds 💮`)

        for (let i of anu) {

            await delay(100)

            conn.copyNForward(i, m.quoted.fakeObj, true)

        }

        m.reply(`Successfully Sending Broadcast To ${anu.length} Group Chat`)

    }

    return f()
}
handler.help = ['bcgc']
handler.tags = ['owner']
handler.command = /^(bcgc)$/i

handler.owner = true

module.exports = handler
