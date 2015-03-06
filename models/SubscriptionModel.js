module.exports = function ( Model, Promise, moment, config ) {
  return Model.extend( 'Subscription',
  {
    type                : config[ 'clever-subscription' ].driver,
    softDeletable       : true,
    timeStampable       : true
  },
  {
    id: {
      type            : Number,
      primaryKey      : true,
      autoIncrement   : true
    },
    name: {
      type            : String,
      validate: {
        len         : [ 2, 32 ]
      }
    },
    description: {
      type            : String,
      validate: {
        len         : [ 2, 255 ]
      }
    },
    billingInterval: {
      type            : Number,
      allowNull       : true,
      default         : null,
      validate: {
        min: 1,
        max: 30
      }
    },
    billingFrequency: {
      type            : String,
      allowNull       : true,
      default         : null,
      validate: {
        in: [ 'Days', 'Weeks', 'Months', 'Years' ]
      }
    },
    isTrial: {
      type            : Boolean,
      default         : false
    },
    price               : Model.Types.DECIMAL( 10, 2 ),
    active: {
      type            : Boolean,
      default         : true
    }
  });
};
