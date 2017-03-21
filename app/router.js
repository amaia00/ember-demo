import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('contact');

  this.route('users', { path: '/users/:username' }, function() {
    this.route('ue', { path: '/users/:username/ue' });
  });

  this.route('manage', function () {
    this.route('etudiant', function () {
      this.route('etudiant');
    });
    this.route('enseignant', function () {
      this.route('enseignant');
    });
  });
});

export default Router;
