const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rathalos')
        .setDescription('Provides information about High Rathalos'),
    async execute(interaction) {
        await interaction.reply('This is placeholder information for the High Rank Rathalos');
    },
};