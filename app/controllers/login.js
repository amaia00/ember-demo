import Ember from 'ember';

export default Ember.Controller.extend({

  identifiant: '',
  password: '',
  isDisabled: Ember.computed.empty('identifiant') && Ember.computed.empty('password'),

  actions: {

    verifyUser() {

      const identifiant = this.get('identifiant');
      const password = this.get('password');

      var modele = this.get('model');
      var valid = true;
      for(var i =0; i<modele.content.length; i++) {
        if(modele.content[i]._data.identifiant === identifiant && modele.content[i]._data.password === password) {
          valid = true;
          break;
        }
        else {
          valid = false;

        }
      }
      console.log(valid);
      if(valid === false) {
        console.log('false1');
        this.set('responseMessage', 'Identifiant ou mot de passe incorrect! Réessayer');
        this.set('emailAddress', '');
      }



    }

  }



});

