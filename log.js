var colors = require(`colors`);

module.exports = log = {
    FATAL: function(msg) { // prints FATAL text
        console.log(`[FATAL] `.toUpperCase().magenta + msg.toUpperCase().magenta);
    },
    ERROR: function(msg) { // prints ERROR text
        console.log(`[ERROR] `.toUpperCase().red.dim + msg.toUpperCase().red.dim);
    },
    WARN: function(msg) { // prints WARN Message
        console.log(`[WARN] `.toUpperCase().yellow.dim + msg.toUpperCase().yellow.dim);
    },
    INFO: function(msg) { // prints text
        console.log(msg.white.dim);
    },
    DEBUG: function(msg) { // prints DEBUG text
        console.log(`[DEBUG] `.green.dim + msg.green.dim);
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
