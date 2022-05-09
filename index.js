var colors = require(`colors`);

module.exports = log = {
    FATAL: function(msg) { // prints FATAL text
        console.log(`[FATAL] `.toUpperCase().magenta + msg.toUpperCase().magenta);
    },
    ERROR: function(msg) { // prints ERROR text
        console.log(`[ERROR] `.toUpperCase().red + msg.toUpperCase().red);
    },
    WARN: function(msg) { // prints WARN Message
        console.log(`[WARN] `.toUpperCase().yellow + msg.toUpperCase().yellow);
    },
    INFO: function(msg) { // prints text
        console.log(msg);
    },
    DEBUG: function(msg) { // prints DEBUG text
        console.log(`[DEBUG] `.green + msg.green);
    },
    COLOUR: function(msg, colour) { // prints COLOUR text
        colors.setTheme({
            clr: colour
        });

        console.log(colors.clr(msg));
    },
    CLEAR: function() { // clears console
        console.clear();
    }
};