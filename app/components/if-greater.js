import Ember from 'ember';

export default Ember.Component.extend({
  isGreater: function() {
    return this.get('param1') >= this.get('param2');
  }.property('param1', 'param2')
});
