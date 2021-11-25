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

        await Axios.get('https://ballchasing.com/api/v2/groups/', {
            headers: { 
                'Authorization': Config.ballchasing_api, 
            },
        }).then((response) => {
            console.log(response)
        })

    }
}