const discord = require("discord.js");
const empire = new Discord.Client({disableEveryone: true});

empire.on("ready", async () => {
 console.log (`${empire.user.username} is online`);
  empire.user.setGame("Empire.");
});

empire.on("message", empire => {
if(empire.content === ".botinfo"
const empire = new Discord.RichEmbed()
 .setTitle("~~__***Bot info***__~~.")
 .setAuthor("Idk", "https://i.imgur.com/lm8s41J.png")
 
 .setColor(RANDOM)
 .setDescription("Just anormal bot info tho")
 .addField("Bot name", "empire.user.username",true)
   
   }
   message.channel.send({empire});


client.login(process.env.BOT_TOKEN); 
