// npm i discordjs et fs

const Discord = require('discord.js');  
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({intents});
const loadcommandes = require('./loader/loadcommandes');
const config = require('./config');

bot.commands = new Discord.Collection();

bot.login(config.token);

loadcommandes(bot);

bot.on('messageCreate', async message => {
    //console.log("lancement main");
    const args = message.content.trim().split(/ +/g);
    const pseudo = message.author.username
    const id = message.author.id
    const role = message.member.roles.cache.some(role => role.name === 'adminbot')

    if(message.content == '!help') return bot.commands.get("help").run(bot, message);
    if(message.content == '!ping') return bot.commands.get("ping").run(bot, message);
    if(message.content == '!creator') return bot.commands.get("creator").run(bot, message);
 
    ////////////////////////////// Appel fonction !banspam //////////////////////////////
    if (args[0] == '!spamban' && role) {
        if (!args[1]) return message.reply('précise un pseudo à ban du spam.');
        else return bot.commands.get("spamban").run(bot, message);
        
    }
    else if (args[0] == '!spamban' && !role) return message.reply("Tu n'as pas les permissions.");

     ////////////////////////////// Appel fonction !spam //////////////////////////////
    if (args[0] == '!spam') {
        if (!args[1]) return message.reply('précise un pseudo à spam.');
        if (!args[2]) return message.reply('Précise le nombre de spam (15 max).');
        if (args[3]) return message.reply("Trop d'arguments.");
        if (args[2] && !args[3]) return bot.commands.get("spam").run(bot, message, args[1], args[2], pseudo, id);
    }
})

bot.on('ready', () => {

    console.log(`Logged in as ${bot.user.tag}!`);
})