import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //var tmp = this.store.findAll('enseignant')
    //console.log(tmp);
    var records=[];
    var l =0;

    this.store.findAll('enseignant').then(function(tmp){
     // console.log(tmp.content[0]._data.identifiant);

      for(var i =0; i<tmp.get('length'); i++) {
        records[i]=new Array(tmp.content[i]._data.identifiant,tmp.content[i]._data.password);
        l++;
      }
    });
    this.store.findAll('etudiant').then(function(tmp1){
      //console.log(tmp1.content[0]._data.identifiant);
      for(var j =0; j<tmp1.content.length; j++) {
        records[j+l]=new Array(tmp1.content[j]._data.identifiant,tmp1.content[j]._data.password);
      }
    });
    //console.log(records);
    return records;
    //
    //return records;
  }
});
