const Discord = require("discord.js")

module.exports = {
    
    name: "help",

    async run(bot, message) {

        const ping = "!ping: affiche le ping du bot."
        const spam = "!spam <@pseudo> <NbSpam>: Spam un joueur NbSpam fois (15max). Attention, ce bot créer également des notifications à l'envoyeur.. !"
        const help = "!help: affiche l'aide."

        await message.reply(`======= HELP ======= \n\n${help}\n${ping}\n${spam}\n\n====================`)
},
};