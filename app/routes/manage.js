import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    return Ember.RSVP.hash({

      admin: this.store.query('user', {
        equalTo: params.username
      })
    });
  }
});
