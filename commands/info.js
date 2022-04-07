const discord = require("discord.js")
const client = require("../index.js").client
const { prefix } = require("../config/config.json")//the prefix for the bot from config.json
const credits = require("../config/config.json").credits.both

//modules
module.exports = () => {

//onClient
client.on("messageCreate", (message) => {
    if (!message.content.startsWith(`${prefix}info`)) return //if the command is called

    //creating the embed 
    const embed = new discord.MessageEmbed()
          .setTitle("What you need to know")
          .addField("ButtonCMD.js", "here you'll find a basic command wih buttons")
          .addField("example.js","In this file you'll find a basic embed-command")
          .setColor("GREEN")
          .setFooter(credits)


    //message send
    message.channel.send({
        embeds: [embed]
    })
})
}