# Fake-Streamer
A Code that allows you to get the "Streaming" Discord Status WITHOUT Streaming!

----

The [index.js](https://github.com/hongduccodedao/Faker-stream/blob/main/index.js) is the main file. [server.js](https://github.com/hongduccodedao/Faker-stream/blob/main/server.js) prevents your repl from going to sleep. (If you have a replit hacker plan, then you can delete [this file](https://github.com/hongduccodedao/Faker-stream/blob/main/server.js) and paste this code inside the [index.js](https://github.com/hongduccodedao/Faker-stream/blob/main/index.js) file : 

</br>

```js
const keepAlive = require("./server")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => { 
  client.user.setActivity("Code Bao-Chan Bot!", {type: "STREAMING", url: "https://twitch.tv/hongducodedao"})
   console.log(`${client.user.username} Successfully Logged in!`)
})

keepAlive()
```

**DO NOT GIVE YOUR TOKEN TO OTHERS!**

Use [uptimerobot.com](https://uptimerobot.com) to make your repl online 24/7.

</br>

> ⭐ Feel free to Star the Repository if this helped you! ;)

----

> Fake Streamer © 2021 by SealedSaucer is licensed under Attribution 4.0 International 
