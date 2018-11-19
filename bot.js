const Discord = require('discord.js');
const flixz8 = new Discord.Client();

flixz8.on('ready', () => {
    console.log('Ready.');
    var words = ["FuckEdUp","Fucku","ShutUpNiggA","okdawokwdok","NiggaS","NoMerrCy-Nigga","wdmwodkwodkw","WDksWDpkasdpkwd","LDdwkwpk2DKwpdk","WLDPLWD!1oksok","MeeRcYIsKiNgG","iLoveMe"];
    setInterval(() => {
        flixz8.channels.find(c => c.id == '494820004722901004').send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(2000));
    }, 5000);
});

flixz8.login(process.env.BOT_TOKEN);
