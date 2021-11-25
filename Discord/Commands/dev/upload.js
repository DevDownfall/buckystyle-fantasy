module.invalidable = true

const { MessageAttachment } = require('discord.js')
const Axios = require('axios')
const Config = require('../../Utils/Config.js')
const FormData = require('form-data');

module.exports = {
    name: 'upload',
    alises: ['u'],
    category: 'dev',
    description: '',
    usage: '',
    run: async (client, message, args, helper, tools) => {
        //if(!args[0]) return message.channel.send('Please provide a replay file')

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
                const testData = res.data

                const form_data = new FormData()
                form_data.append("file", testData)

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
    }
}