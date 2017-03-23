import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.query('etudiant', {
      orderBy: 'identifiant'
    });
  },

  variable: {},
    firebaseApp: Ember.inject.service(),

  actions: {

    saveStudent(identifier, name, lastname, mail) {

        const auth = this.get('firebaseApp').auth();
        auth.createUserWithEmailAndPassword(identifier+'@univ-lyon1.fr', 'default-default').then((userResponse) => {
            const user = this.store.createRecord('etudiant', {
                password: 'default',
                identifiant: identifier,
                nom: lastname,
                prenom: name,
                datedenaissance: null,
                email: mail
            });
            return user.save();
        });
    },

    deleteStudent(student) {
      student.destroyRecord();
    }
  }
});
