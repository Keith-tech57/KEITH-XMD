const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {

SESSION_ID: process.env.SESSION_ID || "Keith;;;8i9kjQIb#qzvsKpo1etthIIXOPhfzySblOSkAb4QgnDFpWCJv3bc",
  // Your bot's session ID (keep it secure)

PREFIX: getConfig("PREFIX") || ".", 
 // Command prefix (e.g., "., / ! * - +")

CHATBOT: getConfig("CHATBOT") || "off",
 // on/off chat bot,

BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "TECH", 
 // Bot's display name

MODE: getConfig("MODE") || process.env.MODE || "public",  
// Bot mode: public/private/group/inbox

REPO: process.env.REPO || "https://github.com/tech57/KEITH-XMD",  
// Bot's GitHub repo

BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",
  // Bot's BAILEYS

OWNER_NUMBER: process.env.OWNER_NUMBER || "923067109628", 
 // Owner's WhatsApp number

OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "TECH",           // Owner's name

DEV: process.env.DEV || "263789745277",              // Developer's contact number

DEVELOPER_NUMBER: '923067109628@s.whatsapp.net',            
// Developer's WhatsApp ID

AUTO_REPLY: process.env.AUTO_REPLY || "false",     // Enable/disable auto-reply

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// Reply to status updates?

AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*TECH-ALI VIEWED YOUR STATUS 🤩🤖*",  
// Status reply message

READ_MESSAGE: process.env.READ_MESSAGE || "false",         
 // Mark messages as read automatically?

REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
   
AUTO_REACT: process.env.AUTO_REACT || "false",     // Auto-react to messages?

OWNER_REACT: process.env.OWNER_REACT || "false",  // Auto-react to messages?

CUSTOM_REACT: process.env.CUSTOM_REACT || "true",         
 // Use custom emoji reactions?

CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍", 
 // set custom reacts

STICKER_NAME: process.env.STICKER_NAME || "KEITH-XMD",     
// Sticker pack name

AUTO_STICKER: process.env.AUTO_STICKER || "false",         
 // Auto-send stickers?
   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",     
 // Auto-record voice notes?

AUTO_TYPING: process.env.AUTO_TYPING || "true",            
// Show typing indicator?

MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 

MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/wss7ae.jpg",  
// Bot's "alive" menu mention image

   ANTI_DELETE: process.env.ANTI_DELETE || "true",
 // true antidelete to recover deleted messages 

ANTI_CALL: process.env.ANTI_CALL || "false",
 // enble to reject calls automatically

ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",   
 // Block bad words?

ANTI_LINK: process.env.ANTI_LINK || "true",  
  // Block links in groups

ANTI_VV: process.env.ANTI_VV || "false",  
 // Block view-once messages

DELETE_LINKS: process.env.DELETE_LINKS || "true", 
// Auto-delete links?

ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// inbox deleted messages (or 'same' to resend)

ANTI_BOT: process.env.ANTI_BOT || "true",

AUTO_VOICE: process.env.AUTO_VOICE || "false",

PM_BLOCKER: process.env.PM_BLOCKER || "false",

    
DESCRIPTION: process.env.DESCRIPTION || "> *© POWERED BY -TECH*",  
// Bot description

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",  
// Allow public commands?

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        
// Show bot as always online?

AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false", 
// React to status updates?

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false", // VIEW to status updates?

AUTO_BIO: process.env.AUTO_BIO || "false",
 // ture to get auto bio 

WELCOME: process.env.WELCOME || "false", 
// true to get welcome in groups

ALIVE_IMAGE_URL: getConfig("ALIVE_IMAGE_URL") || "https://files.catbox.moe/1soqkf.jpg",  
// Bot's "alive" image

GOODBYE: process.env.GOODBYE || "false",
 // true to get goodbye in groups 

ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 

};
        
