let handler = async m => m.reply(`
╭─「 Donasi • Pulsa / Dana 」
│ •  [083806211924]
│
│ *MAKASIH YAA KACK UDH DONASI*
│ *SEMOGA AMALNYA DI TERIM*
│ *OLEH ALLAH SUBAHANAUWATAALA*
╰────────────────────────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
