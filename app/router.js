import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({

  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('contact');


  this.route('login', { path: '/users/:username' }, function() {
    this.route('ue', { path: '/users/:username/ue' });
  });



  this.route('protected');
});

export default Router;
