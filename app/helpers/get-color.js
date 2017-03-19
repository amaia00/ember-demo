import Ember from 'ember';

export function getColor(params/*, hash*/) {
  if(params<8){
    return "#F44";
  }
  else if(params>=8 && params<10){
    return '#FAA';
  }
  else if(params>=10 && params <11) {
    return '#fff';
  }
  else if (params >= 11 && params < 13) {
    return '#8F8';
  }
  else {
    return '#0F0';
  }
}

export default Ember.Helper.helper(getColor);
