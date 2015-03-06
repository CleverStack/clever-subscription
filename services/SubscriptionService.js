module.exports = function( Promise, Service, SubscriptionModel, AccountSubscriptionModel, InvoiceService, InvoiceItemModel, AccountModel, async, moment ) {
  return Service.extend({

    model: SubscriptionModel,

    getBillableSubscriptions: function( callback ) {
      return AccountSubscriptionModel
      .findAll({
        include: [
          AccountModel,
          SubscriptionModel
        ]
      })
      .then( function( subscriptions ) {
        if ( callback ) {
          callback( null, subscriptions );
        }
        return subscriptions;
      })
      .catch( function( err ) {
        if ( callback ) {
          callback( err );
        }
        return err;
      });
    },

    billSubscription: function( subscription, callback ) {
      subscription
      .getBillingDates()
      .then( this.proxy( 'generateInvoiceItems', subscription ) )
      .then( this.proxy( 'generateInvoice', subscription ) )
      .then( function() {
        callback( null );
      })
      .catch( callback );
    },

    generateInvoiceItems: function( accSubscription, dates ) {
      var subscription = accSubscription.subscription;

      return new Promise( function( resolve, reject ) {
        if ( !!dates.length ) {
          var items       = []
            , lastDate    = null;

          dates.every( function( date ) {
            if ( date <= moment() ) {
              lastDate = date;
              items.push({
                AccountId   : accSubscription.AccountId,
                text        : subscription.billingInterval + "-" + subscription.billingFrequency + " subscription (" + subscription.name + ") to " + date,
                qty         : 1,
                price       : subscription.price
              });
              return true;
            } else {
              if ( lastDate !== null ) {
                accSubscription.lastBillingDate = lastDate;
              }
              return false;
            }
          });

          resolve( items );
        } else {
          reject( new Error( 'There is no subscription to bill' ) );
        }
      });
    },

    generateInvoice: function( subscription, items ) {
      return new Promise( function( resolve, reject ) {
        if ( !items.length ) {
          return resolve();
        }

        var queryOptions = {
          include: [ { model: InvoiceItemModel, as: 'items' } ]
        };

        InvoiceService
        .transaction( queryOptions )
        .then( function() {
          return InvoiceService
          .create({
            AccountId       : subscription.AccountId,
            AccountsSubscriptionId: subscription.id, 
            total           : subscription.price,
            items           : items
          }, queryOptions )
          .then( function() {
            return subscription.save( queryOptions );
          });
        })
        .then( function() {
          queryOptions.transaction.commit();
          resolve();
        })
        .catch( reject );
      });
    }

  });
}
