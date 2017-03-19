import DS from 'ember-data';

export default DS.Model.extend({
  cc1: DS.attr('number'),
  cc2: DS.attr('number'),
  ccf: DS.attr('number'),
  moyenne: DS.attr('number'),
  etudiant: DS.belongsTo('etudiant'),
  ue: DS.belongsTo('ue')
});
