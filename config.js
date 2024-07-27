//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "hisdema@gmail.com";
global.location = "Enugu, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.devs = "33757054414";
global.sudo = process.env.SUDO || "2349137634778";
global.owner = process.env.OWNER_NUMBER || "2349137634778";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID = eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU9HRmZKbWc4dVJ2dEcreTdncEd3NVRuYXZXQU1lYk9pdGJaaDJLbm8zYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianlEaG5OZkttY0VrVmp6bmp0ZGErMmNUMW83Y3FqQzRKS1NqdDlBYkhpUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtR3Erc21hNUQ1ZWJQZ2ZEWG5ESXRybit1U002QUluTDZZdGV1Wm9WQkZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0OEgzQ09lOEhNZGVuUnBvNG12WVVPNUw0RTlOcUl1ZElla2ZnOXZJdldzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDOFR1M0VTMUJ6bU84ZG9XQW9LRTAyVG02ZndacUlsQTdJOUlRL01FVlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRpQnE0WER2TWtnSFV0THU4MjB2QW14bnM1Q2pTcDdSald6b2ZHditDMHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VSbmpHRWkxK1dYdmkrWlN3bVhhc2pJYWtvVDQzd1l6eXBxc1psbUhVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjBFZ3gxSWE0ZFNxcXptaUtSQ2pldzllN1JUOG5YbUNLaExReVBlRS9oST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldHblcybzIvSWttdHZYWlQvWk9zRWNHMHlqUVRkS0loVkVod2lFUTdRZGxoeHI4WWw0YVByNDRBV0M5ZzN0Tkgxei9qZ3dlSHpqc1RjT2s4V0NpS0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiUlJQVXBqNC9IYTdYSlVjVmZocThYdFJOR2tONWI2aTBHc1NpemVsMkd2ST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZFMtOTdHal9Rd0tTakw5N0RCUGFRQSIsInBob25lSWQiOiJmZjUzMzZlNS0zMTllLTQ4MjAtYjhmZC1iMjQ3M2JmNDI5YjAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3drOUxDODRxOEVrMWFrNUQzSU9PTTRUdXpNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt5aTJrTHVHUjRYcGI3YUUvN3lRS2h5MTM0Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2UkU3N1RQOSIsIm1lIjp7ImlkIjoiMjM0OTEzNzYzNDc3ODo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJpZyBEYXZlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNalN4ZzBRcC9IaXRBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoTmdLbmNvSFlaT3Vta1creUI4UTExQTVZOG1NNXAwUk9mMldSUzdiSWxFPSIsImFjY291bnRTaWduYXR1cmUiOiJDMmRBeGlXa040K2ZtMndoWXFKdVczUUhadWwyMGJROSsxS2t3N292ODhVbnRaSXlWMFhOc2tIdjdxRmtub2NER3p1T1dFRWY5NnlZL09LSTVjTjVDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoic2swNDRjenBhMFF4UzAwNEdGMXJKUzAvS0g4YXhaSVFOYllxcmd3aUd1VEVBbGdOT2ZNZy91UHN5TFhRWEMrMEgrZUE2VzBlYkdoZWhseXdwd0x5REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTM3NjM0Nzc4OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVRZQ3AzS0IyR1RycHBGdnNnZkVOZFFPV1BKak9hZEVUbjlsa1V1MnlKUiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTI4NDc4OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEcEMifQ==
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
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
