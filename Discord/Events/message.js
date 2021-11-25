module.invalidable = true

const { execute } = require('../Utils/database/mysql.ts')
const { MessageEmbed } = require('discord.js')

module.exports = {

    x: async function (client, message) {
        
        // const Data = await execute(`SELECT * FROM servers WHERE server_id = ?`, [ message.guild.id ])
        // if(!Data) return client.emit('guildCreate', message.guild)

        var tools = {
            prefix: '!'
        }
        
        if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) message.reply(`hey there! The current prefix for this guild is \`${tools.prefix}\` incase you forgot!`);
        
        if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`) || message.content.startsWith(tools.prefix) || message.content.startsWith(tools.sixmans_prefix)) {
            if (message.content.startsWith(`<@!${client.user.id}>`)) var length = 4 + client.user.id.length;
            if (message.content.startsWith(`<@${client.user.id}>`)) var length = 3 + client.user.id.length;
            if (message.content.startsWith(tools.prefix)) var length = 0 + tools.prefix.length;

            var args = message.content.slice(length).trim().split(/ +/g);
            var cmd = args.shift().toLowerCase();
            if (cmd.length === 0) return;

            command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

            if(message.content.startsWith(tools.prefix)) {
                if(!command) return
                command.run(client, message, args, tools)
            }else {
                console.log('no command')
            }
        }
    },

}


