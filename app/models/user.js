import DS from 'ember-data';

//noinspection JSAnnotator
export default DS.Model.extend({
  password: DS.attr('string'),
  identifiant: DS.attr('string'),
  nom: DS.attr('string'),
  prenom: DS.attr('string')
});
