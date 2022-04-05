const { Client,Intents } =  require("discord.js")
const { token } = require("./config/config.json")
const fs = require('fs')
const status = require("./config/config.json").status

//Client init
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
]})
exports.client = client


client.once('ready', () => {
    console.log("Systems OPERATIONALS")
    client.user.setActivity(status)
})

//comand Handler
fs.readdirSync("./commands").forEach((file) => {
    if (!file.endsWith(".js")){return}
    var command = require("./commands/"+file)
    try {
      command()
    } catch {
      console.log("Couldn't activate the file")
    }
})
client.login(token)