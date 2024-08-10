//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/267339af1c7e2eb8306e3.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "254769279076";
global.owner = process.env.OWNER_NUMBER || "254114127157";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/6b1a45ff8629b85059715.jpg";
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

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpUQWtYMjEzN3Y0QVJSSUY4WkRWUHBoV2hxV1dxNnlOeVdSTk1pTDBsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVF5RWJSZGtJWXVnY0lTTWlmeStCcFEwVnRkeHhvVVJMeXlRM2poK2lIaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTWFsWmZ6VjJKVWo5azd6ZXIxc1JiL2NnaDU3bDlVMGtRVzhVZnpNSTA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUSVNYSCtHanVaOWl1UE11MGluUjNrQlBGdXhKUTZxSC9DdlQwR05RMDNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQbmVNTCt1UEQvSHViV2ZPUEVvRkJSbUxNMzFLWHpNaFQ5dmQ2TWc5azg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY4blB5NE13Vnh6RVBYZEN3QjJqQUlXWjdzNkl4ckNwWm5RejZrM3BNV2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBQN0VBQ1owenIyY2hjN1FjSWVlYTdIdmdkR1F5R1JQYlVxdDR5Vk8zND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibk5vN0p3eXYrS3dXM3BsZG1UTjUxUzNiTm9oTUoxaXNZaWg1RDNUSk1TQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMvdlBNZ2k2RTdSdjh1dWU3c3hrYk8vcHdHM0NKWTZKbWt1UHBjbnQ5WXRjTnZ6TEZLUnhmL3ZkalVzWWZPTExZbE5VM1Z5LzlQS21TL0piWWNUNkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6IlBhdkNIRmZzSHFuVXI2WmFhVE1MU3dNT1lsYlNTT1hQV1NtQkpYaVd5NUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFoVkVZSnhTUUo2bmR0SEJ0TndvdmciLCJwaG9uZUlkIjoiMDhkMzZiMjctYTIxNS00NDJjLTg5NTItNjE4MGM1ZTE5NTgxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBSZEthT0hOK2hhbHZTSGhxUnNBaW9IUGNsWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhaE1WNlk1VTlJcExoVzBRVmYwbUs5V2pvMWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUU1MWDdGOEwiLCJtZSI6eyJpZCI6IjI1NDExNDEyNzE1Nzo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkTMtMyGzJPNgM2LzYvMgM2EzIbNnMymQcy0zZ3Mg82gzZ3MqcypzLxWzLbNi8yLzJ3MqEXMuMyMzYTMjsyDzIHMgMy+zIbMvc2MzY4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09EVTYyMFE1YkhjdFFZWUNTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZKbHlvUGNBeVpSV0NKRmFROG92TkN6TVJFL2NJSC82TzZ2MGFvaldnaUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imc5UWR0SDBqY2k2OXg0eVN5RUU3aTRRRnZLMzM5NGRoa0ZzMDdLN0hPL1JrODVGR2lkQklMVWt0UjJHb0kwbnRJVnZXbFp4bjBiYzdJOGhYUG9iVkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlRjJkcGVZbWxhdElXMVZJSjlwNjhEemNGUEkvTHY2QnhnTVJoZS9aZnJoY1k3U1hFYmxadndLTS9KRXc0WEIzNWJ5VVhKL0lsSVpHc2NaMjh4cStDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDExNDEyNzE1Nzo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJ5WmNxRDNBTW1VVmdpUldrUEtMelFzekVSUDNDQi8ranVyOUdxSTFvSWkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMyNzU1MDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUERvIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "DAVE MD",
  ownername: process.env.OWNER_NAME || "DAVE",
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
