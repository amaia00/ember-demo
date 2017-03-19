import Ember from 'ember';

export default Ember.Controller.extend({
  isetudiant: Ember.computed('model',function(){
    if(this.get('model').etudiants.content.length === 0){
      return false;
    }else{
      return true;
    }
  }),

  isenseignant: Ember.computed('model',function(){
    if(this.get('model').enseignants.content.length === 0){
      return false;
    }else{
      return true;
    }
  }),

  actions: {
    saveNote(note) {
      note.save();
    }
  }
});
