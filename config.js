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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2349061064511";
global.sudo = process.env.SUDO || "2349061064511";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FVYzB4Q1pNL3F4S3B2OEtBRklOU3YvQXRtMkY5SE5rTTNMSEJzaVVGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkNjeG0vNzBuMmRvbGxZVEZoMmIwR2ZBUkN6SEl5VlN6WS84Sy9ZZW9Xdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRXQzWGFKcjJpMEdYM2FkdTZxUUZGeWkvbU13clVFcWxMV2owTXBpVG5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtb3NBdmJvZzNDY0MwM1ovSExEUmQvYWxGNUFEdWljLzNpekpPVEFJekFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFGTVhqRUQ3TTlaeTNKZDczVkFwYjZ1VCtTMVRYQWJ3aGxWK2NMWWxRbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp6ekxobWh0K1lqNXFjcGlpUDFCTFpja1VoZlpKdU9vZjZYVXJvQzU3VTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEEyaHJmVEgxZGo1ZGJTcDR2Nm8wUjBZVWgrYVN6VXF3TVloTllZcUFuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1NRdGpBR0w1WEpyckd2SFZoMDBtUmF0RkFiazZBTmZobmVGc1YzS3NYcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1yMHczMGV6V3BVaHE0ZmpMeGRhSWRSWnRtQkY1OXVVSlFTTGJWY2o3TEp1T3pkS1JyYXNhemlkaHdoRjhSVElLQy9oTzJDcUxpVnNsR1QwbC95d2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IlZRM1p4YStHU2xtV1JrNml1d2RrbE53SHdQWEFtdWNSN3lyZWhlckk5WTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9CYlF0V25IVEpPUEM4VGtSYjZib2ciLCJwaG9uZUlkIjoiZDkzNDY1NTYtYTcyNi00MDZiLWJlM2YtNjEyNTVlZjBmYzE4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJYTzVSSXp2UWJDaEdXNWkyZnVvbFNMT3ZjMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnbDBZbXUybXpRckQwT1AvbmR4QUlUZ3Zac009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNUpYWFZKM1kiLCJtZSI6eyJpZCI6IjIzNDkxNjEwNjQ1MTE6MjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p6ZXQ2MEZFTUh4ekxzR0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVGdFF4WFUrd1hPTnpnL2Zrb1J0UWsxVENVSnd3V3R2a2kwcjNmK2ZSa0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpNM2d0WWU2ejJSazFLTWRSRWZzU00wMDF4Vk53VCtnRUdQQ3ZYZWxwdi9JS3JqUTVCYjJ1K2Q0MVpjZkNVOVdNWmFyeWV2YW42UWRMSm1iTzZRU0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIMnBZaTVhMlNzdzJJb1g3dThja3A1dG9xY29pektpWDI2T1VNQlQ2MElVQlpSVnIrWTUwUU10NW5sbmZnRlNDMkhnV0szTDREbFBwSlEzTkd4bHVoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjEwNjQ1MTE6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmhiVU1WMVBzRnpqYzRQMzVLRWJVSk5Vd2xDY01GcmI1SXRLOTMvbjBaQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTYwNDQzMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNZmoifQ=="
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
