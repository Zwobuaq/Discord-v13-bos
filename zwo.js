const { Client, Collection, Intents } = require('zwo.js');// Zwobuaq
const client = global.zclient = new Client({	allowedMentions: { parse: ['users', 'roles'], repliedUser: true },// Zwobuaq  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]// Zwobuaq
});// Zwobuaq

client.login(set.token).catch(err => {console.error("Tokeni kontrol et")});// Zwobuaq
client.commands = new Collection();// Zwobuaq

const { readdirSync } = require("fs");   // Zwobuaq

const { join } = require("path");// Zwobuaq

const commandFiles = readdirSync(join(__dirname, "Commands")).filter(file => file.endsWith(".js"));// Zwobuaq

for (const file of commandFiles) {// Zwobuaq

    const command = require(join(__dirname, "Commands", `${file}`));// Zwobuaq

    client.commands.set(command.code, command)// Zwobuaq

    console.log('[ '+command.code+' ] adlı komut çalıştı.');// Zwobuaq// Zwobuaq

}// Zwobuaq

readdirSync("./Events").filter(file => file.endsWith(".js")).forEach(file => {// Zwobuaq

    let event = require(`./Events/${file}`);// Zwobuaq

    zclient.on(event.conf.event, event.execute);// Zwobuaq

    console.log(` { ${file.replace(".js", "") } } adlı event çalıştı.`);// Zwobuaq

});// Zwobuaq

zclient.once("ready", async() => {// Zwobuaq

  console.log("Bot Başarıyla giriş yaptı!")// Zwobuaq

});// Zwobuaq

zclient.on("messageCreate", async (message) => {// Zwobuaq

if(message.author.bot) return;// Zwobuaq

  if(message.content.startsWith(set.prefix)) {// Zwobuaq

    const args = message.content.slice(set.prefix.length).trim().split(/ +/);// Zwobuaq

    const command = args.shift().toLowerCase();// Zwobuaq

    var cmd = zclient.commands.get(command) || client.commands.array().find((x) => x.aliases && x.aliases.includes(command));    // Zwobuaq

    if(!cmd) return message.channel.send(`Komutlarda **${command}** adlı bir komut bulamadım. kontrol et!`);// Zwobuaq

    try { cmd.run(Client, message, args, set); } catch (error){ console.error(error); }

  }// Zwobuaq

  });   // Zwobuaq

// Zwobuaq

// Zwobuaq

// Zwobuaq
