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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BBUmtFYlRPNDZJS1lMVGh5Q1ZRUGU0alhURS9iWkZMdnpRclRyWEMybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1d2YldZcHhibllwZHJSaHZudEZFQTFOZFdyL3VHOXJHQVl3NDVYOTdIbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTk9jWnl1UE56NmdYK2pLNjd3ZjVRUW5Ta2VKVzBhcTFudUsyamxVb0cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNd25QZjFSQVh1a0k1cksvN2FXZmt0WWJ5cXlCQ1llRGFlUldoYzlrUGg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVHb2VvZHN0MldrMGZMUFRoN3o0UEk1VG1hUUV0d1FXZVdhem92TTlhVjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVVTXQvNSt1SllneHlMRFVUM0NDT1RCajhWS05PaFNJR1VSNXBNSUE5enM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUlBYTFDdHI5SVNBaXZXcWpPV0s4QjhFVyt6SmdHRHZFQjVlYnJjN3pVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGJkZmRZTDVIQ1cxUjloclhIVW9uczY2ajduVzd5em9kRFU2TUM2bFZqbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlUOTFvTTd5dHR3c1RCcC8yWU5tV1lwblZ6RVd1R3VsSVlFemVmOGZsbS9RNVpNdk5wcHcvRWxQNHQ5d2R6ZFAxdkd0WjZxNmRYc0Ntc1AwMDFaSWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiJULzkyU2wxRGtLMnZhT0RFY2JZWWI4dHBPa0tNK3BXaDRGWllYUmJKQkZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXb2pieUVQblJudWVvTmwyMlhqQ2RRIiwicGhvbmVJZCI6IjBhM2Y5ZmY4LTgyZDItNDU3OC05ZDE5LTVkNDZmMDk4Yjc0NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGb0g4aU8zcHFjQnhWbktvc0F3dTcycmdOMkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUl0YW5jK0o0SVRqU1dZWWMzSUMyZTVWTmhjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBEREIzWVNaIiwibWUiOnsiaWQiOiIyMzQ5MTYxMzA3MTc2OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkN1am9oIEpvbHluZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS25DeXM0SkVJYWd3YlFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNU9tdFdWYXB3WW5ySWVZT0hneTlCZzRHWWV1dmxicFZtdTlyeUtjSVpTWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRE1JSURwUEVGNUxtR2k3YStPQXE4bkRkb1lNYjlGVmdMdFN2WnV6Qm5WeVMzMmxsS05DM1czUG9qVDJUNVZkUmgwRE8xUVBvekQrNSsxZmZHc2Z4Z0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkgvZ2VHQXRpLzNkVnducnUvblNNV242WGluSVpyRCtTdE1xbkRJZll6NEpPNTI4NGNkUERHaW1jQkNZQTFMbGl3MjdMZ2hpOExmeGFmWUw4UFBOdmhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE2MTMwNzE3NjoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlVHByVmxXcWNHSjZ5SG1EaDRNdlFZT0JtSHJyNVc2VlpydmE4aW5DR1VtIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNzMzNzE1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9MRCJ9"
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
