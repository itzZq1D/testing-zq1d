const { readdirSync } = require('fs');

module.exports = (client) => {
    const load = fff => {    
        const events = readdirSync(`./events/${fff}/`).filter(file => file.endsWith('.js'));
         for (let file of events) {
                  const evt = require(`../events/${fff}/${file}`);
                   let eName = file.split('.')[0];
                    client.on(eName, evt.bind(null, client));
          };
        };
        ['client', 'guild']
          .forEach(x => 
                   load(x)
                            );
}
