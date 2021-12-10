/* FOR GLITCH USERS */

/*

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
 response.sendStatus(200);
});


app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000); 

*/

const { Client, Collection } = require('discord.js');
const client = new Client({
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: true,
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});
const fs = require('fs')
const moment = require('moment');
const countdown = require("countdown"); 
const ms = require("ms");
const cd = require("countdown");  
const { Prefix, Token2, Color } = require("./config.js");

['commands', 'aliases'].forEach(collection => client[collection] = new Collection());
['command', 'event'].forEach(handler => require(`./handlers/${handler}`)(client));


client.login("");
