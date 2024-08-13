//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2348086541281";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09JS2owdElCVEVuc09LZlRIbDVkaGwrM1hSajU2UXlTMUpnSFVqWFQyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVRwT2ZpR091Zy96UUxHdVkycTlUSjFRTlIzSTQwMHNUaVprbUVkclJIaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTHFWQmdCa21rZlIvMklBQWMyRndyTUpPYXBwVE9rdUdYMFFMTDBrTlZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBWUtBYW92WHNNSGRUV0xLVjkxWVhCamxpNng3Y0R2U05xQ3VwTmhnbFhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdNTVlTQmJqR0d6UnR4cVNBR3dqWnlLem1qRXhjMEdnclNDbTlPR0JCRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlphRm0rV3IvTGdUSnV3NjVJWll0bVRLWVhOWnhFTFAyalZnNy92UDJTVWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUlOZ1RLcWlLQ0E4Mk0rSWJoTzNMSzRFVUdNLzFmbDZ0YTE4T1E1SmxWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieG8rWEJjRzNYeHE4ZDNXc2hsUXZoM3ZPYzFQQVl5aWMvcjdaU2p5VVZHTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVqc3ZYM2YvMnM4ak43VFRqQi9BdlJRY1NGUWp6SFFnVGtYaXNBLzRyWUFyNmtqZk1TN09BNGVyRCtXQjNjWEdLSVV2bXl3WUFaY05UYUpianpxSUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJ6UnBmeHphRzdweWlocXUwNVJsWGQwaEtmQUtISERmS2gzU08xa2gvWlBVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItQjdDb0dieVF4NjVrVFB5R1dubV9nIiwicGhvbmVJZCI6IjFkODk4ZDEyLTU3YjQtNGQ0YS1hMDM2LWE1ODA0NTFkOGM0NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxMVdiV1o3eG51NlZPZ2FKTmc5clVUL21teXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWpKQnE5cjF4OE5ZakF1dVpWenZzVzhBb0JFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhLOEtYSEdNIiwibWUiOnsiaWQiOiI1MDk0MDI0Njg4Mzo3M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgvJLwnZCJ8J2arvCdmq/wnZq04oCg8JajmOKAoPCdmqrwnZqv8J2ar/CdkIPgvJLwnZCD8J2QhPCdkJIg8J2QjvCdkIzwnZCB8J2QkfCdkIQg4oCg8J2eovCdnpPwnZmC8J2Zh/CdnqLwnZmOIPCdnpfwnZmBIPCdmL/wnZ6i8J2em/CdnpfwnZ6c4oCgIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPV2RtYWdFRU1TSHc3VUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhelp0dGZnRGZ5OUdqYkRJTUx6aExScWdMS0dhMXVOeXFOYmdLeVkwOUNzPSIsImFjY291bnRTaWduYXR1cmUiOiJCTDlQNHlvS2tpWlB1MFREbDdxYVBjS3dvWDlXb3dKRWJvY1dta1BmenFOclM4ai83dmkxWHZFcHRKendNZlNlc1BoaW55TktTUXI3SENSSndZZmxCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZXdFY0xwZ2JBbGVtd1VoZEdWM0RQU0JqRnhJeTFqTU5TY2tIWjd2ZjhqcTRjUkozMHhTWTV4MkpwaHUvSEdMUXc1dzAyZ21nbnY3SlRrSjJMSUc1Q2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0MDI0Njg4Mzo3M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXczJiYlg0QTM4dlJvMnd5REM4NFMwYW9DeWhtdGJqY3FqVzRDc21OUFFyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyODYwNDk3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJiTyJ9
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
