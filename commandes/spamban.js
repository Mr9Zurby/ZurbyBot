const Discord = require("discord.js")
const fs = require('fs')

module.exports = {
    
    name: "spamban",

    async run(bot, message) {
      let roleban = message.guild.roles.cache.find(role => role.name === 'banbot');
      let member = message.mentions.members.first();

      if(!roleban) {
        await message.reply(`Le rôle "banbot" doit être créé pour pouvoir bannir des utilisateurs.`);
      }
      else {
        member.roles.add(roleban);
        await message.reply(`L'utilisateur a bien été banni. Enlever le rôle "banbot" pour le débannir.`)
      }
    },
};