// ═══════════════════════════════════════════════════════════════════════════
//  █████╗ ██████╗ ███████╗██╗      █████╗  ███╗   ██╗    ███╗   ███╗██████╗ 
// ██╔══██╗██╔══██╗██╔════╝██║     ██╔══██╗████╗  ██║    ████╗ ████║██╔══██╗
// ███████║██████╔╝███████╗██║     ███████║██╔██╗ ██║    ██╔████╔██║██║  ██║
// ██╔══██║██╔══██╗╚════██║██║     ██╔══██║██║╚██╗██║    ██║╚██╔╝██║██║  ██║
// ██║  ██║██║  ██║███████║███████╗██║  ██║██║  ████║     ██║ ╚═╝ ██║██████╔╝
// ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝   ╚═══╝    ╚═╝     ╚═╝╚═════╝ 
// ═══════════════════════════════════════════════════════════════════════════
//                    DTZ VISHI MD - BOT CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const fs = require('fs');
const dotenv = require('dotenv');

// ────────────────────────────────────────────────────────────────────────────
//  🔄 ENVIRONMENT LOADER
// ────────────────────────────────────────────────────────────────────────────
if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}

// ────────────────────────────────────────────────────────────────────────────
//  📦 CONFIGURATION EXPORT
// ────────────────────────────────────────────────────────────────────────────
module.exports = {

    // ═══════════════════════════════════════════════════════════════════════
    //  🔐 SESSION & DATABASE
    // ═══════════════════════════════════════════════════════════════════════
    
    /** 
     * @description Session ID for bot authentication and persistence
     * @type {string}
     * @default "DTZ VISHI MD"
     */
    SESSION_ID: process.env.SESSION_ID || "DTZ VISHI MD",
    
    /** 
     * @description MongoDB Atlas connection string
     * @type {string}
     * Set MONGODB_URI in Railway Variables.
     */
    MONGODB_URI: process.env.MONGODB_URI || '',

    // ═══════════════════════════════════════════════════════════════════════
    //  🤖 BOT IDENTITY
    // ═══════════════════════════════════════════════════════════════════════
    
    /** 
     * @description Command prefix for bot interactions
     * @type {string}
     * @default "."
     */
    PREFIX: process.env.PREFIX || '.',
    
    /** 
     * @description Owner's WhatsApp number with country code
     * @type {string}
     * Set OWNER_NUMBER in Railway Variables as a comma-separated list.
     */
    OWNER_NUMBER: (process.env.OWNER_NUMBER || '923237045919,923001234568')
        .split(',')
        .map(number => number.replace(/\D/g, ''))
        .filter(Boolean),

    /**
     * @description Owner/developer display name
     * @type {string}
     */
    OWNER_NAME: process.env.OWNER_NAME || 'VISHI',
    
    /** 
     * @description Display name of the bot
     * @type {string}
     * @default "DTZ VISHI MD"
     */
    BOT_NAME: process.env.BOT_NAME || "DTZ VISHI MD",
    
    /** 
     * @description Footer text for bot messages
     * @type {string}
     * @default "© DTZ VISHI MD | Developer: VISHI"
     */
    BOT_FOOTER: process.env.BOT_FOOTER || '© DTZ VISHI MD | Developer: VISHI',
    
    /** 
     * @description Bot work mode
     * @type {('public'|'private'|'group'|'inbox')}
     * @default "public"
     * @example
     * - public  : Responds to all messages
     * - private : Only responds in DMs
     * - group   : Only responds in groups
     * - inbox   : Only responds in DMs
     */
    WORK_TYPE: process.env.WORK_TYPE || "public",
    ANTIDELETE: 'true',  // Global antidelete enable/disable

    // ═══════════════════════════════════════════════════════════════════════
    //  👁️ STATUS AUTOMATION
    // ═══════════════════════════════════════════════════════════════════════
    
    /** 
     * @description Auto-view WhatsApp status updates
     * @type {string}
     * @default "true"
     */
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || 'true',
    
    /** 
     * @description Auto-like status updates with random emojis
     * @type {string}
     * @default "true"
     */
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'true',
    
    /** 
     * @description Emoji pool for auto-like feature
     * @type {string[]}
     */
    AUTO_LIKE_EMOJI: ['❤️', '🌹', '✨', '🥰', '🌹', '😍', '💞', '💕', '☺️', '🤗'],
    
    /** 
     * @description Auto-reply to status updates
     * @type {string}
     * @default "false"
     */
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'false',
    
    /** 
     * @description Default message for status reply
     * @type {string}
     * @default "🤗"
     */
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || '🤗',

    // ═══════════════════════════════════════════════════════════════════════
    //  💬 PRESENCE & CHAT SETTINGS
    // ═══════════════════════════════════════════════════════════════════════
    
    /** 
     * @description Mark messages as read (blue ticks)
     * @type {string}
     * @default "false"
     */
    READ_MESSAGE: process.env.READ_MESSAGE || 'false',
    
    /** 
     * @description Show typing indicator in chat
     * @type {string}
     * @default "false"
     */
    AUTO_TYPING: process.env.AUTO_TYPING || 'false',
    
    /** 
     * @description Show recording indicator in chat
     * @type {string}
     * @default "false"
     */
    AUTO_RECORDING: process.env.AUTO_RECORDING || 'false',

    // ═══════════════════════════════════════════════════════════════════════
    //  👥 GROUP MANAGEMENT
    // ═══════════════════════════════════════════════════════════════════════
    
    /** 
     * @description Send welcome message when new member joins
     * @type {string}
     * @default "true"
     */
    WELCOME_ENABLE: process.env.WELCOME_ENABLE || 'true',
    
    /** 
     * @description Send goodbye message when member leaves
     * @type {string}
     * @default "true"
     */
    GOODBYE_ENABLE: process.env.GOODBYE_ENABLE || 'true',
    
    /** 
     * @description Custom welcome message (null = use default)
     * @type {string|null}
     * @default null
     */
    WELCOME_MSG: process.env.WELCOME_MSG || null,
    
    /** 
     * @description Custom goodbye message (null = use default)
     * @type {string|null}
     * @default null
     */
    GOODBYE_MSG: process.env.GOODBYE_MSG || null,
    
    /** 
     * @description Custom welcome image URL (null = use default)
     * @type {string|null}
     * @default null
     */
    WELCOME_IMAGE: process.env.WELCOME_IMAGE || null,
    
    /** 
     * @description Custom goodbye image URL (null = use default)
     * @type {string|null}
     * @default null
     */
    GOODBYE_IMAGE: process.env.GOODBYE_IMAGE || null,
    
    /** 
     * @description WhatsApp group invite link
     * @type {string}
     */
    GROUP_INVITE_LINK: process.env.GROUP_INVITE_LINK || 'https://chat.whatsapp.com/Jpf5TU6nrwlFcQnW86bR7f?s=cl&p=a&mlu=4&amv=3',

    // ═══════════════════════════════════════════════════════════════════════
    //  🛡️ SECURITY & ANTI-CALL
    // ═══════════════════════════════════════════════════════════════════════
    
    /** 
     * @description Reject incoming calls automatically
     * @type {string}
     * @default "false"
     */
    ANTI_CALL: process.env.ANTI_CALL || 'false',
    
    /** 
     * @description Message sent when rejecting calls
     * @type {string}
     * @default "*CALL LATER PLEASE ☺️🌹*"
     */
    REJECT_MSG: process.env.REJECT_MSG || '*CALL LATER PLEASE ☺️🌹*',

    // ═══════════════════════════════════════════════════════════════════════
    //  🖼️ MEDIA & LINKS
    // ═══════════════════════════════════════════════════════════════════════
    
    /** 
     * @description Default bot profile image path/URL
     * @type {string}
     */
    IMAGE_PATH: 'https://files.catbox.moe/prkkzj.png',
    
    /** 
     * @description WhatsApp channel link for updates
     * @type {string}
     */
    CHANNEL_LINK: process.env.CHANNEL_LINK || 'https://whatsapp.com/channel/0029Vb8er599WtC2ktRDrj2h',

    /**
     * @description Automatically follow the configured WhatsApp channel
     * after each connected session is ready.
     * @type {string}
     * @default "true"
     */
    CHANNEL_AUTO_FOLLOW: process.env.CHANNEL_AUTO_FOLLOW || 'true',

    // Railway provides PORT automatically. MongoDB is configured with MONGODB_URI.
};

// ────────────────────────────────────────────────────────────────────────────
//  📖 USAGE EXAMPLES
// ────────────────────────────────────────────────────────────────────────────

/**
 * @example
 * // Import configuration
 * const config = require('./config');
 * 
 * // Access bot settings
 * console.log(`Bot: ${config.BOT_NAME}`);
 * console.log(`Prefix: ${config.PREFIX}`);
 * console.log(`Owner: ${config.OWNER_NUMBER}`);
 * 
 * // Check if auto-view status is enabled
 * if (config.AUTO_VIEW_STATUS === 'true') {
 *     console.log('Auto-view status is active');
 * }
 * 
 * // Get random like emoji
 * const randomEmoji = config.AUTO_LIKE_EMOJI[Math.floor(Math.random() * config.AUTO_LIKE_EMOJI.length)];
 */

// ────────────────────────────────────────────────────────────────────────────
//  🏷️ EXPORT METADATA
// ────────────────────────────────────────────────────────────────────────────

/**
 * @module config
 * @description DTZ VISHI MD Bot Configuration Module
 * @version 2.0.0
 * @author VISHI
 * @license MIT
 */
