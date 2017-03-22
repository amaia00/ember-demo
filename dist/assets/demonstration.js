"use strict";



define('demonstration/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({});
});
define('demonstration/app', ['exports', 'ember', 'demonstration/resolver', 'ember-load-initializers', 'demonstration/config/environment'], function (exports, _ember, _demonstrationResolver, _emberLoadInitializers, _demonstrationConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _demonstrationConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _demonstrationConfigEnvironment['default'].podModulePrefix,
    Resolver: _demonstrationResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _demonstrationConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('demonstration/components/admin-layout', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('demonstration/components/form-user-add', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('demonstration/components/if-equal', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    isEqual: (function () {
      return this.get('param1') === this.get('param2');
    }).property('param1', 'param2')

  });
});
define('demonstration/components/if-greater', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    isGreater: (function () {
      return this.get('param1') >= this.get('param2');
    }).property('param1', 'param2')
  });
});
define('demonstration/components/student-average', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('demonstration/components/student-info', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('demonstration/components/student-note', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('demonstration/components/user-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('demonstration/components/user-profile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('demonstration/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('demonstration/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('demonstration/controllers/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    identifiant: '',
    password: '',
    isDisabled: _ember['default'].computed.empty('identifiant') && _ember['default'].computed.empty('password'),

    actions: {

      verifyUser: function verifyUser() {
        /**
         * TODO a effacer
         */

        /*
         const recordAdmin = this.store.createRecord('user',{
         password: 'admin',
         identifiant: 'admin',
         nom: 'Administrator',
         prenom: ' ',
         datedenaissance: null,
         email: 'admin@univ-lyon1.fr'
          } );
          recordAdmin.save();
          var recordetu1 = this.store.createRecord('etudiant',{
         password: 'etu1',
         identifiant: 'etu1',
         nom: 'etu1',
         prenom: 'etu1',
         datedenaissance: Date(),
         email: 'etu1@etu.com'
          } );
          var recordetu2 = this.store.createRecord('etudiant',{
         password: 'etu2',
         identifiant: 'etu2',
         nom: 'etu2',
         prenom: 'etu2',
         datedenaissance: Date(),
         email: 'etu2@etu.com'
          } );
          var recordens1 = this.store.createRecord('enseignant',{
         password: 'ens1',
         identifiant: 'ens1',
         nom: 'ens1',
         prenom: 'ens1',
         datedenaissance: Date(),
         email: 'ens1@ens.com'
          } );
         var recordens2 = this.store.createRecord('enseignant',{
         password: 'ens2',
         identifiant: 'ens2',
         nom: 'ens2',
         prenom: 'ens2',
         datedenaissance: Date(),
         email: 'ens2@ens.com'
          } );
         var recordue1 = this.store.createRecord('ue',{
         nom:'xx1',
         datedouverture: '20/12/2016',
         datedefermeture: '20/12/2017'
          });
         var recordue2 = this.store.createRecord('ue',{
         nom:'xx2',
         datedouverture: '20/12/2016',
         datedefermeture: '20/12/2017'
          });
         var recordue3 = this.store.createRecord('ue',{
         nom:'xx3',
         datedouverture: '20/12/2016',
         datedefermeture: '20/12/2017'
         });
         var recordue4 = this.store.createRecord('ue',{
         nom:'xx4',
         datedouverture: '20/12/2016',
         datedefermeture: '20/12/2017'
         });
         var recordue5 = this.store.createRecord('ue',{
         nom:'xx5',
         datedouverture: '20/12/2016',
         datedefermeture: '20/12/2017'
          });
         var recordnote1 = this.store.createRecord('note',{
         cc1: -1,
         cc2: -1,
         ccf: -1
         });
         var recordnote2 = this.store.createRecord('note',{
         cc1: -1,
         cc2: -1,
         ccf: -2
         });
         var recordnote3 = this.store.createRecord('note',{
         cc1: -1,
         cc2: -1,
         ccf: -3
         });
         var recordnote4 = this.store.createRecord('note',{
         cc1: -1,
         cc2: -1,
         ccf: -4
         });
         var recordnote5 = this.store.createRecord('note',{
         cc1: -1,
         cc2: -1,
         ccf: -5
         });
         var recordnote6 = this.store.createRecord('note',{
         cc1: -1,
         cc2: -1,
         ccf: -6
         });
         var recordnote7 = this.store.createRecord('note',{
         cc1: -1,
         cc2: -1,
         ccf: -7
         });
         recordens1.get('ues').pushObject(recordue1);
         recordens1.get('ues').pushObject(recordue2);
         recordens1.get('ues').pushObject(recordue5);
          recordens2.get('ues').pushObject(recordue3);
         recordens2.get('ues').pushObject(recordue4);
          recordetu1.get('ues').pushObject(recordue1);
         recordetu1.get('ues').pushObject(recordue2);
         recordetu1.get('ues').pushObject(recordue5);
         recordetu1.get('ues').pushObject(recordue4);
          recordetu2.get('ues').pushObject(recordue1);
         recordetu2.get('ues').pushObject(recordue3);
         recordetu2.get('ues').pushObject(recordue5);
           recordue1.get('notes').pushObject(recordnote1);
         recordetu1.get('notes').pushObject(recordnote1);
          recordue2.get('notes').pushObject(recordnote2);
         recordetu1.get('notes').pushObject(recordnote2);
          recordue5.get('notes').pushObject(recordnote3);
         recordetu1.get('notes').pushObject(recordnote3);
          recordue4.get('notes').pushObject(recordnote4);
         recordetu1.get('notes').pushObject(recordnote4);
          recordue1.get('notes').pushObject(recordnote5);
         recordetu2.get('notes').pushObject(recordnote5);
          recordue3.get('notes').pushObject(recordnote6);
         recordetu2.get('notes').pushObject(recordnote6);
          recordue5.get('notes').pushObject(recordnote7);
         recordetu2.get('notes').pushObject(recordnote7);
           recordnote1.save();
         recordnote2.save();
         recordnote3.save();
         recordnote4.save();
         recordnote5.save();
         recordnote6.save();
         recordnote7.save();
           recordue1.save();
         recordue2.save();
         recordue3.save();
         recordue4.save();
         recordue5.save();
          recordens1.save();
         recordens2.save();
          recordetu1.save();
         recordetu2.save();
          */

        var identifier = this.get('identifiant');
        var password = this.get('password');

        var model = this.get('model');
        var valid = false;

        console.debug("MODEL", model);

        for (var i = 0; i < model.length; i++) {
          if (model[i][0] === identifier && model[i][1] === password) {
            valid = true;
            break;
          } else {
            valid = false;
          }
        }

        if (valid === false) {

          this.set('responseMessage', 'mot de passe inccorect');
          this.set('emailAddress', '');
        } else {

          if (identifier === 'admin') {
            this.transitionToRoute('/manage', { queryParams: { id: identifier } });
          } else {
            this.set('responseMessage', 'Bienvenue !! Vous allez être rediriger dans quelque instant!!');
            this.transitionToRoute('/users/' + identifier);
          }
        }
      }
    }
  });
});
define('demonstration/controllers/manage', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    isAdmin: _ember['default'].computed('model', function () {
      return this.get('model').admin.content.length !== 0;
    })
  });
});
define('demonstration/controllers/users', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    isetudiant: _ember['default'].computed('model', function () {
      return this.get('model').etudiants.content.length !== 0;
    }),

    isenseignant: _ember['default'].computed('model', function () {
      return this.get('model').enseignants.content.length !== 0;
    }),

    actions: {
      saveNote: function saveNote(note) {
        note.save();
      }
    }
  });
});
define('demonstration/helpers/app-version', ['exports', 'ember', 'demonstration/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _demonstrationConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _demonstrationConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('demonstration/helpers/get-color', ['exports', 'ember'], function (exports, _ember) {
  exports.getColor = getColor;

  function getColor(params /*, hash*/) {
    if (params < 8) {
      return "#F44";
    } else if (params >= 8 && params < 10) {
      return '#FAA';
    } else if (params >= 10 && params < 11) {
      return '#fff';
    } else if (params >= 11 && params < 13) {
      return '#8F8';
    } else {
      return '#0F0';
    }
  }

  exports['default'] = _ember['default'].Helper.helper(getColor);
});
define("demonstration/helpers/moyene-annee", ["exports", "ember"], function (exports, _ember) {
  exports.moyeneAnnee = moyeneAnnee;

  function moyeneAnnee(params, _ref /*, hash*/) {
    var param1 = _ref.param1;

    var moyenne = 0;
    console.log("param1=");

    console.log(param1.content.currentState.length);
    console.log("Params" + params);
    for (var i = 0; i < param1.content.currentState.length; i++) {
      console.log("moyenne=");
      console.log(param1.content);
      console.log(param1.content.canonicalState[i]._data.cc1);
      console.log("------------------------------------------");

      console.log(param1.content.currentState[i]._data.ccf);
      console.log(param1.content.currentState[i]._data.moyenne);
      if (param1.content.currentState[i].cc1 < 0 && param1.content.currentState[i].cc2 < -1) {
        return -1;
      } else if (param1.content.currentState[i].cc2 === -1 && param1.content.currentState[i].cc1 >= 0) {
        moyenne = moyenne + 0.5 * param1.content.currentState[i].cc1 + 0.5 * param1.content.currentState[i].ccf;
      } else {

        moyenne = moyenne + 0.25 * param1.content.currentState[i]._data.cc1 + 0.25 * param1.content.currentState[i].cc2 + 0.5 * param1.content.currentState[i].ccf;
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
    return moyenne / param1.content.currentState.length;
  }

  exports["default"] = _ember["default"].Helper.helper(moyeneAnnee);
});
define('demonstration/helpers/moyenne-note', ['exports', 'ember'], function (exports, _ember) {
  exports.moyenneNote = moyenneNote;

  function moyenneNote(params, _ref /*, hash*/) {
    var param1 = _ref.param1;
    var param2 = _ref.param2;
    var param3 = _ref.param3;

    return 0.25 * param1 + 0.25 * param2 + 0.5 * param3;
  }

  exports['default'] = _ember['default'].Helper.helper(moyenneNote);
});
define('demonstration/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('demonstration/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('demonstration/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'demonstration/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _demonstrationConfigEnvironment) {
  var _config$APP = _demonstrationConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('demonstration/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('demonstration/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('demonstration/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('demonstration/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('demonstration/initializers/export-application-global', ['exports', 'ember', 'demonstration/config/environment'], function (exports, _ember, _demonstrationConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_demonstrationConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _demonstrationConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_demonstrationConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('demonstration/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('demonstration/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('demonstration/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("demonstration/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('demonstration/models/enseignant', ['exports', 'ember-data', 'demonstration/models/user'], function (exports, _emberData, _demonstrationModelsUser) {
  exports['default'] = _demonstrationModelsUser['default'].extend({

    ues: _emberData['default'].hasMany('ue')
  });
});
define('demonstration/models/etudiant', ['exports', 'ember-data', 'demonstration/models/user'], function (exports, _emberData, _demonstrationModelsUser) {
  exports['default'] = _demonstrationModelsUser['default'].extend({
    diplomepreparer: _emberData['default'].attr('string'),
    ine: _emberData['default'].attr('string'),
    ues: _emberData['default'].hasMany('ue'),
    notes: _emberData['default'].hasMany('note')
  });
});
define('demonstration/models/note', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    cc1: _emberData['default'].attr('number'),
    cc2: _emberData['default'].attr('number'),
    ccf: _emberData['default'].attr('number'),
    moyenne: _emberData['default'].attr('number'),
    etudiant: _emberData['default'].belongsTo('etudiant'),
    ue: _emberData['default'].belongsTo('ue')
  });
});
define('demonstration/models/ue', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    nom: _emberData['default'].attr('string'),
    datedouverture: _emberData['default'].attr('date'),
    datedefermeture: _emberData['default'].attr('date'),
    etudiants: _emberData['default'].hasMany('etudiant'),
    enseignant: _emberData['default'].belongsTo('enseignant'),
    notes: _emberData['default'].hasMany('note')
  });
});
define('demonstration/models/user', ['exports', 'ember-data'], function (exports, _emberData) {

  //noinspection JSAnnotator
  exports['default'] = _emberData['default'].Model.extend({
    password: _emberData['default'].attr('string'),
    identifiant: _emberData['default'].attr('string'),
    nom: _emberData['default'].attr('string'),
    prenom: _emberData['default'].attr('string'),
    datedenaissance: _emberData['default'].attr('date'),
    email: _emberData['default'].attr('string')
  });
});
define('demonstration/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('demonstration/router', ['exports', 'ember', 'demonstration/config/environment'], function (exports, _ember, _demonstrationConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _demonstrationConfigEnvironment['default'].locationType,
    rootURL: _demonstrationConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('login');
    this.route('contact');

    this.route('users', { path: '/users/:username' }, function () {
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

  exports['default'] = Router;
});
define('demonstration/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('demonstration/routes/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var records = [];
      var l = 0;

      this.store.findAll('enseignant').then(function (tmp) {

        for (var i = 0; i < tmp.get('length'); i++, l++) {
          records[i] = [tmp.content[i]._data.identifiant, tmp.content[i]._data.password];
        }
      });

      this.store.findAll('etudiant').then(function (tmp) {
        for (var i = 0; i < tmp.content.length; i++) {
          records[i + l] = [tmp.content[i]._data.identifiant, tmp.content[i]._data.password];
        }

        l += tmp.content.length;
      });

      this.store.findAll('user').then(function (tmp) {
        for (var i = 0; i < tmp.content.length; i++) {
          records[i + l] = [tmp.content[i]._data.identifiant, tmp.content[i]._data.password];
        }
      });

      return records;
    }
  });
});
define('demonstration/routes/manage', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {

      return _ember['default'].RSVP.hash({
        admin: this.store.query('user', {
          equalTo: params.username
        })
      });
    }
  });
});
define('demonstration/routes/manage/enseignant', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.query('enseignant', {
        orderBy: 'identifiant'
      });
    },

    actions: {

      saveTeacher: function saveTeacher(identifier, name, lastname, mail) {

        var teacher = this.store.createRecord('enseignant', {

          password: 'default',
          identifiant: identifier,
          nom: lastname,
          prenom: name,
          datedenaissance: null,
          email: mail
        });

        teacher.save();
        teacher.load();
      },

      deleteTeacher: function deleteTeacher(teacher) {
        teacher.destroyRecord();
      }

    }
  });
});
define('demonstration/routes/manage/etudiant', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return this.store.query('etudiant', {
        orderBy: 'identifiant'
      });
    },

    variable: {},

    actions: {

      saveStudent: function saveStudent(identifier, name, lastname, mail) {

        var student = this.store.createRecord('etudiant', {
          password: 'default',
          identifiant: identifier,
          nom: lastname,
          prenom: name,
          datedenaissance: null,
          email: mail
        });

        student.save();
      },

      deleteStudent: function deleteStudent(student) {
        student.destroyRecord();
      }
    }
  });
});
define('demonstration/routes/users', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {

      return _ember['default'].RSVP.hash({
        enseignants: this.store.query('enseignant', {
          orderBy: 'identifiant',
          equalTo: params.username
        }),

        etudiants: this.store.query('etudiant', {
          orderBy: 'identifiant',
          equalTo: params.username
        }),

        admin: this.store.query('user', {
          equalTo: params.username
        }),

        ues: this.store.findAll('ue').then(function (results) {
          return results.filter(function (ue) {
            return ue.get('enseignant') === params.username;
          });
        })
      });
    }
  });
});
define('demonstration/routes/users/profil', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('demonstration/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('demonstration/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('demonstration/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define("demonstration/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "zyyX5VGl", "block": "{\"statements\":[[\"text\",\"\\n\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/application.hbs" } });
});
define("demonstration/templates/components/admin-layout", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "sP8AkZiz", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-lg btn-block\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"logout\"]],[\"flush-element\"],[\"text\",\"Se deconnecter\"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"comment\",\" Menu \"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-lg-4 col-md-4 col-sm-4 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"Menu\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"manage.etudiant\",[\"helper\",[\"query-params\"],null,[[\"isAdmin\"],[[\"get\",[\"isAdmin\"]]]]]],null,1],[\"text\",\" \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"manage.enseignant\",[\"helper\",[\"query-params\"],null,[[\"isAdmin\"],[[\"get\",[\"isAdmin\"]]]]]],null,0],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"yield\",\"default\"],[\"text\",\"\\n\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"Enseignants\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Etudiants\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/components/admin-layout.hbs" } });
});
define("demonstration/templates/components/form-user-add", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "km4CiXml", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-lg-8 col-md-8 col-sm-8 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"title\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"form-\",[\"unknown\",[\"class\"]]]]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"form-inline\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"yield\",\"default\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/components/form-user-add.hbs" } });
});
define("demonstration/templates/components/if-equal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "CKpbJn1u", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"isEqual\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/components/if-equal.hbs" } });
});
define("demonstration/templates/components/if-greater", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "tQUIBH1D", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"isGreater\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/components/if-greater.hbs" } });
});
define("demonstration/templates/components/student-average", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cbCYHlCB", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if-greater\"],null,[[\"param1\",\"param2\"],[[\"helper\",[\"moyenne-note\"],null,[[\"param1\",\"param2\",\"param3\"],[[\"get\",[\"note\",\"cc1\"]],[\"get\",[\"note\",\"cc2\"]],[\"get\",[\"note\",\"ccf\"]]]]],0]],1],[\"text\",\"\\n\"],[\"block\",[\"if-greater\"],null,[[\"param1\",\"param2\"],[0,[\"helper\",[\"moyenne-note\"],null,[[\"param1\",\"param2\",\"param3\"],[[\"get\",[\"note\",\"cc1\"]],[\"get\",[\"note\",\"cc2\"]],[\"get\",[\"note\",\"ccf\"]]]]]]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"note\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"note\"],[\"dynamic-attr\",\"style\",[\"concat\",[\"background-color: \",[\"helper\",[\"get-color\"],[[\"helper\",[\"moyenne-note\"],null,[[\"param1\",\"param2\",\"param3\"],[[\"get\",[\"note\",\"cc1\"]],[\"get\",[\"note\",\"cc2\"]],[\"get\",[\"note\",\"ccf\"]]]]]],null]]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Moyenne\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"moyenne-note\"],null,[[\"param1\",\"param2\",\"param3\"],[[\"get\",[\"note\",\"cc1\"]],[\"get\",[\"note\",\"cc2\"]],[\"get\",[\"note\",\"ccf\"]]]]],false],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sur\"],[\"flush-element\"],[\"text\",\"/20\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/components/student-average.hbs" } });
});
define("demonstration/templates/components/student-info", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "7Ss+ewMf", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"etudiant\",\"nom\"]],false],[\"text\",\", \"],[\"append\",[\"unknown\",[\"etudiant\",\"prenom\"]],false],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Identifiant: \"],[\"append\",[\"unknown\",[\"etudiant\",\"identifiant\"]],false],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"etudiant\",\"notes\"]]],null,1]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-inline\"],[\"flush-element\"],[\"text\",\"\\n\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"min\",\"max\",\"value\",\"class\",\"placeholder\",\"style\"],[\"number\",\"0\",\"20\",[\"get\",[\"note\",\"cc1\"]],\"form-control\",\"CC1\",\"background-color: {{get-color note.cc1}}\"]]],false],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"min\",\"max\",\"value\",\"class\",\"placeholder\",\"style\"],[\"number\",\"0\",\"20\",[\"get\",[\"note\",\"cc2\"]],\"form-control\",\"CC2\",\"background-color: {{get-color note.cc2}}\"]]],false],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"min\",\"max\",\"value\",\"class\",\"placeholder\",\"style\"],[\"number\",\"0\",\"20\",[\"get\",[\"note\",\"ccf\"]],\"form-control\",\"CCF\",\"background-color: {{get-color note.ccf}}\"]]],false],[\"text\",\"\\n\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-orange btn-sm\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveNote\",[\"get\",[\"note\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"append\",[\"helper\",[\"student-average\"],null,[[\"note\"],[[\"get\",[\"note\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if-equal\"],null,[[\"param1\",\"param2\"],[[\"get\",[\"note\",\"ue\",\"id\"]],[\"get\",[\"ue\",\"id\"]]]],0]],\"locals\":[\"note\"]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/components/student-info.hbs" } });
});
define("demonstration/templates/components/student-note", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ZNzSrJKF", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if-greater\"],null,[[\"param1\",\"param2\"],[[\"get\",[\"note\"]],0]],1],[\"text\",\"\\n\"],[\"block\",[\"if-greater\"],null,[[\"param1\",\"param2\"],[0,[\"get\",[\"note\"]]]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"note\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"note\"],[\"dynamic-attr\",\"style\",[\"concat\",[\"background-color: \",[\"helper\",[\"get-color\"],[[\"get\",[\"note\"]]],null]]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"title-note\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"note\"]],false],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sur\"],[\"flush-element\"],[\"text\",\"/20\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/components/student-note.hbs" } });
});
define("demonstration/templates/components/user-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "J7Mp2nOH", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"table\",[]],[\"static-attr\",\"class\",\"table table-hover\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"thead\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Identifiant\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Prenom\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Nom\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"text\",\"Email\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"th\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"tbody\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"yield\",\"default\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/components/user-list.hbs" } });
});
define("demonstration/templates/components/user-profile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Z8yKH8Pr", "block": "{\"statements\":[[\"comment\",\" Profile \"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-lg-4 col-md-4 col-sm-4 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"Profil\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"user-profil\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[\"/assets/images/\",[\"unknown\",[\"user\",\"identifiant\"]],\".png\"]]],[\"static-attr\",\"alt\",\"...\"],[\"static-attr\",\"class\",\"img-thumbnail\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Nom complet \"],[\"close-element\"],[\"append\",[\"unknown\",[\"user\",\"nom\"]],false],[\"text\",\" \"],[\"append\",[\"unknown\",[\"user\",\"prenom\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"identifiant:\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"user\",\"identifiant\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Date de naissance:\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"user\",\"datedenaissance\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Email:\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"user\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/components/user-profile.hbs" } });
});
define("demonstration/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "btBcsVkq", "block": "{\"statements\":[[\"partial\",\"navbar\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"contact_page\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Contact\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-horizontal form-group form-group-lg row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1 connect_horizental\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\",\"autofocus\"],[\"text\",\"form-control\",[\"get\",[\"nom\"]],\"Entrer votre nom.\",\"autofocus\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1 connect_horizental\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\",\"autofocus\"],[\"email\",\"form-control\",[\"get\",[\"email\"]],\"Entrer votre email.\",\"autofocus\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 connect_horizental\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[\"get\",[\"message\"]],\"Entrer votre message.\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-offset-1 col-sm-10 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-lg btn-block\"],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"isDisabled\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"verifyMessage\"]],[\"flush-element\"],[\"text\",\"Nous contacter\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"responseMessage\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"responseMessage\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "demonstration/templates/contact.hbs" } });
});
define("demonstration/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "W/DQp+6V", "block": "{\"statements\":[[\"partial\",\"navbar\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"login_page\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\" Bienvennue sur l'application \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\" Cet outil permet de saisir des notes concernant une UE de manière collaborative sur le web.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Il permet aussi au étudiants de consulter les notes de chaque UE.\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/merci_20.png\"],[\"static-attr\",\"style\",\"margin: 0 auto; display: block;\"],[\"static-attr\",\"width\",\"350\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"block\",[\"link-to\"],[\"login\"],null,0],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"style\",\"padding: 0;line-height: 35px;\"],[\"static-attr\",\"class\",\"btn btn-primary btn-lg btn-block\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-user\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    Se connetcer\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "demonstration/templates/index.hbs" } });
});
define("demonstration/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YrDQhKpO", "block": "{\"statements\":[[\"partial\",\"navbar\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"login_page\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Service d'Authentification\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-horizontal form-group form-group-lg row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 connect_horizental\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\",\"autofocus\"],[\"text\",\"form-control\",[\"get\",[\"identifiant\"]],\"Entrer votre identifiant.\",\"autofocus\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 connect_horizental\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\",\"autofocus\"],[\"password\",\"form-control\",[\"get\",[\"password\"]],\"Entrer votre mot de passe.\",\"autofocus\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-offset-1 col-sm-10 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-lg btn-block\"],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"isDisabled\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"verifyUser\"]],[\"flush-element\"],[\"text\",\"Se connecter\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/note.gif\"],[\"static-attr\",\"class\",\"image_login\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"message_login\"],[\"flush-element\"],[\"text\",\"Pour des raisons de sécurité, veuillez vous déconnecter et fermer votre navigateur lorsque vous avez fini d'accéder\\n    aux services authentifiés.\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"responseMessage\"]]],null,0],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"responseMessage\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":true}", "meta": { "moduleName": "demonstration/templates/login.hbs" } });
});
define("demonstration/templates/manage/enseignant/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Jmh2WdZu", "block": "{\"statements\":[[\"block\",[\"admin-layout\"],null,null,3]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\n      \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"teacher\",\"identifiant\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"teacher\",\"prenom\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"teacher\",\"nom\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"teacher\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-orange btn-sm\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deleteTeacher\",[\"get\",[\"teacher\"]]]],[\"flush-element\"],[\"text\",\"Supprimer\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[\"teacher\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n        Identifiant: \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"autofocus\",\"class\",\"placeholder\"],[\"text\",[\"get\",[\"identifier\"]],\"autofocus\",\"form-control input-form\",\"Identifiant\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n        Nom: \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[\"get\",[\"lastname\"]],\"form-control input-form\",\"Nom\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n        Prenom: \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[\"get\",[\"name\"]],\"form-control input-form\",\"Prenom\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n        Email  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"email\",[\"get\",[\"mail\"]],\"form-control input-form\",\"Email\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-orange\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveTeacher\",[\"get\",[\"identifier\"]],[\"get\",[\"lastname\"]],[\"get\",[\"name\"]],[\"get\",[\"mail\"]]]],[\"flush-element\"],[\"text\",\"Sauvegarder\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"form-user-add\"],null,[[\"class\",\"title\"],[\"teacher\",\"Nouveau enseignant\"]],2],[\"text\",\"\\n\\n\"],[\"block\",[\"user-list\"],null,null,1]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/manage/enseignant/index.hbs" } });
});
define("demonstration/templates/manage/etudiant/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "EF5TUfRz", "block": "{\"statements\":[[\"block\",[\"admin-layout\"],null,null,3]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"tr\",[]],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"student\",\"identifiant\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"student\",\"prenom\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"student\",\"nom\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"student\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-orange btn-sm\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deleteStudent\",[\"get\",[\"student\"]]]],[\"flush-element\"],[\"text\",\"Supprimer\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"td\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"student\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n        Identifiant: \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"autofocus\",\"class\",\"placeholder\"],[\"text\",[\"helper\",[\"mut\"],[[\"helper\",[\"get\"],[[\"get\",[\"identifier\"]],[\"get\",[\"field\"]]],null]],null],\"autofocus\",\"form-control input-form\",\"Identifiant\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n        Nom: \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[\"helper\",[\"mut\"],[[\"helper\",[\"get\"],[[\"get\",[\"lastname\"]],[\"get\",[\"field\"]]],null]],null],\"form-control input-form\",\"Nom\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n        Prenom: \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[\"helper\",[\"mut\"],[[\"helper\",[\"get\"],[[\"get\",[\"name\"]],[\"get\",[\"field\"]]],null]],null],\"form-control input-form\",\"Prenom\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n        Email  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"email\",[\"helper\",[\"mut\"],[[\"helper\",[\"get\"],[[\"get\",[\"mail\"]],[\"get\",[\"field\"]]],null]],null],\"form-control input-form\",\"Email\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-orange\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveStudent\",[\"get\",[\"identifier\"]],[\"get\",[\"lastname\"]],[\"get\",[\"name\"]],[\"get\",[\"mail\"]]]],[\"flush-element\"],[\"text\",\"Sauvegarder\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"form-user-add\"],null,[[\"class\",\"title\"],[\"teacher\",\"Nouveau etudiant\"]],2],[\"text\",\"\\n\"],[\"block\",[\"user-list\"],null,null,1],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/manage/etudiant/index.hbs" } });
});
define("demonstration/templates/manage/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ZkZfnmRO", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"admin-layout\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/manage/index.hbs" } });
});
define("demonstration/templates/navbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "E4pRdUck", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-inverse\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container_nav\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"main-navbar\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"block\",[\"link-to\"],[\"index\"],[[\"tagName\"],[\"li\"]],2],[\"text\",\"\\n          \"],[\"block\",[\"link-to\"],[\"login\"],[[\"tagName\"],[\"li\"]],1],[\"text\",\"\\n          \"],[\"block\",[\"link-to\"],[\"contact\"],[[\"tagName\"],[\"li\"]],0],[\"text\",\"\\n\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"comment\",\" /.navbar-collapse \"],[\"text\",\"\\n    \"],[\"close-element\"],[\"comment\",\" /.container-fluid \"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-envelope\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Contact\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-user\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Connexion\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-home\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Accueil\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/navbar.hbs" } });
});
define("demonstration/templates/users", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Zcghth3e", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-lg btn-block\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"logout\"]],[\"flush-element\"],[\"text\",\"Se deconnecter\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isetudiant\"]]],null,8],[\"block\",[\"if\"],[[\"get\",[\"isenseignant\"]]],null,3],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                \"],[\"append\",[\"helper\",[\"student-info\"],null,[[\"etudiant\",\"ue\"],[[\"get\",[\"etudiant\"]],[\"get\",[\"ue\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"etudiant\"]},{\"statements\":[[\"text\",\"\\n              \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"ue\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"dynamic-attr\",\"data-target\",[\"concat\",[[\"unknown\",[\"ue\",\"id\"]]]]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-plus-sign\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"ue\",\"nom\"]],false],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"ue\",\"etudiants\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[\"ue\"]},{\"statements\":[[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"user-profile\"],null,[[\"user\"],[[\"get\",[\"enseignant\"]]]]],false],[\"text\",\"\\n\\n      \"],[\"comment\",\" Liste d'UEs \"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-lg-8 col-md-8 col-sm-8 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"UEs\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body notes_ue\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"enseignant\",\"ues\"]]],null,1],[\"text\",\"          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[\"enseignant\"]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"enseignants\"]]],null,2],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n                  \"],[\"append\",[\"helper\",[\"student-note\"],null,[[\"note\",\"title-note\"],[[\"get\",[\"note\",\"cc1\"]],\"Note CC1\"]]],false],[\"text\",\"\\n                  \"],[\"append\",[\"helper\",[\"student-note\"],null,[[\"note\",\"title-note\"],[[\"get\",[\"note\",\"cc2\"]],\"Note CC2\"]]],false],[\"text\",\"\\n                  \"],[\"append\",[\"helper\",[\"student-note\"],null,[[\"note\",\"title-note\"],[[\"get\",[\"note\",\"ccf\"]],\"Note CCF\"]]],false],[\"text\",\"\\n\\n                  \"],[\"append\",[\"helper\",[\"student-average\"],null,[[\"note\"],[[\"get\",[\"note\"]]]]],false],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if-equal\"],null,[[\"param1\",\"param2\"],[[\"get\",[\"note\",\"ue\",\"id\"]],[\"get\",[\"ue\",\"id\"]]]],4]],\"locals\":[\"note\"]},{\"statements\":[[\"text\",\"\\n              \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"ue\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"dynamic-attr\",\"data-target\",[\"concat\",[[\"unknown\",[\"ue\",\"id\"]]]]],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-plus-sign\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\" \"],[\"append\",[\"unknown\",[\"ue\",\"nom\"]],false],[\"text\",\"(\\n                \"],[\"open-element\",\"b\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"ue\",\"enseignant\",\"nom\"]],false],[\"text\",\" \"],[\"append\",[\"unknown\",[\"ue\",\"enseignant\",\"prenom\"]],false],[\"text\",\" \"],[\"close-element\"],[\"text\",\")\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"etudiant\",\"notes\"]]],null,5],[\"text\",\"\\n\"]],\"locals\":[\"ue\"]},{\"statements\":[[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"user-profile\"],null,[[\"user\"],[[\"get\",[\"etudiant\"]]]]],false],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-lg-8 col-md-8 col-sm-8 col-xs-12\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"Notes\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body notes_ue\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"etudiant\",\"ues\"]]],null,6],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"moyene-annee\"],null,[[\"param1\"],[[\"get\",[\"etudiant\",\"notes\"]]]]],false],[\"text\",\"\\n\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"etudiant\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"model\",\"etudiants\"]]],null,7],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/users.hbs" } });
});
define("demonstration/templates/users/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "uLrIaaiV", "block": "{\"statements\":[],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/users/index.hbs" } });
});
define("demonstration/templates/users/profil", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6l7AAMnr", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/users/profil.hbs" } });
});
define('demonstration/torii-adapters/application', ['exports', 'ember', 'emberfire/torii-adapters/firebase'], function (exports, _ember, _emberfireToriiAdaptersFirebase) {
  exports['default'] = _emberfireToriiAdaptersFirebase['default'].extend({
    firebase: _ember['default'].inject.service()
  });
});
// app/torii-adapters/application.js
define('demonstration/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});


define('demonstration/config/environment', ['ember'], function(Ember) {
  var prefix = 'demonstration';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("demonstration/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"demonstration","version":"0.0.0+"});
}
//# sourceMappingURL=demonstration.map
