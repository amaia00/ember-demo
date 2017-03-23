import Ember from 'ember';

export function moyeneAnnee(params,{param1}/*, hash*/) {
  let moyenne = 0;

  for(let i=0 ; i < param1.content.currentState.length ; i++){

    if(param1.content.currentState[i].cc1<0 && param1.content.currentState[i].cc2<-1){
      return -1;
    }
    else if(param1.content.currentState[i].cc2===-1 && param1.content.currentState[i].cc1>=0){
      moyenne = moyenne + 0.5 * param1.content.currentState[i].cc1 + 0.5 * param1.content.currentState[i].ccf;
    }
    else{

      moyenne = moyenne + 0.25 * param1.content.currentState[i]._data.cc1 + 0.25 *
        param1.content.currentState[i].cc2 + 0.5 * param1.content.currentState[i].ccf;
    }
  }

  return moyenne/param1.content.currentState.length;
}

export default Ember.Helper.helper(moyeneAnnee);
