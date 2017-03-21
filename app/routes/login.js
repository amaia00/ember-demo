import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const records = [];
    let l = 0;

    this.store.findAll('enseignant').then(function(tmp){

      for(let i = 0; i < tmp.get('length'); i++, l++) {
        records[i] = [tmp.content[i]._data.identifiant, tmp.content[i]._data.password];
      }

    });

    this.store.findAll('etudiant').then(function(tmp){
      for(let i = 0; i < tmp.content.length; i++) {
        records[i + l] = [tmp.content[i]._data.identifiant, tmp.content[i]._data.password];
      }

      l += tmp.content.length;
    });

    this.store.findAll('user').then(function (tmp) {
      for (let i = 0; i < tmp.content.length; i++) {
        records[i + l] = [tmp.content[i]._data.identifiant, tmp.content[i]._data.password];
      }
    });

    return records;
  }
});
