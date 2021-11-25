module.invalidable = true;

const Discord = require('discord.js');
const fs = require('fs');

module.exports = (client) => {

    //Create collections
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    client.categories = fs.readdirSync(`${__root}/Commands`);

    client.queue = new Map()
 
    //Settings
    client.embedTitle = 'Bucky Fantasy';
    client.embedURL = 'https://cdn.discordapp.com/attachments/762858267474133043/826277755799863306/blackflame.jpg';
    client.embedFooter = 'Bucky Fantasy - by Downfall';
    client.embedColour = '#d25aed';
}
