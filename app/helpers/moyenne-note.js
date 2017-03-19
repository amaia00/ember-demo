import Ember from 'ember';

export function moyenneNote(params, {param1 ,param2 , param3}/*, hash*/) {
  return 0.25*param1 + 0.25*param2 + 0.5*param3;
}

export default Ember.Helper.helper(moyenneNote);
