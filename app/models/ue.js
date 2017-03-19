import DS from 'ember-data';

export default DS.Model.extend({
  nom: DS.attr('string'),
  datedouverture: DS.attr('date'),
  datedefermeture: DS.attr('date'),
  etudiants: DS.hasMany('etudiant'),
  enseignant: DS.belongsTo('enseignant'),
  notes: DS.hasMany('note')
});
