import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────═[WA-MD-v1]═────⋆
│╭───────────────···
┴│☂︎    HEY ${conn.getName(m.mubashir)}
⬡│☂︎ 🤪I\'m alive now..🥰
┬╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│            *Crafty-Panda-MD-v1*
⬡│☂︎ *WHATSAPP BOT CODED BY👇🏽*
⬡│☂︎           *Mubashir*
⬡│☂︎           *OWNER:👇🏽*
⬡│☂︎         *wa.me/923051038557*
⬡│☂︎ *Don\'t call owner or you will be*
⬡│☂︎ *Ignored or blocked without*
⬡│☂︎           *warning 🥴😹*
┬│☂︎ *Hehehehe...🤪😸😸*
│╰────────────────···
┠─────═[ GUIDE ]═─────⋆
│╭────────────────···
┴│☂︎ _*👇🏽Litle Guide to use bot👇🏽*_
⬡│☂︎ .menu *All menu of bot*
⬡│☂︎ .sticker *Image to sticker*
⬡│☂︎ .play *Youtube video/audio*
┬│☂︎ .gimage *Google image downloader*
│╰────────────────···
╰──────────═┅═───────
*Thanks For Using crafty-panda-MD-v1 ✍🏽🌿🥰*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
