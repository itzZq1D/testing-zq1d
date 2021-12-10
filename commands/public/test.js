const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js"); 

module.exports.requirements = {
    userPerms: ["ADMINISTRATOR"],
    clientPerms: ["EMBED_LINKS"],
    ownerOnly: false
},
module.exports = {
  name: "test",
  example: "``test``",
  category: "Admins",
  aliases: ["",""],
  description: "",
  run: async (client, message, args) => {

};
