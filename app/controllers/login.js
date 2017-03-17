import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: true,
  identifiant: '',
  password: '',
  isDisabled: Ember.computed.empty('identifiant') && Ember.computed.empty('password'),

  actions: {

    verifyUser() {
      this.set('responseMessage', `identifiant ou mot de passe incorrect`);
      this.set('identifiant', '');
      this.set('password', '');
    }
  }



});

