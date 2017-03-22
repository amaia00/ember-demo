import Ember from 'ember';


export default Ember.Route.extend({

  model() {
    return this.store.query('enseignant', {
      orderBy: 'identifiant'
    });
  },


  actions: {

    saveTeacher(identifier, name, lastname, mail) {

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
