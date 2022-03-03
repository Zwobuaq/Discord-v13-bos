const Discord = require("discord.js");// Zwobuaq
const client = global.client;// Zwobuaq
exports.execute = async (message) => {// Zwobuaq

  
var JoinChannel = client.channels.cache.get("Bot Ses Kanalı ID"); // Botun giriceği ses kanal ID

 const { joinVoiceChannel } = require('@discordjs/voice');// Zwobuaq

 if(JoinChannel){// Zwobuaq

const connection = joinVoiceChannel({// Zwobuaq
	channelId: JoinChannel.id,// Zwobuaq	
  guildId: JoinChannel.guild.id,// Zwobuaq
	adapterCreator: JoinChannel.guild.voiceAdapterCreator,// Zwobuaq

});// Zwobuaq

 } else {// Zwobuaq
   console.log("BotJoinChannel.js 6. satırdaki ID yi düzelt.")// Zwobuaq

 }// Zwobuaq

};// Zwobuaq
exports.conf = {// Zwobuaq
  event: "ready"// Zwobuaq
};// Zwobuaq
