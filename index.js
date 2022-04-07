const { Client,Intents } = require("discord.js")
const token = require("./config/config.json").token
const fs = require('fs')
const status = require("./config/config.json").status
const startup = require("./config/config.json").ConsoleLogs.Startup
const error = require("./config/config.json").ConsoleLogs.ErrorActivateCMD

//Client init
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
]})
exports.client = client


client.on('ready', () => {
    console.log(startup)
    client.user.setActivity(status)
})

//comand Handler
fs.readdirSync("./commands").forEach((file) => {
    if (!file.endsWith(".js")){return}
    var command = require("./commands/"+file)
    try {
      command()
    } catch {
      console.log(error)
    }
})
client.login(token)
