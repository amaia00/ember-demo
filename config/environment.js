/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'demonstration',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyDQ7ZjOwOa-CAA_AnF2u3S6_ITDYNX1BDY",
      authDomain: "tpwebember.firebaseapp.com",
      databaseURL: "https://tpwebember.firebaseio.com",
      storageBucket: "tpwebember.appspot.com",
      messagingSenderId: "796731125915"
    },


    /* apiKey: "AIzaSyC0eD3vsGjNewpOPBxE76ImpwAs3Tw1lJ8",
     authDomain: "ember-demo-44821.firebaseapp.com",
     databaseURL: "https://ember-demo-44821.firebaseio.com",
     storageBucket: "ember-demo-44821.appspot.com",
     messagingSenderId: "164962372300"*/

    torii: {
      sessionServiceName: 'session'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
     ENV.APP.LOG_RESOLVER = true;
     ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    /* test */
  }

  return ENV;
};
