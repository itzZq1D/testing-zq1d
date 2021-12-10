const { MessageEmbed } = require("discord.js");
const PREFIX = process.env.PREFIX;
const OWNER = process.env.OWNERID;

 
module.exports = async (client, message) => {
    if(message.author.bot || message.channel.type === "dm") return; 
  		if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){

      let em = new MessageEmbed() 
       .setColor(`#6211e5`)
       .setDescription(`Hello , **${message.author.username}** !
\nIam **Partners Bot** :sparkles: .
My prefix in **${message.guild.name}** is : \`${PREFIX}\``)
   .addField(`> • Helpful Links`,`[Bot Link](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=288768&scope=bot) • [Support Server](https://discord.gg/MPUrUnCP6v) • [Website](https://soon) • [Vote Link](https://top.gg/bot/709544742718930995/vote)` )
  message.channel.send(em)
}

    if(!message.content.startsWith(PREFIX)) return; //
  
    let args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    let commandFile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
 
}
