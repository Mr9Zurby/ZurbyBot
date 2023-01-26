const Discord = require("discord.js")
const fs = require('fs')
const config = require('../config.js')
;

module.exports = {
    
    name: "spammode",

    async run(bot, message, mode, prefix) {

        modeConf = config.modespam

        if(mode == "channel") {
            config.modespam = "channel"
            await message.reply(`Le spammode "Channel" a été défini.`);
        }
        else if (mode == "message") {
            config.modespam = "message"
            await message.reply(`Le spammode "MP" a été défini.`);
        }
    }
};