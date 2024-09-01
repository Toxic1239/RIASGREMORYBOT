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
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "254724517789";
global.owner = process.env.OWNER_NUMBER || "254724517789";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/d93c7f4e71866ccbc1089.jpg";
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
  "{"noiseKey":{"private":{"type":"Buffer","data":"2JbBPtr40G0NDySUQ27K3RRPXkSMyobReuYB6Yh5QGU="},"public":{"type":"Buffer","data":"rfEPRk40Ny+xfA9s9AFt8VIUH3phDtPQgNhgf+UpcXA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"kB1zLMNJa73PB55m7FdsAWp07KTTvIg2YUlVmybTQnk="},"public":{"type":"Buffer","data":"f9Qh2gRTOo5sT2iaCnYFX42ZBQSNrfuuIpctX9qlLhk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"yB7+OrNWFdDdJ2CTS/u1WVLQqESJhIs6sdWMoLaNNnk="},"public":{"type":"Buffer","data":"+ZA44JJdAmTzN76kYewCiGTEfTKQCJJQNkM41cwrvFY="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"eMomMRusKSiByhDtRvWVEhoJw0SUvwLjNEobPs+Wxkc="},"public":{"type":"Buffer","data":"CBIRxhhvuyARmy63grPfww8CpbVos5pOEyouVMfjig0="}},"signature":{"type":"Buffer","data":"/Lx3VYM5MLWYLzxYonrP+ZgtyV2aBFpXt9KKiTVSvrg7/1iEwbJ5KMKb5rkxyT0QAvkHkMkXtgMeRObYP/syAw=="},"keyId":1},"registrationId":239,"advSecretKey":"mzAx8iJjkTRLdr3kK1u7F/3DMdu21OcOZqa3c421yZY=","processedHistoryMessages":[{"key":{"remoteJid":"254724517789@s.whatsapp.net","fromMe":true,"id":"6549103F57A6C9469A331E0786F2D68A"},"messageTimestamp":1725224631}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"VQs7hnppTyCCgpRc1RZiEw","phoneId":"91c2c7cd-540c-45bf-a637-2ad6940f2ce8","identityId":{"type":"Buffer","data":"tUvBBw0bUqC4e7hpZYHmAcFxYqk="},"registered":true,"backupToken":{"type":"Buffer","data":"rkK7vd9vmBbdvV6VhaVVWePhdb0="},"registration":{},"pairingCode":"GQT1JWJ2","me":{"id":"254724517789:95@s.whatsapp.net","lid":"148034738483215:95@lid","name":"Burnout"},"account":{"details":"CPbWofoFEKmt07YGGBsgACgA","accountSignatureKey":"RIrdtpsVyP5FIQ448Bc4sFlrdAF/62rJq/hwYW/CgWc=","accountSignature":"9jlwrmF+AjaU4oGetzPhvoH5ZBHM6UHQuojfOgnpW4BIeDbjcc8k9WqYGFbdBg915dQeA9jcttiJu6BK03DgDQ==","deviceSignature":"r0CgDLdSLsySz0nF5Ui1S66ubLIEkWVgUFe0qYrSYvRft7b31kjtr8nT6c336x7vjbXA9nWY8zhnbm7UYoo0Bw=="},"signalIdentities":[{"identifier":{"name":"254724517789:95@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUSK3babFcj+RSEOOPAXOLBZa3QBf+tqyav4cGFvwoFn"}}],"platform":"android","lastAccountSyncTimestamp":1725224621,"myAppStateKeyId":"AAAAABaW"}"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "BOOSTED BY WHITNEY ",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "BEN 𝗠𝗗",
  botname: process.env.BOT_NAME || "BENCOO😎L",
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
