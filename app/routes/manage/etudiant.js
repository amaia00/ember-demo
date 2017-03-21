import Ember from 'ember';

export default Ember.Route.extend({
  lastname:'',

  model() {
    return this.store.findAll('etudiant');
  },

  variable: {},


  actions: {

    saveStudent(){
      console.log('BLUUUU', this.get('lastname'))
    },

    deleteStudent(student) {
      console.debug("DELETE STUDENT ACTION");
      student.destroyRecord();
    }
  }
});
