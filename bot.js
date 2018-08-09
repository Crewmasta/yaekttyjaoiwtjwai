const discord = require("discord.js");
const empire = new Discord.Client({disableEveryone: true});

empire.on("ready", async () => {
 console.log (`${empire.user.username} is online`);
  empire.user.setGame("Empire.");
});
var prefix = ".";
client.on("mesage", cmd => {
if("cmd.content === "${prefix}botinfo");

 let empire = new Discord.RichEmbed()
 .setDescription("Bot information.")
 .setColor("RANDOM")
 .addField("Bot name", bot.user.username);
  
  return message.channe.send(empire);
 
}
}

client.login(process.env.BOT_TOKEN); 
