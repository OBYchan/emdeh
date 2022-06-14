let fs = require('fs')

let handler = async (m) => {

let hellosumei = fs.readFileSync('./mp3/PTT-20220613-WA0109-sumei.opus')

conn.sendFile(m.chat, hellosumei, '', '', m, true)

}

handler.customPrefix = /^(selamat pagi|pagi|pagiii|pagii|pagi semua|pagi yall)$/i

handler.command = new RegExp

handler.limit = true

handler.mods = false 

handler.premium = false

handler.group = false 

handler.private = false

module.exports = handler
