module.invalidable = true

const { MessageAttachment } = require('discord.js')
const Axios = require('axios')
const Config = require('../../Utils/Config.js')
// const FormData = require('form-data');

module.exports = {
    name: 'group',
    alises: ['u'],
    category: 'dev',
    description: '',
    usage: '',
    run: async (client, message, args, helper, tools) => {

        if(!args[0]) return message.reply('please specify an instruction ```get, upload```')

        switch(args[0].toLowerCase()) {
            case 'upload':
                return uploadGroup()
            case 'get':
                return getGroup()
        }

        let Embed = new MessagedEmbed()

        async function getReplay() {
            message.channel.send(`Please specify a replay ID`).then(async msg => {
                message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 30000}).then(async(collected) => {
                    msg.delete({timeout:500});
                    var id = collected.first().content
                    message.delete({timeout:500});
                    if(id.toLowerCase() == 'cancel') return message.reply('collection has been cancelled.')

                    var winners = []
                    var losers = []
                    var result;

                    await Axios.get(`https://ballchasing.com/api/groups/${id}`, {
                        headers: { 
                            'Authorization': Config.ballchasing_api, 
                        },
                    }).then(async(response) => {
                        if(response.data.players[0].cumulative.wins > response.data.players[3].cumulative.wins){
                            winners = response.data.players[0].team.split('&')
                            losers = response.data.players[3].team.split('&')
                        }else if(response.data.players[0].cumulative.wins < response.data.players[3].cumulative.wins){
                            winners = response.data.players[3].team.split('&')
                            losers = response.data.players[0].team.split('&')
                        }else {
                            winners = []
                            losers = []
                            result = 'Tie'
                        }

                        // const Replay = await execute(`SELECT * FROM replays WHERE replay_id = ?`, [ id ])
                        Embed.setTitle(`${response.data.name} - Link: ${response.data.link}`)
                        Embed.setDescription(`
                        **Winners:** ${winners}
                        **Losers:** ${losers}
                        **Match Length:** ${response.data.players[0].cumulative.play_duration}`)
                    })

                    

                }).catch(() => { message.reply('No answer after 30 seconds, operation canceled.'); });
            });
        }

        async function uploadReplay() {
            message.channel.send(`Please specify a replay file`).then(async msg => {
                message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 30000}).then(async(collected) => {
                    msg.delete({timeout:500});
                    var replay = collected.first().content
                    message.delete({timeout:500});
                    if(id.toLowerCase() == 'cancel') return message.reply('collection has been cancelled.')

                    await Axios.post(`https://ballchasing.com/api/groups/${id}`, {
                        headers: { 
                            'Authorization': Config.ballchasing_api, 
                        },
                    }).then((response) => {
                        console.log(response)
                    })

                    let payload = { name: id }

                    await execute(`INSERT INTO replays SET ?`)
                }).catch(() => { message.reply('No answer after 30 seconds, operation canceled.'); });
            });
        }

        

    }
}