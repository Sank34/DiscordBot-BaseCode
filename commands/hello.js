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
          .setTitle("test")
          .setAuthor("Test 1")
          .addField("Test", "this is a test")
          .setDescription("This is a test commmand")


    //message send
    message.channel.send({
        embeds: [embed]
    })
})
}