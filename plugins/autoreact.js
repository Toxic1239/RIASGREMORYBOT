//Remove (/*  */) to use this plugin
import fs from `fs`,
import adm from `./lib`,

let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k|owner)/i
handler.command = new RegExp

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }


m.react = async (text) => {
  // send a reaction to the message
  await conn.sendMessage(m.chat, {
    react: {
      text: text,
      key: m.key
    }
  })
}
import amd from './lib';

amd(
  {
    pattern: "hii", // The Command Name
    alias: "hello" // Command Secondary Trigger
    fromMe: true, // is the message from the owner
    desc: "Send Hi Message", // Command Description
    type: "Test", // Command Category
  },
  async (message) => {
    await message.send("Hello There");
  }
);
