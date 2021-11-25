module.invalidable = true

const Helper = require('@helper')

module.exports = {
    
    x: async (client, messageReaction, user) => {

        var con = require('@database');
        const { MessageEmbed, MessageCollector } = require("discord.js");
        const moment = require("moment");

        var reactionEmoji = messageReaction.emoji;
        var channelID = messageReaction.message.channel.id;
        var messageID = messageReaction.message.id;

        if (messageReaction.message.partial) await messageReaction.message.fetch();
        if (messageReaction.partial) await messageReaction.fetch();

        if (user.bot) return;

        con.query(`SELECT * FROM reaction_roles WHERE channel_id = '${channelID}' AND message_id = '${messageID}'`, function (err, rows) {
            if (err) return console.log(`Error with reaction roles add selection`);
            if (rows && rows.length) {
                rows.forEach(function (r) {
                    if (r.emoji == reactionEmoji.name) addRole(r.role_id);
                    if (r.emoji == reactionEmoji.id) addRole(r.role_id);
                });
            }
        });

        async function addRole(roleID) {
            await messageReaction.message.guild.members.cache.get(user.id).roles.add(roleID).catch(function (e) {
            });
        }

        if(channelID == '840324006191169536'){
            const Cat = await Helper.selectData(`SELECT * FROM movienight WHERE channel_id = ? AND message_id = ?`, [ channelID, messageID ])
            // if(!Cat) return console.log('err')
            if(messageID == Cat.message_id){
                if(reactionEmoji.name == '1️⃣'){
                    await Helper.insertData(`UPDATE movienight SET action = ?`, [ Cat.action+1])
                }
                if(reactionEmoji.name == '2️⃣'){
                    await Helper.insertData(`UPDATE movienight SET comedy = ?`, [ Cat.comedy+1])
                }
                if(reactionEmoji.name == '3️⃣'){
                    await Helper.insertData(`UPDATE movienight SET family = ?`, [ Cat.family+1])
                }
                if(reactionEmoji.name == '4️⃣'){
                    await Helper.insertData(`UPDATE movienight SET horror = ?`, [ Cat.horror+1])
                }
            }else{

            }
        }

        
        //             ticketChannel.send(question_embed).then(async msg => {
        //                 const filter = (reaction, user) => ["✅", "❌"].includes(reaction.emoji.name) && user.bot !== true && reactor != messageReaction.message.author.id
        //                 const collector = msg.createReactionCollector(filter, { max: 1 });
        //                 msg.react('✅').catch(function (err) { });
        //                 msg.react('❌').catch(function (err) { });
        //                 collector.on('collect', async (reaction, user) => {
        //                     var emoji = reaction.emoji.name;
        //                     if (emoji == '✅') {
        //                         ticketChannel.messages.fetch().then(async messages => {
        //                             let finalArray = [];
        //                             const putInArray = async (data) => finalArray.push(data);
        //                             const handleTime = (timestamp) => moment(timestamp).format("DD/MM/YYYY - hh:mm:ss a").replace("pm", "PM").replace("am", "AM");
        //                             for (const message of messages.array().reverse()) {
        //                                 if (message.embeds[0]) {
        //                                     if (message.embeds[0].type == 'rich') continue;
        //                                 }
        //                                 await putInArray(`${handleTime(message.createdTimestamp)} ${message.author.username} : ${message.content}`);
        //                             }
        //                             let text = finalArray.join('\n');
        //                             ticketChannel.delete();
        //                             if (!text) return user.send(`There was no text to be saved.`);
        //                             hastebin(text, "txt").then(function (r) {
        //                                 var logs = rows[0].logs_id
        //                                 var lc = messageReaction.message.guild.channels.cache.get(logs)

        //                                 let embed = new MessageEmbed()
        //                                 .setColor(client.embedColour)
        //                                 .setTitle('**Ticket Closed**')
        //                                 .setDescription(`
        //                                 Closed By: ${user}
        //                                 Opened By: ${messageReaction.message.author.id}`)
        //                                 .setFooter(client.embedFooter).setTimestamp()

        //                                 lc.send(embed)

        //                                 return user.send(`Your saved log file is ready! ${r}`);
        //                             });
        //                         });
        //                     } else if (emoji == '❌') {
        //                         var logs = rows[0].logs_id
        //                         var lc = messageReaction.message.guild.channels.cache.get(logs)

        //                         let embed = new MessageEmbed()
        //                         .setColor(client.embedColour)
        //                         .setTitle('**Ticket Closed**')
        //                         .setDescription(`
        //                         Closed By: ${user}
        //                         Opened By: ${messageReaction.message.author.id}`)
        //                         .setFooter(client.embedFooter).setTimestamp()

        //                         lc.send(embed)

        //                         await ticketChannel.delete();
        //                     }
        //                 });
        //             });
        //         }
        //     });
        // });
    }
}