let bots = false;
const { 
	smd, 
	botpic,
	send,
	Config, 
	tlang, 
	sleep,
	smdBuffer,
	prefix,
	bot_
	} = require('../lib')
const Levels = require("discord-xp");
try{ if(isMongodb)(Levels.setURL(mongodb)) }catch{}
//============================================================================
let utd = false;

smd({
	pattern: "levelup",
	desc: "turn On/Off auto levelup",
	fromMe : true,
	category: "level",
use:"<on/off>",
	filename: __filename,
},
async(message,text)=>{
try{
	if(!global.isMongodb) return await message.reply(message.isCreator? `*_Add MONGODB_URI to use these cmds_*`:`*_Please ask my Owner to add MONGODB_URI!_*`)
let bgmm = await bot_.findOne({ id: `bot_${message.user}` }) || await bot_.new({id: `bot_${message.user}` });
let toggle = text.toLowerCase().split()[0].trim();
utd = true;
if (toggle === 'on'|| toggle === 'enable' || toggle ==='act') {
if(bgmm.levelup === 'true') return await message.reply("*levelup already enabled!*");
await bot_.updateOne({ id: `bot_${message.user}` }, { levelup: 'true' });
return await message.reply("*levelup Succesfully enabled*");
}else if (toggle === 'off'|| toggle === 'disable' || toggle ==='deact') {
if(bgmm.levelup === 'false') return await message.reply("*levelup already disabled*");
await bot_.updateOne({ id: `bot_${message.user}` }, { levelup: 'false' });
return await message.reply("*levelup Succesfully deactivated*");
} else return await message.send(`*_Use on/off to enable/disable levelup!_*`)
}catch(e){ await message.error(`${e}\n\nCommand: levelup `,e)   }

})

















smd({
            cmdname: "profile",
            info: "Shows profile of user.",
            type: "level",
			use:"<@user>",
            filename: __filename,
        },
        async(message) => {
          try{       
            if(!global.isMongodb) return await message.reply(message.isCreator? `*_Add MONGODB_URI to use these cmds_*`:`*_Please ask my Owner to add MONGODB_URI!_*`)
            let meh = message.sender;
            if(message.isCreator){ meh = message.reply_message ? message.reply_message.sender : message.mentionedJid[0] ? message.mentionedJid[0] : message.sender || message.sender; }
            
            var bio = await message.bot.fetchStatus(meh);
            var bioo = bio.status;
           
            const userq = await Levels.fetch(meh, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD✨";
             if (lvpoints <=  2) { var role = "🏳Citizen"; } 
	else if (lvpoints <=  4) { var role = "👼Baby Wizard"; } 
	else if (lvpoints <=  6) { var role = "🧙‍♀️Wizard";  } 
	else if (lvpoints <=  8) { var role = "🧙‍♂️Wizard Lord"; }
	else if (lvpoints <= 10) { var role = "🧚🏻Baby Mage";  } 
	else if (lvpoints <= 12) { var role = "🧜Mage"; } 
	else if (lvpoints <= 14) { var role = "🧜‍♂️Master of Mage";} 
	else if (lvpoints <= 16) { var role = "🌬Child of Nobel"; } 
	else if (lvpoints <= 18) { var role = "❄Nobel"; }
	else if (lvpoints <= 20) { var role = "⚡Speed of Elite"; } 
	else if (lvpoints <= 22) { var role = "🎭Elite"; } 
	else if (lvpoints <= 24) { var role = "🥇Ace I"; }
	else if (lvpoints <= 26) { var role = "🥈Ace II"; } 
	else if (lvpoints <= 28) { var role = "🥉Ace Master"; }
	else if (lvpoints <= 30) { var role = "🎖Ace Dominator";} 
	else if (lvpoints <= 32) { var role = "🏅Ace Elite"; }
	else if (lvpoints <= 34) { var role = "🏆Ace Supreme";}
	else if (lvpoints <= 36) { var role = "💍Supreme I";}
	else if (lvpoints <= 38) { var role = "💎Supreme Ii";} 
	else if (lvpoints <= 40) { var role = "🔮Supreme Master";} 
	else if (lvpoints <= 42) { var role = "🛡Legend III";} 
	else if (lvpoints <= 44) { var role = "🏹Legend II";} 
	else if (lvpoints <= 46) { var role = "⚔Legend"; } 
	else if (lvpoints <= 55) { var role = "🐉Immortal"; }
	
            let ttms = userq.xp / 8;
	var pfp; try { pfp = await message.bot.profilePictureUrl(meh, "image"); }catch{  pfp = await botpic();   }
  var naam_ser;try{ naam_ser = await message.bot.getName(meh) } catch{}
            
const profile = `
*Hii ${naam_ser},*
*Here is your profile information*
*👤Username:* ${naam_ser}
*⚡Bio:* ${bioo}
*🧩Role:* ${role}
*🍁Level:* ${userq.level}
*📥Total Messages* ${ttms}
*Powered by ${tlang().title}*
`;
            
w
            message.bot.sendMessage(message.chat, { image: { url: pfp },caption: profile }, { quoted: message });
          }catch(e){ await message.error(`${e}\n\ncommand: tagall`,e,`*Can't fetch data,please check mongodb!!*`) }
        }
    )


//============================================================================
    //---------------------------------------------------------------------------
smd({
            cmdname: "rank",
            info: "Sends rank card of user.",
            type: "level",
			use:"<@user>",
            filename: __filename,
        },
        async(message) => {
          try{
            if(!global.isMongodb) return await message.reply(message.isCreator ? `*_Please add MONGODB_URI to use this feature_*`:`*_Please ask my Owner to add MONGODB_URI!_*`)
            let meh = message.sender;
            if(message.isCreator){ meh = message.reply_message ? message.reply_message.sender : message.mentionedJid[0] ? message.mentionedJid[0] : message.sender || message.sender; }

          
            const userq = await Levels.fetch(meh, "RandomXP");
            const lvpoints = userq.level;
            var role = "GOD✨";
           if (lvpoints <=  2) { var role = "🏳Citizen"; } 
	else if (lvpoints <=  4) { var role = "👼Baby Wizard"; } 
	else if (lvpoints <=  6) { var role = "🧙‍♀️Wizard";  } 
	else if (lvpoints <=  8) { var role = "🧙‍♂️Wizard Lord"; }
	else if (lvpoints <= 10) { var role = "🧚🏻Baby Mage";  } 
	else if (lvpoints <= 12) { var role = "🧜Mage"; } 
	else if (lvpoints <= 14) { var role = "🧜‍♂️Master of Mage";} 
	else if (lvpoints <= 16) { var role = "🌬Child of Nobel"; } 
	else if (lvpoints <= 18) { var role = "❄Nobel"; }
	else if (lvpoints <= 20) { var role = "⚡Speed of Elite"; } 
	else if (lvpoints <= 22) { var role = "🎭Elite"; } 
	else if (lvpoints <= 24) { var role = "🥇Ace I"; }
	else if (lvpoints <= 26) { var role = "🥈Ace II"; } 
	else if (lvpoints <= 28) { var role = "🥉Ace Master"; }
	else if (lvpoints <= 30) { var role = "🎖Ace Dominator";} 
	else if (lvpoints <= 32) { var role = "🏅Ace Elite"; }
	else if (lvpoints <= 34) { var role = "🏆Ace Supreme";}
	else if (lvpoints <= 36) { var role = "💍Supreme I";}
	else if (lvpoints <= 38) { var role = "💎Supreme Ii";} 
	else if (lvpoints <= 40) { var role = "🔮Supreme Master";} 
	else if (lvpoints <= 42) { var role = "🛡Legend III";} 
	else if (lvpoints <= 44) { var role = "🏹Legend II";} 
	else if (lvpoints <= 46) { var role = "⚔Legend"; } 
	else if (lvpoints <= 55) { var role = "🐉Immortal"; }

          
          let disc = meh.substring(3, 7);
          var ppuser; try {ppuser = await message.bot.profilePictureUrl(meh, "image");} catch { ppuser = THUMB_IMAGE;}
          var naam_ser;try{ naam_ser = await message.bot.getName(meh) } catch{}
          let ttms = userq.xp / 8;
          
var textr = `*Hii ${tlang().greet} ,🌟 ${naam_ser ||"Sir_"}∆${disc}'s* Exp
\n\n*🌟Role*: ${role}\n*🟢Exp*: ${userq.xp} / ${Levels.xpFor( userq.level + 1)}
*🏡Level*: ${userq.level}
*Total Messages:*- ${ttms}
`;

          
          
          await  message.bot.sendMessage(message.chat, { image: {url :ppuser }, caption: textr, }, { quoted: message });
          }catch(e){ await message.error(`${e}\n\ncommand: leaderboard`,e,`*Can't fetch data, make sure MONGODB_URI added!!*`) }
        }
    )
//============================================================================
    //---------------------------------------------------------------------------
smd({
            cmdname: "leaderboard",
            alias: ["deck"],
            info: "To check leaderboard",
            type: "level",
			use:"<@user>",
            filename: __filename,
        },
        async(message) => {
try{
  if(!global.isMongodb) return await message.reply(message.isCreator? `*_Add MONGODB_URI to use these cmds_*`:`*_Please ask my Owner to add MONGODB_URI!_*`)
          
            const fetchlb = await Levels.fetchLeaderboard("RandomXP", 5);
            let leadtext = `
*-------------------------------*
*----● LeaderBoard ● -----*
*-------------------------------*
\n\n`
            for (let i = 0; i < fetchlb.length; i++) {
                const lvpoints = fetchlb[i].level
                var role = "GOD✨";
                           if (lvpoints <=  2) { var role = "🏳Citizen"; } 
	else if (lvpoints <=  4) { var role = "👼Baby Wizard"; } 
	else if (lvpoints <=  6) { var role = "🧙‍♀️Wizard";  } 
	else if (lvpoints <=  8) { var role = "🧙‍♂️Wizard Lord"; }
	else if (lvpoints <= 10) { var role = "🧚🏻Baby Mage";  } 
	else if (lvpoints <= 12) { var role = "🧜Mage"; } 
	else if (lvpoints <= 14) { var role = "🧜‍♂️Master of Mage";} 
	else if (lvpoints <= 16) { var role = "🌬Child of Nobel"; } 
	else if (lvpoints <= 18) { var role = "❄Nobel"; }
	else if (lvpoints <= 20) { var role = "⚡Speed of Elite"; } 
	else if (lvpoints <= 22) { var role = "🎭Elite"; } 
	else if (lvpoints <= 24) { var role = "🥇Ace I"; }
	else if (lvpoints <= 26) { var role = "🥈Ace II"; } 
	else if (lvpoints <= 28) { var role = "🥉Ace Master"; }
	else if (lvpoints <= 30) { var role = "🎖Ace Dominator";} 
	else if (lvpoints <= 32) { var role = "🏅Ace Elite"; }
	else if (lvpoints <= 34) { var role = "🏆Ace Supreme";}
	else if (lvpoints <= 36) { var role = "💍Supreme I";}
	else if (lvpoints <= 38) { var role = "💎Supreme Ii";} 
	else if (lvpoints <= 40) { var role = "🔮Supreme Master";} 
	else if (lvpoints <= 42) { var role = "🛡Legend III";} 
	else if (lvpoints <= 44) { var role = "🏹Legend II";} 
	else if (lvpoints <= 46) { var role = "⚔Legend"; } 
	else if (lvpoints <= 55) { var role = "🐉Immortal"; }
  var naam_ser;try{ naam_ser = await message.bot.getName(fetchlb[i].userID) } catch{naam_ser = fetchlb[i].userID?.split("@")[0] || "Unknown"}
leadtext += `*${i + 1}●Name*: ${naam_ser}
*●Level*: ${fetchlb[i].level}
*●Points*: ${fetchlb[i].xp}
*●Role*: ${role}
*●Total messages*: ${fetchlb[i].xp / 8}
\n`;
            }
            await message.reply(leadtext)
   }catch(e){ await message.error(`${e}\n\ncommand: leaderboard`,e,`*Can't fetch data, make sure MONGODB_URI added!!*`) }
        }
    )

//============================================================================
//============================================================================


	smd({ on: "text" }, async(message) => {



    try{

		if(!bots || utd ){ bots = await bot_.findOne({id: `bot_${msg.user}` }); utd=false} 
    if(!bots || !global.isMongodb) return 
	
	    const randomXp = 8;
	    let usrname = message.senderName
	    const hasLeveledUp = await Levels.appendXp(message.sender, "RandomXP", randomXp);
	    if (hasLeveledUp){
		    const sck1 = await Levels.fetch(message.sender, "RandomXP");
		    const lvpoints = sck1.level;
		    var role = "GOD";
			  if (lvpoints <=  2) { var role = "🏳Citizen";  } 
		    else if (lvpoints <=  4) { var role = "👼Baby Wizard"; } 
		    else if (lvpoints <=  6) { var role = "🧙‍♀️Wizard"; } 
		    else if (lvpoints <=  8) { var role = "🧙‍♂️Wizard Lord"; } 
		    else if (lvpoints <= 10) { var role = "🧚🏻Baby Mage"; } 
		    else if (lvpoints <= 12) { var role = "🧜Mage"; } 
		    else if (lvpoints <= 14) { var role = "🧜‍♂️Master of Mage";} 
		    else if (lvpoints <= 16) { var role = "🌬Child of Nobel";  } 
		    else if (lvpoints <= 18) { var role = "❄Nobel";} 
		    else if (lvpoints <= 20) { var role = "⚡Speed of Elite"; }
		    else if (lvpoints <= 22) { var role = "🎭Elite"; } 
		    else if (lvpoints <= 24) { var role = "🥇Ace I"; } 
		    else if (lvpoints <= 26) { var role = "🥈Ace II"; } 
		    else if (lvpoints <= 28) { var role = "🥉Ace Master"; }
		    else if (lvpoints <= 30) { var role = "🎖Ace Dominator"; }
		    else if (lvpoints <= 32) { var role = "🏅Ace Elite"; }
		    else if (lvpoints <= 34) { var role = "🏆Ace Supreme";} 
		    else if (lvpoints <= 36) { var role = "💍Supreme I"; }
		    else if (lvpoints <= 38) { var role = "💎Supreme Ii"; } 
		    else if (lvpoints <= 40) { var role = "🔮Supreme Master"; } 
		    else if (lvpoints <= 42) { var role = "🛡Legend III"; } 
		    else if (lvpoints <= 44) { var role = "🏹Legend II"; } 
		    else if (lvpoints <= 46) { var role = "⚔Legend"; } 
		    else if (lvpoints <= 55) { var role = "🐉Immortal"; }
		    

		    if(bots.levelup && bots.levelup ==="true" ) {
			    await message.bot.sendUi(message.chat,{
			caption: `
╔════⪨
║ *Wow,Someone just*
║ *leveled Up huh⭐*
║ *👤Name*: ${message.pushName}
║ *🎐Level*: ${sck1.level}🍭
║ *🛑Exp*: ${sck1.xp} / ${Levels.xpFor(sck1.level + 1)}
║ *📍Role*: *${role}*
║ *Enjoy🥳*
╚════════════⪨ `}, { quoted: message });
		    }
	    }
    }catch{}
	})
