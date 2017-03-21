import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {

    return Ember.RSVP.hash({
      enseignants: this.store.query('enseignant', {
        orderBy: 'identifiant',
        equalTo: params.username
      }),

      etudiants: this.store.query('etudiant', {
        orderBy: 'identifiant',
        equalTo: params.username
      }),

      admin: this.store.query('user', {
        equalTo: params.username
      }),

      ues: this.store.findAll('ue').then(results => results.filter((ue) =>{
        return ue.get('enseignant') === params.username;
      }))
    });
  }
});
