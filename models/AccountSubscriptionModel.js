module.exports = function ( Model, Promise, config, moment ) {
  return Model.extend( 'AccountsSubscription',
  {
    type                : config[ 'clever-subscription' ].driver,
    softDeletable       : true,
    timeStampable       : true,
  },
  {
    id: {
      type            : Number,
      primaryKey      : true,
      autoIncrement   : true
    },

    lastBillingDate: {
      type            : Date,
      allowNull       : true,
      default         : null
    },

    active: {
      type            : Boolean,
      default         : false
    },

    getBillingDates: function() {
      var runningDate = this.lastBillingDate !== null ? moment( this.lastBillingDate.toISOString() ) : moment( this.createdAt.toISOString() );

      return new Promise( this.proxy( function( resolve ) {
        var dates       = []
          , dateCount   = 0;

        while( dateCount < 30 ) {
          dateCount++;
          runningDate = runningDate.add( this.subscription.billingInterval, this.subscription.billingFrequency.toLowerCase() );
          dates.push( moment( runningDate.toISOString() ) );
        }

        resolve( dates );
      }));
    }
  });
};
