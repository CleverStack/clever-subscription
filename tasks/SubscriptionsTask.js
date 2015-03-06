var injector            = require( 'injector' )
  , async               = require( 'async' )
  , Task                = require( 'classes' ).Task;
 
module.exports = Task.extend(
{
    init: function( payload, callback ) {
        var Service = injector.getInstance( 'SubscriptionService' );

        async.waterfall(
            [
                Service.callback( 'getBillableSubscriptions' ),
                this.proxy( 'process', Service )
            ],
            this.proxy( 'complete', payload, callback )
        );
    },

    process: function( Service, subscriptions, callback ) {
        async.forEach(
            subscriptions,
            Service.callback( 'billSubscription' ),
            callback
        );
    },

    complete: function( payload, callback, err ) {
        callback( err === null || err === undefined ? null : err );
    }
});