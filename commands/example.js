const discord = require("discord.js")
const client = require("../index.js").client
const { prefix } = require("../config/config.json")//the prefix for the bot from config.json
const { hello } = "../config/config.json"//useless

//modules
module.exports = () => {

//onClient
client.on("messageCreate", (message) => {
    if (!message.content.startsWith(`${prefix}hello`)) return //if the command is called

    //creating the embed 
    const embed = new discord.MessageEmbed()
          .setTitle("Title")
          .addField("Tittle of the field", "Description of the field that\nalso supports new-line mode")//the add field funct supports only 2 arg->arg 1--title ; arg 2--Description
          .setDescription("This is the description")
          .setColor("GREEN")


    //message send
    message.channel.send({
        embeds: [embed]
    })
})
}