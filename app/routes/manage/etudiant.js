import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.query('etudiant', {
      orderBy: 'identifiant'
    });
  },

  variable: {},


  actions: {

    saveStudent(identifier, name, lastname, mail) {

      const student = this.store.createRecord('etudiant', {
        password: 'default',
        identifiant: identifier,
        nom: lastname,
        prenom: name,
        datedenaissance: null,
        email: mail
      });

      student.save();

    },

    deleteStudent(student) {
      student.destroyRecord();
    }
  }
});
