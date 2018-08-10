const discord = require("discord.js");
const empire = new Discord.Client({disableEveryone: true});

empire.on("ready", async () => {
 console.log (`${empire.user.username} is online`);
  empire.user.setGame("Empire.");
});

empire.on("message", empire => {
 if (message.content === '.info') {
const tata = new RichEmbed()

.setTitle('~~__***Bot info.!***__~~')
.setColor('RANDOM')
.setDescription('Bot info.!')
.addField('Bot name', 'empire.user.username'); 


client.login(process.env.BOT_TOKEN); 
