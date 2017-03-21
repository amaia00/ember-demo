import Ember from 'ember';

export default Ember.Controller.extend({

  isetudiant: Ember.computed('model',function() {
    return this.get('model').etudiants.content.length !== 0;
  }),

  isenseignant: Ember.computed('model',function() {
    return this.get('model').enseignants.content.length !== 0;
  }),

  actions: {
    saveNote(note) {
      note.save();
    }
  }
});
