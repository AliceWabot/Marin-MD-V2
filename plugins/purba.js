let handler = async (m, {text}) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    m.reply(teks.replace(/[aiueo]/gi, '$&ve'))
}
handler.help = ['purba <text>']
handler.tags = ['fun']
handler.command =  /^(purba)$/i


module.exports = handler