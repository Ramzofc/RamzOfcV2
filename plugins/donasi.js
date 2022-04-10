let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TELKOMSEL:* [6281355383396]
┣➥ *Dana:* [-]
┣➥ *Gopay:* [-]
┣➥ *Ovo:* [-]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6282192767592*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
