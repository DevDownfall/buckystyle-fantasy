require('module-invalidate');
require('module-alias/register');
global.__root = __dirname;

const Discord = require('discord.js')
const Config = require('./Utils/Config.js')

const Client = new Discord.Client({
    partials: ['MESSAGE', "CHANNEL", 'REACTION'],
    restTimeOffset: -150,
    retryLimit: 10,
    http: { api: "https://discord.com/api"}
})
Client.login(Config.token)
    .then(() => {
        console.info(`[DISCORD] Logged into ${Client.user.username}`);
        require(`./Handlers/settings`)(Client)
        require(`./Handlers/command`)(Client)
        require(`./Handlers/updater`)(Client)
        require(`./Handlers/events`)(Client)
});
