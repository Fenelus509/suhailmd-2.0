const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_02_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDQzLFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNixcbiAgICAgICAgMTk2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTlBUYjRtbVA4VGkyVFlZNERmVVhxNmRQODA5SDZDVTg0VkllWGVaeXlLTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxODI5Mjg1NDQxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzVFMUU3NkY5MUVDNUY3QzJBQTFCNUNDMTVBQzI1QTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1ODg0MTU4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTgyOTI4NTQ0MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU3REFBRTVFMUEyMjg1MkNEREFFNEJFNTk2NzhGMDc2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTg4NDE1OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJucEFaUndpY1JqTzlFNlVpeWNOdV9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBiMzVmM2Y0LTZlZWYtNDQxZi05ZDM5LTVhNGNlOWZhZjkzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICAyMTMsXG4gICAgICAxNTYsXG4gICAgICAxMDQsXG4gICAgICAyMzIsXG4gICAgICAxMjcsXG4gICAgICA5MyxcbiAgICAgIDE2NSxcbiAgICAgIDc0LFxuICAgICAgMTQ2LFxuICAgICAgMjIwLFxuICAgICAgMjYsXG4gICAgICAxMDYsXG4gICAgICAxMTQsXG4gICAgICA5NCxcbiAgICAgIDcxLFxuICAgICAgMTAzLFxuICAgICAgODcsXG4gICAgICAyMixcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMyxcbiAgICAgIDcsXG4gICAgICA5NCxcbiAgICAgIDE1LFxuICAgICAgMjMwLFxuICAgICAgMjMzLFxuICAgICAgMjcsXG4gICAgICA4NyxcbiAgICAgIDEwLFxuICAgICAgMTgwLFxuICAgICAgMTY2LFxuICAgICAgODksXG4gICAgICA0NCxcbiAgICAgIDQyLFxuICAgICAgMTk0LFxuICAgICAgMCxcbiAgICAgIDMxLFxuICAgICAgMzMsXG4gICAgICAzMyxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tPM3Fhb0NFUFg2M2JzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaGdOWndPKzl0ajN0bERGTzczVUdVcGkzd2IzRUpSY2ZvZVZRZVUxRElsbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpczFCWjBZRXRuWDZuK2ZrYkdNcmwrTDVBSkx1MWhnMnFaODBuTlFVOUVDZkRORUwrMXVGTTFTUGEvTGpBUzhrdEZyRGxqZWdiVDBVbDM0eFF5bllBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyZmpDRTlpMVJ5MkRBUk0rQWpTSFBkYjFybEgyL1RPNU9RSmJ5aDl4WG56akw4NHViMklPTlhLb1A2VXlGOTR4dUxaNEw3em9EM3V4ZHlEb21RMWJoQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE4MjkyODU0NDE5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MzEwODQ2MzAwMjc1OjJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODI5Mjg1NDQxOToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTg4NDE1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5oWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmhYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUk1rVk9IU09aMFpDNm5aa1l6bmVUdElWem5PMjJqZU5DNGRyenBPQlZEcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MjU2MzAxMTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTg4NDE1ODcwN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
