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

        getAction: function() {
            if ( this.req.query.AccountId !== undefined && this.req.query.AccountId != this.req.user.account.id ) {
                return this.handleServiceMessage({ statuscode: 400, message: this.Class.service.model._name + " doesn't exist." })
            }
            this.req.query.AccountId = this.req.user.account.id;
            this._super.apply( this, arguments );
        },

        postAction: function() {
            this.req.body.AccountId = this.req.user.account.id;
            this._super.apply( this, arguments );
        },

        putAction: function() {
            if ( this.req.query.AccountId !== undefined && this.req.query.AccountId != this.req.user.account.id ) {
                return this.handleServiceMessage({ statuscode: 400, message: this.Class.service.model._name + " doesn't exist." })
            }
            this.req.query.AccountId = this.req.user.account.id;
            this._super.apply( this, arguments );
        },

        deleteAction: function() {
            if ( this.req.query.AccountId !== undefined && this.req.query.AccountId != this.req.user.account.id ) {
                return this.handleServiceMessage({ statuscode: 400, message: this.Class.service.model._name + " doesn't exist." })
            }
            this.req.query.AccountId = this.req.user.account.id;
            this._super.apply( this, arguments );
        }
    });
}