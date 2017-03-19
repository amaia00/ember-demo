import DS from 'ember-data';
import User from './user';

export default User.extend({
  diplomepreparer: DS.attr('string'),
  ine: DS.attr('string'),
  ues: DS.hasMany('ue'),
  notes: DS.hasMany('note')
});
