module.invalidable = true

const { MessageAttachment } = require('discord.js')
const Axios = require('axios')
const Config = require('../../Utils/Config.js')
const FormData = require('form-data');
const Functions = require('../../Utils/functions')

module.exports = {
    name: 'replay',
    alises: ['r'],
    category: 'dev',
    description: '',
    usage: '',
    run: async (client, message, args, helper, tools) => {

        if(args[0] == 'get'){
            return getReplay()
        }
        return

        if(!message.attachments) return message.reply('please provide a replay file')

        // Grab replay file
        message.attachments.forEach(async attachment => {
            const url = attachment.url
            const ext = url.split('.').pop()
                // const end1 = url.substring(url.indexOf('.') + 1)
                // const end2 = end1.substring(end1.indexOf('.') + 1)
                // const end = end2.substring(end2.indexOf('.') + 1)
            if (ext != 'replay') return message.reply('that is not a valid replay file!')

            var payload = {
                id: null,
                replay_url: url,
                uploaded: false
            }


            Axios.get(url, {
                responseType: 'stream',
            }).then(res => {
                console.log('getting')

                const form_data = new FormData()
                form_data.append("file", res.data)

                var config = {
                    method: 'post',
                    url: 'https://ballchasing.com/api/v2/upload?visibility=private',
                    headers: { 
                        'Authorization': Config.ballchasing_api, 
                        ...form_data.getHeaders()
                    },
                    data: form_data
                }
                

                Axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
            })
            return 
        })

        async function getReplay(){
            message.channel.send(`Please specify a replay ID`).then(async msg => {
                message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 30000}).then(async(collected) => {
                    msg.delete({timeout:500});
                    var id = collected.first().content
                    message.delete({timeout:500});
                    if(id.toLowerCase() == 'cancel') return message.reply('collection has been cancelled.')

                    var winners = []
                    var losers = []
                    var result;

                    await Axios.get(`https://ballchasing.com/api/replays/${id}`, {
                        headers: { 
                            'Authorization': Config.ballchasing_api, 
                        },
                    }).then((response) => {
                        if(response.data.status != 'ok') return message.reply('error trying to fetch replay file!')
                        
                        return Functions.getResult(response.data)
                        // return console.log(response.data.blue.players.filter((i) => i.stats.core.mvp = True))

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

                        // await execute(`SELECT * FROM replays WHERE replay_id = ?`, [ id ])
                        Embed.setTitle(`${response.data.name} - Link: ${response.data.link}`)
                        Embed.setDescription(`
                        **Winners:** ${winners}
                        **Losers:** ${losers}
                        **Match Length:** ${response.data.players[0].cumulative.play_duration}`)

                        response.data.players.forEach(async (p) => {
                            const Player = await execute(`SELECT * FROM Players WHERE username = ?`, [ p.name ])
                            
                            if(!Player[0]) return await execute(`UPDATE Players SET ${Player[0]}`, [ p.name])
                            let payload = { username: p.name, team: Team, games: Player[0].games + 1, wins: Player[0] + 1}
                            await execute(`INSERT INTO Players SET ?`, [ payload ])
                            
                        })
                        
                    })

                    

                }).catch(() => { message.reply('No answer after 30 seconds, operation canceled.'); });
            });
        }

        
    }
}