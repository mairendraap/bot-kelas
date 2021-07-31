const { ID_CHANNEL, TAG, ID_ROLE , ID_ROLES } = require('../config13.json');

module.exports = {
    name: '13',
    description: 'Ini Coding register',
    async execute(message, args, client) {
        if(message.channel.type == "dm") return message.channel.send("Kamu tidak bisa registrasi dari DM.");
       if (message.channel.id != `${ID_CHANNEL}`) return message.channel.send(`Kamu bisa menggunakan command ini di <#${ID_CHANNEL}>`);
     

        const nickname = args.join(" ");
        const private = client.channels.cache.get(`${ID_CHANNEL}`);

        try {
            message.member.roles.add(`${ID_ROLE}`);
            message.member.roles.add(`${ID_ROLES}`);
            message.member.setNickname(`${TAG}`);
            private.send(`${message.author} _ACCEPTED_, __**${TAG}**__ Sebagai Siswi di _${message.guild.name}._`);
        } catch(error) {
            console.error(error); 
        }
    },
};  

