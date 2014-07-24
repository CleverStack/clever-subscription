module.exports = function ( Service, SubscriptionModel ) {
    return Service.extend({
        model: SubscriptionModel
    });
}