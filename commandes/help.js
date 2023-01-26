const Discord = require("discord.js")

module.exports = {
    
    name: "help",

    async run(bot, message, prefix) {

        const help = `**${prefix}help:** affiche l'aide.`
        const ping = `**${prefix}ping:** affiche le ping du bot.`
        const spam = `**${prefix}spam <@pseudo> <NbSpam>:** Spam un joueur NbSpam fois (15max). Attention, ce bot peut créer également des notifications à l'envoyeur.. !`
        const spamban = `**${prefix}spamban <@pseudo>:** Banni un utilisateur de l'utilisation de ${prefix}spam.`
        const spammode = `**${prefix}spammode <mode>:** Choisis si la commande ${prefix}spam envoie les messages dans le channel ou par MP.`
        const creator= `**${prefix}creator:** Plus d'infos sur le bot.`

        await message.reply(`**======= HELP =======** \n\n${help}\n${ping}\n${spam}\n${spamban}\n${spammode}\n${creator}\n\n**====================**`)
},
};