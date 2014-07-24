module.exports = function ( Model, config ) {
    return Model.extend( 'Subscription',
    {
        type: 'ORM',
        softDeletable: true,
        timeStampable: true
    },
    {
        id: {
            type: Number,
            primaryKey: true,
            autoIncrement: true
        },
        lastBillingDate: {
            type: Date,
            allowNull: true,
            default: null
        },
        name: {
            type: String,
            validate: {
                len: [ 2, 32 ]
            }
        },
        description: {
            type: String,
            validate: {
                len: [ 10, 100 ]
            }
        },
        price: Model.Types.DECIMAL(10, 2),
        period: {
            type: String,
            validate: {
                len: [ 1, 20 ]
            }
        }
    });
};