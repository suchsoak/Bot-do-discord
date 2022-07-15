const Discord = require('discord.js');
const bot = new Discord.Client();

const token = '9e34ae9ccff13fc7c2fa62fa4fdd5a9ec71d7fabe35595aa90bd7aa3ff764d35';

bot.login(token);

bot.on('ready', () => {
    console.log('I ready!');
})


bot.on('message', msg = >   {
    if (msg.content ==='i gas') {
        msg.reply('Hi! Walcom')
    }
})