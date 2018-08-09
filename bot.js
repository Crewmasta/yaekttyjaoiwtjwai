const discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
 console.log (`${bot.user.username} is online`);
  bot.user.setGame("Empire.");
});
var prefix = ".";
client.on("mesage", cmd => {
if(cmd ==== `${prefix}botinfo`){

 let empire = new Discord.RichEmbed()
 .setDescription("Bot information.")
 .setColor("RANDOM")
 .addField("Bot name", bot.user.username);
  
  return message.channe.send(empire);
 
}
}

client.login(process.env.BOT_TOKEN); 
