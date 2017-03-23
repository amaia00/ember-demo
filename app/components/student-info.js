import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNote(item) {
      this.sendAction('saveNote', item);
    }
  }
});
