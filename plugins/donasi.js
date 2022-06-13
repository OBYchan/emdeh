let handler = async m => m.reply(`
╭─「 Donasi • gopay 」
│ •  [0896-1686-6270]
│ •  [0896-1686-6270]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
