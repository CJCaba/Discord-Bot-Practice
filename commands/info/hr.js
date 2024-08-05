const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hr')
        .setDescription('Provides information about High Rank Monsters')
        .addStringOption(option =>
            option.setName('input')
            .setDescription('The Monster to search for')),
    async execute(interaction) {

        await interaction.reply('This is placeholder information for the High Rank Monster');
    },
};