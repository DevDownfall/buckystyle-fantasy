module.invalidable = true

const { MessageAttachment, MessageEmbed } = require('discord.js')
const Axios = require('axios')
const Config = require('../../Utils/Config.js')
const FormData = require('form-data');
const Functions = require('../../Utils/functions.js')
const { execute } = require('../../Utils/database/mysql.ts')

module.exports = {
    name: 'replay',
    alises: ['r'],
    category: 'dev',
    description: '',
    usage: '',
    run: async (client, message, args, helper, tools) => {

        if(!args[0]) return message.reply('please provide a replay')

        if(args[0] == 'get'){
            return getReplay()
        }else if(args[0] == 'upload'){
            return uploadReplay(message.attachments)
        }
        return

        async function uploadReplay(obj){
            // Grab replay file
            obj.forEach(async attachment => {
                const url = attachment.url
                const ext = url.split('.').pop()

                if (ext != 'replay') return message.reply('that is not a valid replay file!')

                var payload = { id: null,replay_url: url,uploaded: false}

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
                    message.channel.send('Replay uploaded Succesfully')
                    Axios(config)
                    .then(async function (data) {
                        console.log(data)
                        if(data.status_code == 409) {
                        return message.reply('duplicate replay file!')
                        }else if(data.status_code == 201){
                            await Axios.get(`https://ballchasing.com/api/replays/${data.data.id}`, {
                            headers: { 
                                'Authorization': Config.ballchasing_api, 
                            },
                        }).then(async (response) => {
                            return message.channel.send('Replay got Succesfully')
                            if(response.data.status != 'ok') return message.reply('error trying to fetch replay file!')
                            
                            const Result = Functions.getResult(response.data)
                            let Embed = new MessageEmbed()
                            .setTitle(`${response.data.name} - Link: ${response.data.link}`)
                            .setDescription(`Match ID - ${response.data.rocket_league_id}
                            **Winners:** ${Result.winner}
                            **Losers:** ${Result.loser}
                            **Match Length:** `)
                            
                            Result.players.forEach(async (p) => {
                                console.log('3')
                                const Player = await execute(`SELECT * FROM Players WHERE username = ?`, [ p.player.name ])
                                const Wins = Result.players.filter((i) => i.name == p.player.name)
                                if(p.player.mvp == p.player.name) var MVP = true
                                if(Player[0]) {
                                    let payload2 = { username: p.player.name, games: Player[0].games+1, wins: Wins ? Player[0].wins+1 : 0, losses: Wins ? 0 : Player[0].wins-1, win_percentage: 0.00, shots: Player[0].shots+p.player.stats.core.shots, goals: Player[0].shots+p.player.stats.core.goals, saves: Player[0].shots+p.player.stats.core.saves, assists: Player[0].shots+p.player.stats.core.assists, mvps: MVP ? Player[0].shots+1 : 0, shooting_percentage: p.player.stats.core.shooting_percentage, demos: p.player.stats.demo.inflicted + Player[0], demos_taken: p.player.stats.demo.taken + Player[0]}
                                    return await execute(`UPDATE Players SET ? WHERE username = ?`, [ payload2, p.player.name ])
                                }
                                console.log('4')
                                let payload = { username: p.player.name, games: 1, wins: Wins ? 1 : 0, losses: Wins ? 0: 1, win_percentage: Wins ? 1 : 0.00, shots: p.player.stats.core.shots, goals: p.player.stats.core.goals, saves: p.player.stats.core.saves, assists: p.player.stats.core.assists, mvps: MVP ? 1 : 0, shooting_percentage: p.player.stats.core.shooting_percentage, demos: p.player.stats.demo.inflicted, demos_taken: p.player.stats.demo.taken}
                                await execute(`INSERT INTO Players SET ?`, [ payload ])
                            })
                            return message.reply(Embed)
                        })
                            message.channel.send('Replay process completed Succesfully')
                        }else {
                            return message.reply('an error occured uploading the replay file!')
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                })
                return 
            })
            
        }
        

        async function getReplay(){
            message.channel.send(`Please specify a replay ID`).then(async msg => {
                message.channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 30000}).then(async(collected) => {
                    msg.delete({timeout:500});
                    var id = collected.first().content
                    message.delete({timeout:500});
                    if(id.toLowerCase() == 'cancel') return message.reply('collection has been cancelled.')

                    await Axios.get(`https://ballchasing.com/api/replays/${id}`, {
                        headers: { 
                            'Authorization': Config.ballchasing_api, 
                        },
                    }).then(async (response) => {
                        if(response.data.status != 'ok') return message.reply('error trying to fetch replay file!')
                        
                        const Result = Functions.getResult(response.data)
                        let Embed = new MessageEmbed()
                        .setTitle(`${response.data.name} - Link: ${response.data.link}`)
                        .setDescription(`Match ID - ${response.data.rocket_league_id}
                        **Winners:** ${Result.winner}
                        **Losers:** ${Result.loser}
                        **Match Length:** `)
                        
                        Result.players.forEach(async (p) => {
                            console.log('3')
                            const Player = await execute(`SELECT * FROM Players WHERE username = ?`, [ p.player.name ])
                            const Wins = Result.winners.filter((i) => i.name == p.player.name)
                            if(p.player.mvp == p.player.name) var MVP = true
                            if(Player[0]) {
                                let payload2 = { username: p.player.name, games: Player[0].games+1, wins: Wins ? Player[0].wins+1 : 0, losses: Wins ? 0 : Player[0].wins - 1, win_percentage: 0.00, shots: Player[0].shots+p.player.stats.core.shots, goals: Player[0].shots+p.player.stats.core.goals, saves: Player[0].shots+p.player.stats.core.saves, assists: Player[0].shots+p.player.stats.core.assists, mvps: MVP ? Player[0].shots+1 : 0, shooting_percentage: p.player.stats.core.shooting_percentage, demos: p.player.stats.demo.inflicted + Player[0].demos, demos_taken: p.player.stats.demo.taken + Player[0].demos_taken}
                                return await execute(`UPDATE Players SET ? WHERE username = ?`, [ payload2, p.player.name ])
                            }
                            console.log('4')
                            let payload = { username: p.player.name, games: 1, wins: Wins ? 1 : 0, losses: Wins ? 0: 1, win_percentage: Wins ? 1 : 0.00, shots: p.player.stats.core.shots, goals: p.player.stats.core.goals, saves: p.player.stats.core.saves, assists: p.player.stats.core.assists, mvps: MVP ? 1 : 0, shooting_percentage: p.player.stats.core.shooting_percentage, demos: p.player.stats.demo.inflicted, demos_taken: p.player.stats.demo.taken}
                            await execute(`INSERT INTO Players SET ?`, [ payload ])
                        })
                        return message.reply(Embed)
                    })
                }).catch(() => { message.reply('No answer after 30 seconds, operation canceled.'); });
            });
        }
        
    }
}