import Ember from 'ember';


export default Ember.Route.extend({
  beforeModel: function(){
    //console.log(this.get('session'));
    var isAuthenticated = this.controllerFor("login").get("isAuthenticated");
    var identifiant = this.controllerFor("login").get("identifiant");
    console.log(isAuthenticated);
    if(isAuthenticated){
      //this.transitionTo('application');
      this.transitionTo('/users/'+identifiant);
    }else {

    }
  }
});
