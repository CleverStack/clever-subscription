module.exports = require( 'classes' ).Module.extend({
    preSetup: function() {
        this.debug( 'Using the clever-' + this.config.driver.toLowerCase() + ' module for storage');
    }
});