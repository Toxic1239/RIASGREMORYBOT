//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/EBUvKfB.jpeg";
global.devs = "33757054414";
global.sudo = process.env.SUDO || "33757054414";
global.owner = process.env.OWNER_NUMBER || "33757054414";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://toxic-session-id.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUxJM29qcmNMR3F5OU01amY1eUlqS09PdUk4VjlYOWZUYzc3UWljRWgxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmFmcmVpb3U0YnQrdVl0ZFQ5ZUZQV0IvRmNRZkNZc2lqSFE2aVVlUlVucz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQi8wSWRLZXJVanRZWC8wZWE5OUx4Sk8zcDBOR1RvbktCSzVvUjIyRlZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRDd3SUlWb3RQRWtoSXdHbkNSd1UzRkJjRTVES3VmMmhVT1BtdVFBWVh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLbVhLeFdKZWhDOVJlQlh2aUh1QzZTM1pjRDdXV0c1eE9ucFFNNEFtbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNEd0Z0dU90TWRUUHI1NzVkekVMRDE3TURIK3lIKzlHRFF4Z0preS9kbHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5qMEE1OC9uSHI3akNTeDQ4S3RPd1NweUdLOW5XSzJmYnRDd3dUd0Qycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzFOcThVUjY3SGNFNkJzR0FFQmxmcXNFQkxhaUV5bGlJcjFIejZoRzBFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtoVVJERFBaV1g0RlB5N3pzaDRkbEwyUzM1Wm1KWCtlTlZHZEdwNXNKb3kzRWRia0ZLZWpHTDZWenJrcXpBdTFRUTFNUS9PZTZsLzJyckxWSW14WUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiI3Wjl5dDlVbTQwMDJraGpQZHE1NlpGV3Q3bGpLRmp6aGdxOGovSENUaWNJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDd3pmV1oxVVNVZXNJZVEwcGFvWlh3IiwicGhvbmVJZCI6Ijk5ZGY3ODhhLWRhMmYtNDIyMC04NTViLWU5ZWJhOGRhNTYwMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJma3hZbllkeGJDZ0NNMWMzczdVQlg2S0FuNTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnlBVWZaV01jWXNjZnViMmRqb0tWNUpuWXpBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdXTldXV0NNIiwibWUiOnsiaWQiOiIzMzc1NzA1NDQxNDoyNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHpodk1BRUVKYit1N1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidEh3TzZuZVFoc1d3TEF4NDBmZHFCWFFXNkZYVlIwdDhXWjA0WG9lSXZqST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiemhlaEFBTXU4c0FMdW8wN3c2cW1ORWhkNGNSemkzVkM5RlY4ZDRZeVl1dHZNYVRSamVKaUFlbERvbVlEYzJRUkNDY0tHS25JazUzcURTaVBDY0hZQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IkExb3c2YUp3dWZPVHVBUlRVaGNwNVgzQ3lPbXVselRXSC9lL3Q0YmYzV2NGU1dWQmE1ZW5yK1VhK3NJZUliSDJHUzlkaThKWjJvWDl4dTJ5MDFTbUR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzM3NTcwNTQ0MTQ6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlI4RHVwM2tJYkZzQ3dNZU5IM2FnVjBGdWhWMVVkTGZGbWRPRjZIaUw0eSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDY0NzQ1OX0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴛᴏxxɪᴄ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ᴛᴏxxɪᴄ ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
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
