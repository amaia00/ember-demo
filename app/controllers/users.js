import Ember from 'ember';
import login from '../controllers/login';

export default Ember.Controller.extend({
    needs: 'login',
    appController: Ember.inject.controller('login'),
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


  /*isnoteue : Ember.computed('model',function(){
    if(this.get('model').etudiants.content[0].relationships.initializedRelationships.notes.canonicalState[0].id=
  })*/


actions:{
  logout: function() {
    this.get('appController').isAuthenticated = false;
    this.transitionToRoute("login");

  }

}


});
