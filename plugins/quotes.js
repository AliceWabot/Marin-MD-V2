const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu =`
─────〔 *Quotes* 〕─────

${pickRandom(global.quotes)}
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/quotes.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Website',
               url: instagram
             }

           },
               {
             quickReplyButton: {
               displayText: 'Quotes ',
               id: '.quotes',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['quotes','katabijak']
handler.tags = ['quotes']
handler.command = /^(quotes|katabijak)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.quotes = [
"Faith is a knowledge of the heart, far beyond the reach of evidence.",
"The feeling of happiness and unhappiness does not come from what you have, nor does it come from who you are, or what you do. Happiness and unhappiness come from your thoughts.",
"Pain in the struggle is only temporary. You can feel it in a minute, an hour, a day, or a year. But if you give up, the pain will last forever.",
"Only someone who is afraid can act bravely. Without that fear there is nothing that can be called brave.",
"Be yourself. Who else can do it better than yourself?",
"Your chances of success in every condition can always be measured by how much you believe in yourself.",
"Our greatest glory is not in never failing, but in getting back up every time we fall.",
"The most unfinished job is the one that never started.",
"Your mind is like a fire that needs to be lit, not a vessel waiting to be filled.",
"Honesty is the cornerstone of all success. Recognition is the strongest motivation. Even criticism can build confidence when inserted between compliments.",
"Everything has an end, what is over let it pass and rest assured everything will be fine.",
"Every second is precious because time knows many things, including the secrets of the heart.",
"If you can't find the book you're looking for on the shelf, write it yourself.",
"If your heart feels a lot of pain, then learn from that pain not to give pain to others.",
"Life is not always about boyfriends.",
"Home is not just a place, it is a feeling.",
"Which one do you prefer: The person who dreams of success or the person who makes it come true?",
"You may not be able to water a flower that has withered and hope it will bloom again, but you can plant a new flower with a better hope than before.",
"It is not happiness that makes us grateful, but it is with gratitude that will make our lives happy.",
"I am silent. But I am not blind.",
]