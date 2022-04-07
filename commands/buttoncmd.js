const discord = require("discord.js")
const client = require("../index.js").client
const { prefix } = require("../config/config.json")
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')
const credits = require("../config/config.json").credits.both

//modules
module.exports = () => {

	client.on("messageCreate",(msg) => {
		if (msg.content != "!test") return

		var testrow = new discord.MessageActionRow()
			.addComponents(
				new discord.MessageButton()
					.setCustomId("exampleID")
					.setDisabled(false)
					.setStyle("PRIMARY")
					.setLabel("Hello")
					.setEmoji("🥸")
			)
		msg.channel.send({content:"test",components:[testrow]})
	})
	
	client.on('interactionCreate', async (interaction) => {
		if (!interaction.isButton()) return
		if (interaction.customId != "exampleID") return
	
		const row = new discord.MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY')
			)
	
		const embed = new MessageEmbed()
			.setColor('#0099ff')//also supports hex codes
			.setTitle('Title')
			.setURL('https://dj-dj.be')
			.setDescription('This is the description\nHello there!')
			.setFooter(credits)
	
		await interaction.reply({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [row] });
	});
}