import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log(params.username);

    return Ember.RSVP.hash({
      enseignants: this.store.query('enseignant', {
        orderBy: 'identifiant',
        equalTo: params.username
      }),
      etudiants: this.store.query('etudiant', {
        orderBy: 'identifiant',
        equalTo: params.username
      }),
      ues: this.store.findAll('ue').then(results => results.filter((ue) =>{
        return ue.get('enseignant') == params.username;
      }))
    });
  }
    /*this.store.query('enseignant', {
      orderBy: 'identifiant',
      equalTo: params.username
    }).then(function(tmp){
      if(tmp.content.length === 0){
        console.log("enseignant: not ok null from server");
        connected = undefined;
        //console.log(connected);
      }else{
        console.log("enseignant: ok not null from server");
        connected = new Array(tmp.content[0]._data);
        console.log(connected);
      }
    });
    this.store.query('etudiant', {
      orderBy: 'identifiant',
      equalTo: params.username
    }).then(function(tmp){
      if(tmp.content.length === 0){
        console.log("etudiant : not ok null from server");
        connected = undefined;
        //console.log(connected);
      }else{
        console.log("etudiant: ok not null from server");
        connected = [];
        connected ['datedenaissance']= tmp.content[0]._data.datedenaissance;
        connected ['prenom'] = tmp.content[0]._data.prenom ;
        connected ['password'] = tmp.content[0]._data.password ;
        connected ['nom'] =  tmp.content[0]._data.nom ;
        connected ['ine'] = tmp.content[0]._data.ine ;
        connected ['identifiant'] = tmp.content[0]._data.identifiant;
        connected ['email'] =tmp.content[0]._data.email;
        connected ['diplomepreparer'] =tmp.content[0]._data.diplomepreparer;
        console.log(connected);
      }
    });
    return connected;

  },*/

  /*// default behaviour
  setupController: function(controller, model) {
    controller.set('enseignants', model.enseignants);
    controller.set('etudiants', model.etudiants);

  }*/
});
