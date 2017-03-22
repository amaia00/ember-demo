import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('enseignant')
      .then(orders => orders.sortBy('identifiant'));
  },

  variable: {},

  actions: {

    saveTeacher(identifier, name, lastname, mail) {
      console.debug("Route teacher", identifier, name, lastname, mail);

      const teacher = this.store.createRecord('enseignant', {
        password: 'default',
        identifiant: identifier,
        nom: lastname,
        prenom: name,
        datedenaissance: null,
        email: mail
      });

      teacher.save();
    },

    deleteTeacher(teacher) {
      teacher.destroyRecord();
    }

  }
});
