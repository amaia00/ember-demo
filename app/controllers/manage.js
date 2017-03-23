import Ember from 'ember';

export default Ember.Controller.extend({

  isAdmin: Ember.computed('model',function(){

    return this.get('model').admin.content.length !== 0;
  }),
});
