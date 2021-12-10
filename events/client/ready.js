const PREFIX = process.env.PREFIX;
 
module.exports = (client) => {
    console.log(client.user.tag);
    console.log('Logged in :+1:\nName : ' + client.user.username + '\nTag : ' + client.user.tag +"\n"+ client.user.id)
    client.user.setActivity("1$help", { type: "PLAYING", url: "https://twitch.tv/zaid " });
}
