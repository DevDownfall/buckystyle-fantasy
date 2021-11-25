module.invalidable = true

const Helper = require('@database')

module.exports = {

    x: async (client, messageReaction, user) => {

        var con = require('@database');

        var reactionEmoji = messageReaction.emoji;
        var channelID = messageReaction.message.channel.id;
        var messageID = messageReaction.message.id;

        if(messageReaction.message.partial) await messageReaction.message.fetch();
        if(messageReaction.partial) await messageReaction.fetch();

        if (user.bot) return;

        con.query(`SELECT * FROM reaction_roles WHERE channel_id = '${channelID}' AND message_id = '${messageID}'`, function(err, rows){
            if(err) return console.log(`Error with reaction roles remove selection`);
            if(rows && rows.length){
                rows.forEach(function(r){
                    try {
                        if(r.emoji == reactionEmoji.name) removeRole(r.role_id);
                        if(r.emoji == reactionEmoji.id) removeRole(r.role_id);
                    } catch(e) {
                        
                    }
                });
            }
        });

        async function removeRole(roleID){
            try { 
                await messageReaction.message.guild.members.cache.get(user.id).roles.remove(roleID).catch(function(e){
                    //err;
                });
            }catch(e){

            }
        }

        if(channelID == '840324006191169536'){
            const Cat = await Helper.selectData(`SELECT * FROM movienight WHERE channel_id = ? AND message_id = ?`, [ channelID, messageID ])
            // if(!Cat) return console.log('err')
            if(messageID == Cat.message_id){
                if(reactionEmoji.name == '1️⃣'){
                    await Helper.insertData(`UPDATE movienight SET action = ?`, [ Cat.action-1])
                }
                if(reactionEmoji.name == '2️⃣'){
                    await Helper.insertData(`UPDATE movienight SET comedy = ?`, [ Cat.comedy-1])
                }
                if(reactionEmoji.name == '3️⃣'){
                    await Helper.insertData(`UPDATE movienight SET family = ?`, [ Cat.family-1])
                }
                if(reactionEmoji.name == '4️⃣'){
                    await Helper.insertData(`UPDATE movienight SET horror = ?`, [ Cat.horror-1])
                }
            }else{

            }
        }
    }
}