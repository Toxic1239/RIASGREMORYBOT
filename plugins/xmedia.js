const moment = require("moment-timezone");
const {
  fetchJson,
  smd,
  tlang,
  send,
  getBuffer,
  prefix,
  Config,
  sleep,
} = require("../lib");
const axios = require("axios");
const fetch = require("node-fetch");
const { shazam } = require("../lib");
let yts = require("secktor-pack");
const { MessageType, Mimetype } = require("@whiskeysockets/baileys");
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const { execFile } = require("child_process");
const exec = require("child_process").exec;
smd(
  {
    pattern: "x4mp4",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x4b18a7) => {
    try {
      if (!_0x4b18a7.reply_message.video) {
        return await _0x4b18a7.send("*Need Video!*");
      }
      let _0x4ef7a7 = "./temp/x4mp4.mp4";
      var _0x15f54e = await _0x4b18a7.bot.downloadAndSaveMediaMessage(
        _0x4b18a7.quoted.msg
      );
      ffmpeg(_0x15f54e)
        .withSize("25%")
        .format("mp4")
        .save(_0x4ef7a7)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x15f54e);
          } catch (_0x5d7674) {}
          await _0x4b18a7.bot.sendMessage(_0x4b18a7.jid, {
            video: fs.readFileSync(_0x4ef7a7),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync("./temp/output.mp4");
          } catch (_0x41f0af) {}
        });
    } catch (_0x24d276) {
      return await _0x4b18a7.error(
        _0x24d276 + "\n\n command: coffe",
        _0x24d276,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "x2mp4",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x366978) => {
    try {
      if (!_0x366978.reply_message.video) {
        return await _0x366978.send("*Need Video!*");
      }
      let _0xd7e5e = "./temp/x2mp4.mp4";
      var _0x250def = await _0x366978.bot.downloadAndSaveMediaMessage(
        _0x366978.quoted.msg
      );
      ffmpeg(_0x250def)
        .withSize("50%")
        .format("mp4")
        .save(_0xd7e5e)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x250def);
          } catch (_0x51a807) {}
          await _0x366978.bot.sendMessage(_0x366978.jid, {
            video: fs.readFileSync(_0xd7e5e),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0xd7e5e);
          } catch (_0x123c69) {}
        });
    } catch (_0x48689b) {
      return await _0x366978.error(
        _0x48689b + "\n\n command: x2mp4",
        _0x48689b,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4image",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x46cbb2) => {
    try {
      if (!_0x46cbb2.reply_message.image) {
        return await _0x46cbb2.send("*Need image!*");
      }
      let _0x4fe7c4 = "./temp/x2mp4.mp4";
      var _0x2190cb = await _0x46cbb2.bot.downloadAndSaveMediaMessage(
        _0x46cbb2.quoted.msg
      );
      console.log("checking location : ", _0x2190cb);
      ffmpeg(_0x2190cb)
        .loop(6)
        .fps(19)
        .videoBitrate(400)
        .size("640x480")
        .format("mp4")
        .save(_0x4fe7c4)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x2190cb);
          } catch (_0x29694a) {}
          await _0x46cbb2.sendMessage(_0x46cbb2.jid, {
            video: fs.readFileSync(_0x4fe7c4),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x4fe7c4);
          } catch (_0x56669d) {}
        });
    } catch (_0x289740) {
      return await _0x46cbb2.error(
        _0x289740 + "\n\n command: x2mp4",
        _0x289740,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4vintage",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x3ea4a9) => {
    try {
      if (!_0x3ea4a9.reply_message.video) {
        return await _0x3ea4a9.send("*Need Video!*");
      }
      let _0x3ad4d2 = "./temp/mp4vintage.mp4";
      var _0xf321 = await _0x3ea4a9.bot.downloadAndSaveMediaMessage(
        _0x3ea4a9.quoted.msg
      );
      ffmpeg(_0xf321)
        .outputOptions(["-y", "-vf", "curves=vintage,format=yuv420p"])
        .fps(22)
        .save(_0x3ad4d2)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0xf321);
          } catch (_0x174c55) {}
          await _0x3ea4a9.bot.sendMessage(_0x3ea4a9.jid, {
            video: fs.readFileSync(_0x3ad4d2),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x3ad4d2);
          } catch (_0x3e0650) {}
        });
    } catch (_0x321ae3) {
      return await _0x3ea4a9.error(
        _0x321ae3 + "\n\n command: mp4vintage",
        _0x321ae3,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4reverse",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x4f5b42) => {
    try {
      if (!_0x4f5b42.reply_message.video) {
        return await _0x4f5b42.send("*Need Video!*");
      }
      let _0x129d1f = "./temp/mp4reverse.mp4";
      var _0x2fe7fb = await _0x4f5b42.bot.downloadAndSaveMediaMessage(
        _0x4f5b42.quoted.msg
      );
      ffmpeg(_0x2fe7fb)
        .outputOptions(["-y", "-vf", "reverse", "-af", "areverse"])
        .format("mp4")
        .fps(22)
        .save(_0x129d1f)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x2fe7fb);
          } catch (_0x1bd563) {}
          await _0x4f5b42.bot.sendMessage(_0x4f5b42.jid, {
            video: fs.readFileSync(_0x129d1f),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x129d1f);
          } catch (_0x455893) {}
        });
    } catch (_0x42284c) {
      return await _0x4f5b42.error(
        _0x42284c + "\n\n command: mp4reverse",
        _0x42284c,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4bw",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x7aa23c) => {
    try {
      if (!_0x7aa23c.reply_message.video) {
        return await _0x7aa23c.send("*Need Video!*");
      }
      let _0x3cc99e = "./temp/mp4bw.mp4";
      var _0x41b53a = await _0x7aa23c.bot.downloadAndSaveMediaMessage(
        _0x7aa23c.quoted.msg
      );
      ffmpeg(_0x41b53a)
        .outputOptions(["-y", "-vf", "hue=s=0"])
        .format("mp4")
        .save(_0x3cc99e)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x41b53a);
          } catch (_0x1d4df6) {}
          await _0x7aa23c.bot.sendMessage(_0x7aa23c.jid, {
            video: fs.readFileSync(_0x3cc99e),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x3cc99e);
          } catch (_0x5f4e04) {}
        });
    } catch (_0x5c34d8) {
      return await _0x7aa23c.error(
        _0x5c34d8 + "\n\n command: mp4bw",
        _0x5c34d8,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4enhance",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x9057cf) => {
    try {
      if (!_0x9057cf.reply_message.video) {
        return await _0x9057cf.send("*Need Video!*");
      }
      let _0x240121 = "./temp/mp4enhance.mp4";
      var _0x229d8f = await _0x9057cf.bot.downloadAndSaveMediaMessage(
        _0x9057cf.quoted.msg
      );
      ffmpeg(_0x229d8f)
        .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
        .format("mp4")
        .save(_0x240121)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x229d8f);
          } catch (_0x1a85d6) {}
          await _0x9057cf.bot.sendMessage(_0x9057cf.jid, {
            video: fs.readFileSync(_0x240121),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x240121);
          } catch (_0x464135) {}
        });
    } catch (_0x384772) {
      return await _0x9057cf.error(
        _0x384772 + "\n\n command: mp4enhance",
        _0x384772,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4blur",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x1cd89e) => {
    try {
      if (!_0x1cd89e.reply_message.video) {
        return await _0x1cd89e.send("*Need Video!*");
      }
      let _0x266ccd = "./temp/mp4blur.mp4";
      var _0x3b01ff = await _0x1cd89e.bot.downloadAndSaveMediaMessage(
        _0x1cd89e.quoted.msg
      );
      ffmpeg(_0x3b01ff)
        .outputOptions([
          "-y",
          "-vf",
          "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2",
        ])
        .save(_0x266ccd)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x3b01ff);
          } catch (_0x860bdc) {}
          await _0x1cd89e.bot.sendMessage(_0x1cd89e.jid, {
            video: fs.readFileSync(_0x266ccd),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x266ccd);
          } catch (_0x3a1c61) {}
        });
    } catch (_0x3d1468) {
      return await _0x1cd89e.error(
        _0x3d1468 + "\n\n command: mp4blur",
        _0x3d1468,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4edge",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x268562) => {
    try {
      if (!_0x268562.reply_message.video) {
        return await _0x268562.send("*Need Video!*");
      }
      let _0x1880a8 = "./temp/mp4edge.mp4";
      var _0x239d82 = await _0x268562.bot.downloadAndSaveMediaMessage(
        _0x268562.quoted.msg
      );
      ffmpeg(_0x239d82)
        .outputOptions([
          "-y",
          "-codec:v",
          "mpeg4",
          "-filter:v",
          "edgedetect=low=0.9:high=0.3",
        ])
        .format("mp4")
        .save(_0x1880a8)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x239d82);
          } catch (_0x5234ee) {}
          await _0x268562.bot.sendMessage(_0x268562.jid, {
            video: fs.readFileSync(_0x1880a8),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x1880a8);
          } catch (_0x1ff4c1) {}
        });
    } catch (_0x43e29b) {
      return await _0x268562.error(
        _0x43e29b + "\n\n command: mp4edge",
        _0x43e29b,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "gif2",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x1b6921) => {
    try {
      if (!_0x1b6921.reply_message.video) {
        return await _0x1b6921.send("*Need Video!*");
      }
      let _0x6cbbe1 = "./temp/gif.mp4";
      var _0xdb859c = await _0x1b6921.bot.downloadAndSaveMediaMessage(
        _0x1b6921.quoted.msg
      );
      console.log("checking location : ", _0xdb859c);
      ffmpeg(_0xdb859c)
        .noAudio()
        .fps(13)
        .videoBitrate(500)
        .save(_0x6cbbe1)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0xdb859c);
          } catch (_0x5f55b3) {}
          await _0x1b6921.sendMessage(_0x1b6921.jid, {
            video: fs.readFileSync(_0x6cbbe1),
            caption: Config.caption,
            gifplayback: true,
          });
          try {
            fs.unlinkSync(_0x6cbbe1);
          } catch (_0x534c20) {}
        });
    } catch (_0x2a29f2) {
      return await _0x1b6921.error(
        _0x2a29f2 + "\n\n command: gif",
        _0x2a29f2,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "agif",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x502c2d) => {
    try {
      if (!_0x502c2d.reply_message.video) {
        return await _0x502c2d.send("*Need Video!*");
      }
      let _0x579ed0 = "./temp/agif.mp4";
      var _0x16f62a = await _0x502c2d.bot.downloadAndSaveMediaMessage(
        _0x502c2d.quoted.msg
      );
      console.log("checking location : ", _0x16f62a);
      ffmpeg(_0x16f62a)
        .fps(13)
        .videoBitrate(500)
        .save(_0x579ed0)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x16f62a);
          } catch (_0x21b110) {}
          await _0x502c2d.sendMessage(_0x502c2d.jid, {
            video: fs.readFileSync(_0x579ed0),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x579ed0);
          } catch (_0x3c5b81) {}
        });
    } catch (_0x280723) {
      return await _0x502c2d.error(
        _0x280723 + "\n\n command: agif",
        _0x280723,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4rainbow",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x362c61) => {
    try {
      if (!_0x362c61.reply_message.Video) {
        return await _0x362c61.send("*Need Video!*");
      }
      let _0x3415e4 = "./temp/mp4rainbow.mp4";
      var _0x4a260c = await _0x362c61.bot.downloadAndSaveMediaMessage(
        _0x362c61.quoted.msg
      );
      console.log("checking location : ", _0x4a260c);
      ffmpeg(_0x4a260c)
        .outputOptions([
          "-y",
          "-vf",
          "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)",
          "-pix_fmt yuv420p",
        ])
        .videoFilters("eq=brightness=0.5")
        .save(_0x3415e4)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x4a260c);
          } catch (_0x4e9e6c) {}
          await _0x362c61.sendMessage(_0x362c61.jid, {
            video: fs.readFileSync(_0x3415e4),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x3415e4);
          } catch (_0x42e1c4) {}
        });
    } catch (_0x27e686) {
      return await _0x362c61.error(
        _0x27e686 + "\n\n command: mp4rainbow",
        _0x27e686,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4negative",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x452d19) => {
    try {
      if (!_0x452d19.reply_message.Video) {
        return await _0x452d19.send("*Need Video!*");
      }
      let _0x10134d = "./temp/mp4negative.mp4";
      var _0x39b1c5 = await _0x452d19.bot.downloadAndSaveMediaMessage(
        _0x452d19.quoted.msg
      );
      console.log("checking location : ", _0x39b1c5);
      ffmpeg(_0x39b1c5)
        .outputOptions(["-y", "-vf", "curves=color_negative,format=yuv420p"])
        .format("mp4")
        .save(_0x10134d)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x39b1c5);
          } catch (_0x5e79cb) {}
          await _0x452d19.sendMessage(_0x452d19.jid, {
            video: fs.readFileSync(_0x10134d),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x10134d);
          } catch (_0x3be412) {}
        });
    } catch (_0x2271c4) {
      return await _0x452d19.error(
        _0x2271c4 + "\n\n command: mp4negative",
        _0x2271c4,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4art",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x4ffe99) => {
    try {
      if (!_0x4ffe99.reply_message.Video) {
        return await _0x4ffe99.send("*Need Video!*");
      }
      let _0x50a27e = "./temp/mp4art.mp4";
      var _0x3ce211 = await _0x4ffe99.bot.downloadAndSaveMediaMessage(
        _0x4ffe99.quoted.msg
      );
      console.log("checking location : ", _0x3ce211);
      ffmpeg(_0x3ce211)
        .outputOptions([
          "-y",
          "-vf",
          "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2,format=yuv420p",
        ])
        .format("mp4")
        .save(_0x50a27e)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x3ce211);
          } catch (_0x16f246) {}
          await _0x4ffe99.sendMessage(_0x4ffe99.jid, {
            video: fs.readFileSync(_0x50a27e),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x50a27e);
          } catch (_0x1e8124) {}
        });
    } catch (_0x51b6ab) {
      return await _0x4ffe99.error(
        _0x51b6ab + "\n\n command: mp4art",
        _0x51b6ab,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4stab",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x5ca0cf) => {
    try {
      if (!_0x5ca0cf.reply_message.Video) {
        return await _0x5ca0cf.send("*Need Video!*");
      }
      let _0x64e5ee = "./temp/mp4stab.mp4";
      var _0x553646 = await _0x5ca0cf.bot.downloadAndSaveMediaMessage(
        _0x5ca0cf.quoted.msg
      );
      console.log("checking location : ", _0x553646);
      ffmpeg(_0x553646)
        .outputOptions(["-y", "-vf", "deshake,format=yuv420p"])
        .format("mp4")
        .save(_0x64e5ee)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x553646);
          } catch (_0x2efd94) {}
          await _0x5ca0cf.sendMessage(_0x5ca0cf.jid, {
            video: fs.readFileSync(_0x64e5ee),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x64e5ee);
          } catch (_0x162614) {}
        });
    } catch (_0x435edb) {
      return await _0x5ca0cf.error(
        _0x435edb + "\n\n command: mp4stab",
        _0x435edb,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4color",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x4c9b1f) => {
    try {
      if (!_0x4c9b1f.reply_message.Video) {
        return await _0x4c9b1f.send("*Need Video!*");
      }
      let _0x377eec = "./temp/mp4color.mp4";
      var _0x3c26fa = await _0x4c9b1f.bot.downloadAndSaveMediaMessage(
        _0x4c9b1f.quoted.msg
      );
      console.log("checking location : ", _0x3c26fa);
      ffmpeg(_0x3c26fa)
        .outputOptions([
          "-y",
          "-vf",
          "eq=contrast=1.3:saturation=1.5:brightness=-0.1,format=yuv420p",
        ])
        .format("mp4")
        .save(_0x377eec)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x3c26fa);
          } catch (_0x4a1d42) {}
          await _0x4c9b1f.sendMessage(_0x4c9b1f.jid, {
            video: fs.readFileSync(_0x377eec),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x377eec);
          } catch (_0x4b56ec) {}
        });
    } catch (_0xb73bb6) {
      return await _0x4c9b1f.error(
        _0xb73bb6 + "\n\n command: mp4color",
        _0xb73bb6,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp4slowmo",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x3fdc39) => {
    try {
      if (!_0x3fdc39.reply_message.Video) {
        return await _0x3fdc39.send("*Need Video!*");
      }
      let _0xce72ec = "./temp/mp4slowmo.mp4";
      var _0x151370 = await _0x3fdc39.bot.downloadAndSaveMediaMessage(
        _0x3fdc39.quoted.msg
      );
      console.log("checking location : ", _0x151370);
      ffmpeg(_0x151370)
        .videoFilters("minterpolate=fps=120")
        .videoFilters("setpts=4*PTS")
        .format("mp4")
        .save(_0xce72ec)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x151370);
          } catch (_0x1f4732) {}
          await _0x3fdc39.sendMessage(_0x3fdc39.jid, {
            video: fs.readFileSync(_0xce72ec),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0xce72ec);
          } catch (_0x5f551f) {}
        });
    } catch (_0x25f85c) {
      return await _0x3fdc39.error(
        _0x25f85c + "\n\n command: mp4slowmo",
        _0x25f85c,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp3volume",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x1352a3) => {
    try {
      if (!_0x1352a3.reply_message.audio) {
        return await _0x1352a3.sendMessage("*Need Audio!*");
      }
      let _0x3475f1 = "./temp/mp3volume.mp3";
      var _0x439c89 = await _0x1352a3.bot.downloadAndSaveMediaMessage(
        _0x1352a3.quoted.msg
      );
      ffmpeg(_0x439c89)
        .outputOptions(["-y", "-filter:a", "volume=5.3"])
        .save(_0x3475f1)
        .on("end", async () => {
          await _0x1352a3.bot.sendMessage(_0x1352a3.jid, {
            audio: fs.readFileSync(_0x3475f1),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x439c89);
          } catch (_0x8efcb2) {}
          try {
            fs.unlinkSync(_0x3475f1);
          } catch (_0xdbff16) {}
        });
    } catch (_0x4a59c9) {
      return await _0x1352a3.error(
        _0x4a59c9 + "\n\n command: mp3volume",
        _0x4a59c9,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp3reverse",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x5c5bd9) => {
    try {
      if (!_0x5c5bd9.reply_message.audio) {
        return await _0x5c5bd9.sendMessage("*Need Audio!*");
      }
      let _0x52a54d = "./temp/mp3reverse.mp3";
      var _0x105b33 = await _0x5c5bd9.bot.downloadAndSaveMediaMessage(
        _0x5c5bd9.quoted.msg
      );
      ffmpeg(_0x105b33)
        .outputOptions(["-y", "-filter_complex", "areverse"])
        .save(_0x52a54d)
        .on("end", async () => {
          await _0x5c5bd9.bot.sendMessage(_0x5c5bd9.jid, {
            audio: fs.readFileSync(_0x52a54d),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x105b33);
          } catch (_0x54f82c) {}
          try {
            fs.unlinkSync(_0x52a54d);
          } catch (_0x7b8a3) {}
        });
    } catch (_0x27153f) {
      return await _0x5c5bd9.error(
        _0x27153f + "\n\n command: mp3reverse",
        _0x27153f,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "x2mp3",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x4778af) => {
    try {
      if (!_0x4778af.reply_message.audio) {
        return await _0x4778af.sendMessage("*Need Audio!*");
      }
      let _0x1699bd = "./temp/x2mp3.mp3";
      var _0x18cc38 = await _0x4778af.bot.downloadAndSaveMediaMessage(
        _0x4778af.quoted.msg
      );
      ffmpeg(_0x18cc38)
        .outputOptions(["-y", "-filter:a", "atempo=2.0", "-vn"])
        .save(_0x1699bd)
        .on("end", async () => {
          await _0x4778af.bot.sendMessage(_0x4778af.jid, {
            audio: fs.readFileSync(_0x1699bd),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x18cc38);
          } catch (_0x22ae61) {}
          try {
            fs.unlinkSync(_0x1699bd);
          } catch (_0x334ae2) {}
        });
    } catch (_0x43f378) {
      return await _0x4778af.error(
        _0x43f378 + "\n\n command: x2mp3",
        _0x43f378,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp3low",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x498785) => {
    try {
      if (!_0x498785.reply_message.audio) {
        return await _0x498785.sendMessage("*Need Audio!*");
      }
      let _0x595373 = "./temp/mp3low.mp3";
      var _0x4a3798 = await _0x498785.bot.downloadAndSaveMediaMessage(
        _0x498785.quoted.msg
      );
      ffmpeg(_0x4a3798)
        .outputOptions(["-y", "-af", "asetrate=44100*0.9"])
        .save(_0x595373)
        .on("end", async () => {
          await _0x498785.bot.sendMessage(_0x498785.jid, {
            audio: fs.readFileSync(_0x595373),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x4a3798);
          } catch (_0x8b5dca) {}
          try {
            fs.unlinkSync(_0x595373);
          } catch (_0x4fea54) {}
        });
    } catch (_0x178ce5) {
      return await _0x498785.error(
        _0x178ce5 + "\n\n command: mp3low",
        _0x178ce5,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp3pitch",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x4dbb0d) => {
    try {
      if (!_0x4dbb0d.reply_message.audio) {
        return await _0x4dbb0d.sendMessage("*Need Audio!*");
      }
      let _0x1cf01b = "./temp/mp3pitch.mp3";
      var _0x44b65c = await _0x4dbb0d.bot.downloadAndSaveMediaMessage(
        _0x4dbb0d.quoted.msg
      );
      ffmpeg(_0x44b65c)
        .outputOptions(["-y", "-af", "asetrate=44100*1.3"])
        .save(_0x1cf01b)
        .on("end", async () => {
          await _0x4dbb0d.bot.sendMessage(_0x4dbb0d.jid, {
            audio: fs.readFileSync(_0x1cf01b),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x44b65c);
          } catch (_0x1b3554) {}
          try {
            fs.unlinkSync(_0x1cf01b);
          } catch (_0x3b936f) {}
        });
    } catch (_0x373068) {
      return await _0x4dbb0d.error(
        _0x373068 + "\n\n command: mp3pitch",
        _0x373068,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp3crusher",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x324972) => {
    try {
      if (!_0x324972.reply_message.audio) {
        return await _0x324972.sendMessage("*Need Audio!*");
      }
      let _0x4afadd = "./temp/mp3crusher.mp3";
      var _0x546d4a = await _0x324972.bot.downloadAndSaveMediaMessage(
        _0x324972.quoted.msg
      );
      ffmpeg(_0x546d4a)
        .outputOptions([
          "-y",
          "-filter_complex",
          "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1",
        ])
        .save(_0x4afadd)
        .on("end", async () => {
          await _0x324972.bot.sendMessage(_0x324972.jid, {
            audio: fs.readFileSync(_0x4afadd),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x546d4a);
          } catch (_0x1fe1a8) {}
          try {
            fs.unlinkSync(_0x4afadd);
          } catch (_0x4f7742) {}
        });
    } catch (_0x4f3484) {
      return await _0x324972.error(
        _0x4f3484 + "\n\n command: mp3crusher",
        _0x4f3484,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp3eq",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x5c7aff) => {
    try {
      if (!_0x5c7aff.reply_message.audio) {
        return await _0x5c7aff.sendMessage("*Need Audio!*");
      }
      let _0x54dd35 = "./temp/mp3eq.mp3";
      var _0x4f0af5 = await _0x5c7aff.bot.downloadAndSaveMediaMessage(
        _0x5c7aff.quoted.msg
      );
      ffmpeg(_0x4f0af5)
        .outputOptions([
          "-y",
          "-af",
          "superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14",
          "-ar 48k",
        ])
        .save(_0x54dd35)
        .on("end", async () => {
          await _0x5c7aff.bot.sendMessage(_0x5c7aff.jid, {
            audio: fs.readFileSync(_0x54dd35),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x4f0af5);
          } catch (_0x225344) {}
          try {
            fs.unlinkSync(_0x54dd35);
          } catch (_0x497aed) {}
        });
    } catch (_0x102c4e) {
      return await _0x5c7aff.error(
        _0x102c4e + "\n\n command: mp3eq",
        _0x102c4e,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "mp3bass",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x50b4cd) => {
    try {
      if (!_0x50b4cd.reply_message.audio) {
        return await _0x50b4cd.sendMessage("*Need Audio!*");
      }
      let _0x152a93 = "./temp/mp3bass.mp3";
      var _0x1f0325 = await _0x50b4cd.bot.downloadAndSaveMediaMessage(
        _0x50b4cd.quoted.msg
      );
      ffmpeg(_0x1f0325)
        .outputOptions(["-y", "-filter:a", "bass=g=9:f=110:w=0.6"])
        .save(_0x152a93)
        .on("end", async () => {
          await _0x50b4cd.bot.sendMessage(_0x50b4cd.jid, {
            audio: fs.readFileSync(_0x152a93),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x1f0325);
          } catch (_0x16f61f) {}
          try {
            fs.unlinkSync(_0x152a93);
          } catch (_0x4d65e8) {}
        });
    } catch (_0x47308f) {
      return await _0x50b4cd.error(
        _0x47308f + "\n\n command: mp3bass",
        _0x47308f,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "waves",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x150e8b) => {
    try {
      if (!_0x150e8b.reply_message.audio) {
        return await _0x150e8b.sendMessage("*Need Audio!*");
      }
      let _0x4f37db = "./temp/waves.mp4";
      var _0x34ffd6 = await _0x150e8b.bot.downloadAndSaveMediaMessage(
        _0x150e8b.quoted.msg
      );
      ffmpeg(_0x34ffd6)
        .outputOptions([
          "-y",
          "-filter_complex",
          "[0:a]showwaves=s=720x1280:mode=cline:rate=25,format=yuv420p[v]",
          "-map",
          "[v]",
          "-map 0:a",
        ])
        .save(_0x4f37db)
        .on("end", async () => {
          await _0x150e8b.bot.sendMessage(_0x150e8b.jid, {
            video: fs.readFileSync(_0x4f37db),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x34ffd6);
          } catch (_0x1e0c58) {}
          try {
            fs.unlinkSync(_0x4f37db);
          } catch (_0xc844a3) {}
        });
    } catch (_0x2ad83f) {
      return await _0x150e8b.error(
        _0x2ad83f + "\n\n command: waves",
        _0x2ad83f,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "frequency",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x2b9cd0) => {
    try {
      if (!_0x2b9cd0.reply_message.audio) {
        return await _0x2b9cd0.sendMessage("*Need Audio!*");
      }
      let _0x460635 = "./temp/frequency.mp4";
      var _0x5ae218 = await _0x2b9cd0.bot.downloadAndSaveMediaMessage(
        _0x2b9cd0.quoted.msg
      );
      ffmpeg(_0x5ae218)
        .outputOptions([
          "-y",
          "-filter_complex",
          "[0:a]showfreqs=s=720x1280:mode=cline:fscale=log,format=yuv420p[v]",
          "-map",
          "[v]",
          "-map 0:a",
        ])
        .save(_0x460635)
        .on("end", async () => {
          await _0x2b9cd0.bot.sendMessage(_0x2b9cd0.jid, {
            video: fs.readFileSync(_0x460635),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x5ae218);
          } catch (_0x1c7e6e) {}
          try {
            fs.unlinkSync(_0x460635);
          } catch (_0x53a1fa) {}
        });
    } catch (_0x24ee7f) {
      return await _0x2b9cd0.error(
        _0x24ee7f + "\n\n command: frequency",
        _0x24ee7f,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "avec",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x3b2af0) => {
    try {
      if (!_0x3b2af0.reply_message.audio) {
        return await _0x3b2af0.sendMessage("*Need Audio!*");
      }
      let _0x41cf8c = "./temp/avec.mp4";
      var _0x58171a = await _0x3b2af0.bot.downloadAndSaveMediaMessage(
        _0x3b2af0.quoted.msg
      );
      ffmpeg(_0x58171a)
        .outputOptions([
          "-y",
          "-filter_complex",
          "[0:a]avectorscope=s=720x1280:rf=5:gf=25:bf=5:draw=line,format=yuv420p[v]",
          "-map",
          "[v]",
          "-map 0:a",
        ])
        .save(_0x41cf8c)
        .on("end", async () => {
          await _0x3b2af0.bot.sendMessage(_0x3b2af0.jid, {
            video: fs.readFileSync(_0x41cf8c),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x58171a);
          } catch (_0x1f4b33) {}
          try {
            fs.unlinkSync(_0x41cf8c);
          } catch (_0x40b560) {}
        });
    } catch (_0x19d97) {
      return await _0x3b2af0.error(
        _0x19d97 + "\n\n command: avec",
        _0x19d97,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "volumeaudio",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x44b63b) => {
    try {
      if (!_0x44b63b.reply_message.audio) {
        return await _0x44b63b.sendMessage("*Need Audio!*");
      }
      let _0x1856b0 = "./temp/volumeaudio.mp4";
      var _0x11bcd8 = await _0x44b63b.bot.downloadAndSaveMediaMessage(
        _0x44b63b.quoted.msg
      );
      ffmpeg(_0x11bcd8)
        .outputOptions([
          "-y",
          "-filter_complex",
          "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]",
          "-map",
          "[vid]",
          "-map 0:a",
        ])
        .save(_0x1856b0)
        .on("end", async () => {
          await _0x44b63b.bot.sendMessage(_0x44b63b.jid, {
            video: fs.readFileSync(_0x1856b0),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x11bcd8);
          } catch (_0x433ba0) {}
          try {
            fs.unlinkSync(_0x1856b0);
          } catch (_0x111488) {}
        });
    } catch (_0x21c8c7) {
      return await _0x44b63b.error(
        _0x21c8c7 + "\n\n command: volumeaudio",
        _0x21c8c7,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "cqtaudio",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x57c344) => {
    try {
      if (!_0x57c344.reply_message.audio) {
        return await _0x57c344.sendMessage("*Need Audio!*");
      }
      let _0x36b161 = "./temp/cqtaudio.mp4";
      var _0x3074da = await _0x57c344.bot.downloadAndSaveMediaMessage(
        _0x57c344.quoted.msg
      );
      ffmpeg(_0x3074da)
        .outputOptions([
          "-y",
          "-filter_complex",
          "[0:a]showcqt=s=1280x720,format=yuv420p[v]",
          "-map",
          "[v]",
          "-map 0:a",
        ])
        .save(_0x36b161)
        .on("end", async () => {
          await _0x57c344.bot.sendMessage(_0x57c344.jid, {
            video: fs.readFileSync(_0x36b161),
            caption: Config.caption,
            ptt: false,
          });
          try {
            fs.unlinkSync(_0x3074da);
          } catch (_0x1642ec) {}
          try {
            fs.unlinkSync(_0x36b161);
          } catch (_0x1f072f) {}
        });
    } catch (_0x478698) {
      return await _0x57c344.error(
        _0x478698 + "\n\n command: cqtaudio",
        _0x478698,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "bwimage",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x128d19) => {
    try {
      if (!_0x128d19.reply_message.video) {
        return await _0x128d19.send("*Need Video!*");
      }
      let _0x2e00d2 = "./temp/bwimage.png";
      var _0x6f6f29 = await _0x128d19.bot.downloadAndSaveMediaMessage(
        _0x128d19.quoted.msg
      );
      ffmpeg(_0x6f6f29)
        .outputOptions(["-y", "-vf", "hue=s=0"])
        .save(_0x2e00d2)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x6f6f29);
          } catch (_0x32f5de) {}
          await _0x128d19.bot.sendMessage(_0x128d19.jid, {
            image: fs.readFileSync(_0x2e00d2),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x2e00d2);
          } catch (_0x5d6d7f) {}
        });
    } catch (_0x4198f1) {
      return await _0x128d19.error(
        _0x4198f1 + "\n\n command: bwimage",
        _0x4198f1,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "vintageimage",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x3cd6fa) => {
    try {
      if (!_0x3cd6fa.reply_message.video) {
        return await _0x3cd6fa.send("*Need Video!*");
      }
      let _0x209128 = "./temp/vintageimage.png";
      var _0x58ea92 = await _0x3cd6fa.bot.downloadAndSaveMediaMessage(
        _0x3cd6fa.quoted.msg
      );
      ffmpeg(_0x58ea92)
        .outputOptions(["-y", "-vf", "curves=vintage"])
        .save(_0x209128)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x58ea92);
          } catch (_0x2dfca7) {}
          await _0x3cd6fa.bot.sendMessage(_0x3cd6fa.jid, {
            image: fs.readFileSync(_0x209128),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x209128);
          } catch (_0x181170) {}
        });
    } catch (_0x47c67d) {
      return await _0x3cd6fa.error(
        _0x47c67d + "\n\n command: vintageimage",
        _0x47c67d,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "blurimage",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x567d21) => {
    try {
      if (!_0x567d21.reply_message.video) {
        return await _0x567d21.send("*Need Video!*");
      }
      let _0x1838cc = "./temp/blurimage.png";
      var _0x440048 = await _0x567d21.bot.downloadAndSaveMediaMessage(
        _0x567d21.quoted.msg
      );
      ffmpeg(_0x440048)
        .outputOptions([
          "-y",
          "-vf",
          "split[original][copy];[copy]scale=ih*16/9:-1,crop=h=iw*9/16,gblur=sigma=20[blurred];[blurred][original]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2",
        ])
        .save(_0x1838cc)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x440048);
          } catch (_0x50d28c) {}
          await _0x567d21.bot.sendMessage(_0x567d21.jid, {
            image: fs.readFileSync(_0x1838cc),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x1838cc);
          } catch (_0x511f75) {}
        });
    } catch (_0x30b72e) {
      return await _0x567d21.error(
        _0x30b72e + "\n\n command: blurimage",
        _0x30b72e,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "edgeimage",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x5ba46c) => {
    try {
      if (!_0x5ba46c.reply_message.video) {
        return await _0x5ba46c.send("*Need Video!*");
      }
      let _0x5dc1f3 = "./temp/edgeimage.png";
      var _0x54c789 = await _0x5ba46c.bot.downloadAndSaveMediaMessage(
        _0x5ba46c.quoted.msg
      );
      ffmpeg(_0x54c789)
        .outputOptions(["-y", "-filter:v", "edgedetect=low=0.9:high=0.2"])
        .save(_0x5dc1f3)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x54c789);
          } catch (_0x521c7f) {}
          await _0x5ba46c.bot.sendMessage(_0x5ba46c.jid, {
            image: fs.readFileSync(_0x5dc1f3),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x5dc1f3);
          } catch (_0x2b8185) {}
        });
    } catch (_0x259684) {
      return await _0x5ba46c.error(
        _0x259684 + "\n\n command: edgeimage",
        _0x259684,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "enhanceimage",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x406ae2) => {
    try {
      if (!_0x406ae2.reply_message.video) {
        return await _0x406ae2.send("*Need Video!*");
      }
      let _0x1611a8 = "./temp/enhanceimage.png";
      var _0x27cc90 = await _0x406ae2.bot.downloadAndSaveMediaMessage(
        _0x406ae2.quoted.msg
      );
      ffmpeg(_0x27cc90)
        .outputOptions(["-y", "-vf", "unsharp=3:3:1.5"])
        .save(_0x1611a8)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x27cc90);
          } catch (_0x1ca4a2) {}
          await _0x406ae2.bot.sendMessage(_0x406ae2.jid, {
            image: fs.readFileSync(_0x1611a8),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x1611a8);
          } catch (_0x1d9ca3) {}
        });
    } catch (_0x573f91) {
      return await _0x406ae2.error(
        _0x573f91 + "\n\n command: enhanceimage",
        _0x573f91,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "grenimage",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x53b27b) => {
    try {
      if (!_0x53b27b.reply_message.video) {
        return await _0x53b27b.send("*Need Video!*");
      }
      let _0x5f5571 = "./temp/grenimage.png";
      var _0x3006b5 = await _0x53b27b.bot.downloadAndSaveMediaMessage(
        _0x53b27b.quoted.msg
      );
      ffmpeg(_0x3006b5)
        .videoFilters("noise=alls=100:allf=t+u")
        .save(_0x5f5571)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x3006b5);
          } catch (_0x4b5d77) {}
          await _0x53b27b.bot.sendMessage(_0x53b27b.jid, {
            image: fs.readFileSync(_0x5f5571),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x5f5571);
          } catch (_0x357b40) {}
        });
    } catch (_0x29589a) {
      return await _0x53b27b.error(
        _0x29589a + "\n\n command: grenimage",
        _0x29589a,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "rainbowimage",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x467e72) => {
    try {
      if (!_0x467e72.reply_message.video) {
        return await _0x467e72.send("*Need Video!*");
      }
      let _0x2aca4d = "./temp/rainbowimage.png";
      var _0x141bb6 = await _0x467e72.bot.downloadAndSaveMediaMessage(
        _0x467e72.quoted.msg
      );
      ffmpeg(_0x141bb6)
        .outputOptions([
          "-y",
          "-vf",
          "geq=r='X/W*r(X,Y)':g='(1-X/W)*g(X,Y)':b='(H-Y)/H*b(X,Y)",
        ])
        .videoFilters("eq=brightness=0.6")
        .save(_0x2aca4d)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x141bb6);
          } catch (_0x3cae0b) {}
          await _0x467e72.bot.sendMessage(_0x467e72.jid, {
            image: fs.readFileSync(_0x2aca4d),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x2aca4d);
          } catch (_0x478b42) {}
        });
    } catch (_0x1463ee) {
      return await _0x467e72.error(
        _0x1463ee + "\n\n command: rainbowimage",
        _0x1463ee,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "negativeimage",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x534333) => {
    try {
      if (!_0x534333.reply_message.image) {
        return await _0x534333.send("*Need imagge!*");
      }
      let _0xbde1c6 = "./temp/negativeimage.png";
      var _0x412db7 = await _0x534333.bot.downloadAndSaveMediaMessage(
        _0x534333.quoted.msg
      );
      ffmpeg(_0x412db7)
        .outputOptions(["-y", "-vf", "curves=color_negative"])
        .save(_0xbde1c6)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x412db7);
          } catch (_0x163989) {}
          await _0x534333.bot.sendMessage(_0x534333.jid, {
            image: fs.readFileSync(_0xbde1c6),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0xbde1c6);
          } catch (_0x44e02f) {}
        });
    } catch (_0x322ecc) {
      return await _0x534333.error(
        _0x322ecc + "\n\n command: negativeimage",
        _0x322ecc,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "artimage",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x2888d7) => {
    try {
      if (!_0x2888d7.reply_message.image) {
        return await _0x2888d7.send("*Need imagge!*");
      }
      let _0x5abf4e = "./temp/artimage.png";
      var _0x310141 = await _0x2888d7.bot.downloadAndSaveMediaMessage(
        _0x2888d7.quoted.msg
      );
      ffmpeg(_0x310141)
        .outputOptions([
          "-y",
          "-vf",
          "convolution=-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2:-2 -1 0 -1 1 1 0 1 2",
        ])
        .save(_0x5abf4e)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x310141);
          } catch (_0x35cd12) {}
          await _0x2888d7.bot.sendMessage(_0x2888d7.jid, {
            image: fs.readFileSync(_0x5abf4e),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x5abf4e);
          } catch (_0x422f29) {}
        });
    } catch (_0x29dcaa) {
      return await _0x2888d7.error(
        _0x29dcaa + "\n\n command: artimage",
        _0x29dcaa,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "colorimage",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x547dc8) => {
    try {
      if (!_0x547dc8.reply_message.image) {
        return await _0x547dc8.send("*Need imagge!*");
      }
      let _0x3f5452 = "./temp/colorimage.png";
      var _0x2e1ad6 = await _0x547dc8.bot.downloadAndSaveMediaMessage(
        _0x547dc8.quoted.msg
      );
      ffmpeg(_0x2e1ad6)
        .outputOptions([
          "-y",
          "-vf",
          "eq=contrast=1.3:saturation=1.5:brightness=-0.1",
        ])
        .save(_0x3f5452)
        .on("end", async () => {
          try {
            fs.unlinkSync(_0x2e1ad6);
          } catch (_0x5c60eb) {}
          await _0x547dc8.bot.sendMessage(_0x547dc8.jid, {
            image: fs.readFileSync(_0x3f5452),
            caption: Config.caption,
          });
          try {
            fs.unlinkSync(_0x3f5452);
          } catch (_0xb969d3) {}
        });
    } catch (_0x85d054) {
      return await _0x547dc8.error(
        _0x85d054 + "\n\n command: colorimage",
        _0x85d054,
        "*_Didn't get any results, Sorry!_*"
      );
    }
  }
);
smd(
  {
    pattern: "imterp",
    alias: ["tea", "kofi"],
    category: "media",
    desc: "Finds info about song",
    filename: __filename,
  },
  async (_0x1928a2, _0xd4c6d1) => {
    _0xd4c6d1 = _0xd4c6d1.split(" ");
    _0xd4c6d1[1] = _0xd4c6d1[0];
    if (!_0x1928a2.reply_message && _0xd4c6d1[1] === "") {
      return await _0x1928a2.send(
        "*Need Video and FPS Value!*\nEx: ```.interp 100```"
      );
    }
    if (_0xd4c6d1[1] <= 10) {
      return await _0x1928a2.send("*Low FPS Value ⚠️*\n*Please, type over 10*");
    }
    if (_0xd4c6d1[1] >= 500) {
      return await _0x1928a2.send(
        "*High FPS Value ⚠️*\n*Please, type under 500*"
      );
    }
    await _0x1928a2.send("```Interpolating..```");
    var _0x7a872 = await _0x1928a2.bot.downloadAndSaveMediaMessage(
      _0x1928a2.quoted.msg
    );
    exec(
      "ffprobe -hide_banner -loglevel fatal -show_error -show_format -show_streams -show_programs -show_chapters -show_private_data -print_format json " +
        _0x7a872,
      async (_0x2025ec, _0x10845e, _0x20e511) => {
        var _0x9813a3 = JSON.parse(_0x10845e);
        var _0x123e18 = {
          value: 100,
        };
        var _0x1fc606 = {
          time: 1,
        };
        if (
          _0x9813a3.format.size / 1000000 > 0 &&
          _0x9813a3.format.size / 1000000 < 6
        ) {
          _0x123e18.value = _0x123e18.value - 2;
          _0x1fc606.time = _0x1fc606.time + 1;
        }
        if (
          _0x9813a3.format.size / 1000000 > 5 &&
          _0x9813a3.format.size / 1000000 < 11
        ) {
          _0x123e18.value = _0x123e18.value - 5;
          _0x1fc606.time = _0x1fc606.time + 1.4;
        }
        if (
          _0x9813a3.format.size / 1000000 > 10 &&
          _0x9813a3.format.size / 1000000 < 21
        ) {
          _0x123e18.value = _0x123e18.value - 9;
          _0x1fc606.time = _0x1fc606.time + 2;
        }
        if (
          _0x9813a3.format.size / 1000000 > 20 &&
          _0x9813a3.format.size / 1000000 < 31
        ) {
          _0x123e18.value = _0x123e18.value - 25;
          _0x1fc606.time = _0x1fc606.time + 2.3;
        }
        if (_0x9813a3.format.size / 1000000 > 30) {
          _0x123e18.value = _0x123e18.value - 39;
          _0x1fc606.time = _0x1fc606.time + 9;
        }
        if (
          _0x9813a3.streams[0].duration > 0 &&
          _0x9813a3.streams[0].duration < 21
        ) {
          _0x123e18.value = _0x123e18.value - 4;
          _0x1fc606.time = _0x1fc606.time + 1;
        }
        if (
          _0x9813a3.streams[0].duration > 20 &&
          _0x9813a3.streams[0].duration < 41
        ) {
          _0x123e18.value = _0x123e18.value - 9;
          _0x1fc606.time = _0x1fc606.time + 1.4;
        }
        if (
          _0x9813a3.streams[0].duration > 40 &&
          _0x9813a3.streams[0].duration < 61
        ) {
          _0x123e18.value = _0x123e18.value - 11;
          _0x1fc606.time = _0x1fc606.time + 2;
        }
        if (
          _0x9813a3.streams[0].duration > 60 &&
          _0x9813a3.streams[0].duration < 81
        ) {
          _0x123e18.value = _0x123e18.value - 15;
          _0x1fc606.time = _0x1fc606.time + 2.7;
        }
        if (
          _0x9813a3.streams[0].duration > 80 &&
          _0x9813a3.streams[0].duration < 101
        ) {
          _0x123e18.value = _0x123e18.value - 21;
          _0x1fc606.time = _0x1fc606.time + 3.4;
        }
        if (
          _0x9813a3.streams[0].duration > 100 &&
          _0x9813a3.streams[0].duration < 121
        ) {
          _0x123e18.value = _0x123e18.value - 27;
          _0x1fc606.time = _0x1fc606.time + 4;
        }
        if (_0x9813a3.streams[0].duration > 120) {
          _0x123e18.value = _0x123e18.value - 39;
          _0x1fc606.time = _0x1fc606.time + 9;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 0 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 11
        ) {
          _0x123e18.value = _0x123e18.value + 1;
          _0x1fc606.time = _0x1fc606.time - 0.6;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 10 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 21
        ) {
          _0x123e18.value = _0x123e18.value - 3;
          _0x1fc606.time = _0x1fc606.time + 1;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 20 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 31
        ) {
          _0x123e18.value = _0x123e18.value - 19;
          _0x1fc606.time = _0x1fc606.time + 2.3;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 30 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 41
        ) {
          _0x123e18.value = _0x123e18.value - 31;
          _0x1fc606.time = _0x1fc606.time + 4.3;
        }
        if (_0x9813a3.streams[0].r_frame_rate.split("/")[0] > 40) {
          _0x123e18.value = _0x123e18.value - 40;
          _0x1fc606.time = _0x1fc606.time + 9;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 9 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 31 &&
          _0xd4c6d1[1] > 39
        ) {
          _0x1fc606.time = _0x1fc606.time + 3.3;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 30 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 41 &&
          _0xd4c6d1[1] > 39
        ) {
          _0x1fc606.time = _0x1fc606.time + 5;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 30 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 41 &&
          _0xd4c6d1[1] > 49
        ) {
          _0x1fc606.time = _0x1fc606.time + 5.4;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 30 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 41 &&
          _0xd4c6d1[1] > 59
        ) {
          _0x1fc606.time = _0x1fc606.time + 6;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 30 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 41 &&
          _0xd4c6d1[1] > 69
        ) {
          _0x1fc606.time = _0x1fc606.time + 7.5;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 40 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 61 &&
          _0xd4c6d1[1] > 59
        ) {
          _0x1fc606.time = _0x1fc606.time + 9;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 40 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 61 &&
          _0xd4c6d1[1] > 64
        ) {
          _0x1fc606.time = _0x1fc606.time + 9.2;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 40 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 61 &&
          _0xd4c6d1[1] > 69
        ) {
          _0x1fc606.time = _0x1fc606.time + 9.5;
        }
        if (
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] > 40 &&
          _0x9813a3.streams[0].r_frame_rate.split("/")[0] < 61 &&
          _0xd4c6d1[1] > 75
        ) {
          _0x1fc606.time = _0x1fc606.time + 10;
        }
        let _0x801241 =
          "_This process may take a while._\n_Envisaged Time:_ *" +
          _0x1fc606.time +
          " Minute*\n_Success Rate:_ *" +
          _0x123e18.value +
          "%*";
        await _0x1928a2.send(_0x801241);
        var _0x268b51 = 10;
        ffmpeg(_0x7a872)
          .videoFilters(
            "minterpolate=fps=" + _0xd4c6d1[1] + ":mi_mode=mci:me_mode=bidir"
          )
          .format("mp4")
          .save("output.mp4")
          .on("progress", async (_0x211e93) => {
            var _0x27ebf4 = _0x211e93.percent;
            while (_0x27ebf4 > 10 && _0x268b51 == 10) {
              _0x268b51 = 1;
              let _0x2e9cd2 = "*Completed %10!*";
              await _0x1928a2.send(_0x2e9cd2);
            }
            while (_0x27ebf4 > 30 && _0x268b51 == 1) {
              _0x268b51 = 2;
              let _0x414f71 = "*Completed %30!*";
              await _0x1928a2.send(_0x414f71);
            }
            while (_0x27ebf4 > 50 && _0x268b51 == 2) {
              _0x268b51 = 3;
              let _0x1c0fd9 = "*Completed %50!*";
              await _0x1928a2.send(_0x1c0fd9);
            }
            while (_0x27ebf4 > 70 && _0x268b51 == 3) {
              _0x268b51 = 4;
              let _0x2564b4 = "*Completed %70!*";
              await _0x1928a2.send(_0x2564b4);
            }
            while (_0x27ebf4 > 90 && _0x268b51 == 4) {
              _0x268b51 = 5;
              let _0x1ffbc7 = "*Preparing Video..*";
              await _0x1928a2.send(_0x1ffbc7);
            }
          })
          .on("end", async () => {
            await _0x1928a2.send(
              fs.readFileSync("output.mp4"),
              {
                caption:
                  "Made by Suhail\n_Interpolated to " + _0xd4c6d1[1] + " FPS_",
              },
              "video"
            );
          });
      }
    );
  }
);
