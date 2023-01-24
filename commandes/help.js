const Discord = require("discord.js")

module.exports = {
    
    name: "help",

    async run(bot, message, prefix) {

        const ping = `${prefix}ping: affiche le ping du bot.`
        const spam = `${prefix}spam <@pseudo> <NbSpam>: Spam un joueur NbSpam fois (15max). Attention, ce bot créer également des notifications à l'envoyeur.. !`
        const spamban = `${prefix}spamban <@pseudo>: Banni un utilisateur de l'utilisation de ${prefix}spam.`
        const help = `${prefix}help: affiche l'aide.`
        const creator= `${prefix}creator: Plus d'infos sur le bot.`

        await message.reply(`======= HELP ======= \n\n${help}\n${ping}\n${spam}\n${spamban}\n${creator}\n\n====================`)
},
};