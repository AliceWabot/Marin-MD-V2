let handler = async (m, {text}) => {
  if (!text) throw `Enter name
  
 *example:*
 .mynameis marin`
 if (text.length > 50) throw 'Name Too Long!\nMAX 50 LETTERS! 🌚'
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[a-z]/gi, v => {
        return {
            'a': 'ka',
            'b': 'tu',
            'c': 'mi',
            'd': 'te',
            'e': 'ku',
            'f': 'lu',
            'g': 'ji',
            'h': 'ri',
            'i': 'ki',
            'j': 'zu',
            'k': 'me',
            'l': 'ta',
            'm': 'rin',
            'n': 'to',
            'o': 'mo',
            'p': 'no',
            'q': 'ke',
            'r': 'shi',
            's': 'ari',
            't': 'ci',
            'u': 'do',
            'v': 'ru',
            'w': 'mei',
            'x': 'na',
            'y': 'fu',
            'z': 'zi'
        }[v.toLowerCase()] || v
    }))
}
handler.help = ['mynameis <text>']
handler.tags = ['fun']
handler.command =  /^(mynameis|namae)$/i

module.exports = handler