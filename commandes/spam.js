const Discord = require("discord.js")
const fs = require('fs')

module.exports = {
	// data: new SlashCommandBuilder()...
    name: "spam",

	async run(bot, message, pseudo, nombre, initiateur, id){
		const role = message.member.roles.cache.some(role => role.name === 'banbot')

		if (pseudo.charAt() == '@') await message.reply(`Cette personne n'est pas présente sur ce discord.`);
		else if (pseudo.charAt() != '@' && pseudo.substring(0, 2) != '<@') await message.reply(`Tu as oublié le @ devant le pseudo`);
		else if (pseudo.substring(0, 3) == '<@&') await message.reply(`Spam pas un rôle idiot..`);
		else if (!parseInt(nombre)) await message.reply(`Met un chiffre idiot..`);
		else if (parseInt(nombre) > 15) await message.reply(`Calme toi sur le nombre de spam BG.`);
		else if (role) await message.reply("Tu es bannis de la commande !spam. Rapproche toi d'un admin pour tenter d'être débanni.");

		if (pseudo.substring(0, 2) == '<@' && pseudo.substring(0, 3) != '<@&' && nombre <= 15 && !role) {
				for (let pas = 0; pas < nombre; pas++) {
					await message.reply(`Hey ${pseudo} t'es attendu !`);
					await new Promise(res => setTimeout(res, 1000));
				}
		}

		  
	},
};