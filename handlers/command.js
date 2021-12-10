const { readdirSync } = require('fs');

module.exports = (client) => {
    const load = fldr => {
        const commands = readdirSync(`./commands/${fldr}/`).filter(file => file.endsWith('.js'));
        for (let file of commands) {
                  let pull = require(`../commands/${fldr}/${file}`);
                   client.commands.set(pull.name, pull);
                    if (pull.aliases) pull.aliases.forEach(a => client.aliases.set(a, pull.name));
          };
        };
         ['public']
           .forEach(x =>
                    load(x)
                            );
}
