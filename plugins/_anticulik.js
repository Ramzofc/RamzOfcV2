let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* -
• *Telkomsel:* 6281355383396
• *Indosat:* -

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/caliph91_

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6282192767592', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler