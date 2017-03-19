import Ember from 'ember';

export function moyeneAnnee(params,{param1}/*, hash*/) {
  var moyenne=0;
  console.log("param1=");

  console.log(param1.content.currentState.length);
  console.log("Params"+params);
  for(var i=0 ; i<param1.content.currentState.length ; i++){
    console.log("moyenne=");
    console.log(param1.content);
    console.log(param1.content.canonicalState[i]._data.cc1);
    console.log("------------------------------------------");

    console.log(param1.content.currentState[i]._data.ccf);
    console.log(param1.content.currentState[i]._data.moyenne);
    if(param1.content.currentState[i].cc1<0 && param1.content.currentState[i].cc2<-1){
      return -1;
    }
    else if(param1.content.currentState[i].cc2===-1 && param1.content.currentState[i].cc1>=0){
      moyenne=moyenne+0.5*param1.content.currentState[i].cc1+0.5*param1.content.currentState[i].ccf;
    }
    else{

      moyenne=moyenne+0.25*param1.content.currentState[i]._data.cc1+0.25*param1.content.currentState[i].cc2+0.5*param1.content.currentState[i].ccf;
    }

    //console.log(param1.content.currentState[i]);
    console.log("moyenne=");
    console.log(param1.content);
    console.log(param1.content.canonicalState[i]._data.cc1);
    console.log("------------------------------------------");

    console.log(param1.content.currentState[i]._data.ccf);
    console.log(param1.content.currentState[i]._data.moyenne);
  }
  console.log("------------------------------------------");

  //console.log(" note"+param1.content.canonicalState[3]._data);
  return moyenne/param1.content.currentState.length;
}

export default Ember.Helper.helper(moyeneAnnee);
