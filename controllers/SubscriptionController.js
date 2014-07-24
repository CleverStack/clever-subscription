module.exports = function( Controller, SubscriptionService, PermissionController ) {
    return Controller.extend(
    /** @Class **/
    {
        service: SubscriptionService,
        autoRouting: [
            PermissionController.requiresPermission({
                all: 'Subscription.$action'
            })
        ]
    },
    /** @Prototype **/
    {

    });
}