const keepAlive = require("./server")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

const activities = [
{ name: 'hongduccodedao.cf', type: 'STREAMING' }
];

client.on('ready', () => { 
//   client.user.setActivity("Code Bao-Chan Bot!", {type: "STREAMING", url: "https://twitch.tv/hongducodedao"})
   console.log(`${client.user.username} Successfully Logged in!`)
  
  client.user.setPresence({ type:'STREAMING', activity: activities[0]});
    let activity = 1;
    setInterval(() => {
        activities[2] = { name: `${message.client.guilds.cache.size} Kênh`, type: 'STREAMING' };
        activities[3] = { name: `Code Bao-Chan Bot`, type: 'STREAMING', url: "https://twitch.tv/hongducodedao"};
        if (activity > 3) activity = 0;
        client.user.setActivity(activities[activity]);
        activity++;
    }, 5000);
})

keepAlive()
client.login(TOKEN);
