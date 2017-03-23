import Ember from 'ember';

export default Ember.Controller.extend({
    beforeModel: function() {
        return this.get('session').fetch().catch(function() {});
    },
    actions: {
        logout: function() {
            this.get('session').close();
            this.transitionToRoute('/');
        }
    }
});
