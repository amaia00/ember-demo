import DS from 'ember-data';

//noinspection JSAnnotator
export default DS.Model.extend({
  //id: DS.attr('number'),
  password: DS.attr('string'),
  identifiant: DS.attr('string'),
  nom: DS.attr('string'),
  prenom: DS.attr('string'),
  datedenaissance: DS.attr('date'),
  email: DS.attr('string')
});
