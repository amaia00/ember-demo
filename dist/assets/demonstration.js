"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

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

        var identifiant = this.get('identifiant');
        var password = this.get('password');

        var modele = this.get('model');
        var valid = true;
        for (var i = 0; i < modele.content.length; i++) {
          if (modele.content[i]._data.identifiant === identifiant && modele.content[i]._data.password === password) {
            valid = true;
            break;
          } else {
            valid = false;
          }
        }
        console.log(valid);
        if (valid === false) {
          console.log('false1');
          this.set('responseMessage', 'Identifiant ou mot de passe incorrect! Réessayer');
          this.set('emailAddress', '');
        }
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
define('demonstration/models/login', ['exports', 'ember-data'], function (exports, _emberData) {

  //noinspection JSAnnotator
  exports['default'] = _emberData['default'].Model.extend({
    password: _emberData['default'].attr('string'),
    identifiant: _emberData['default'].attr('string')
  });
});
//nom: DS.attr('string'),
//prenom: DS.attr('string')
define('demonstration/models/user', ['exports', 'ember-data'], function (exports, _emberData) {

  //noinspection JSAnnotator
  exports['default'] = _emberData['default'].Model.extend({
    password: _emberData['default'].attr('string'),
    identifiant: _emberData['default'].attr('string')
  });
});
//nom: DS.attr('string'),
//prenom: DS.attr('string')
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
  });

  exports['default'] = Router;
});
define('demonstration/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('demonstration/routes/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('user');
    }
  });
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
  exports["default"] = Ember.HTMLBars.template({ "id": "w8hJm/dI", "block": "{\"statements\":[[\"text\",\"\\n  \"],[\"partial\",\"navbar\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":true}", "meta": { "moduleName": "demonstration/templates/application.hbs" } });
});
define("demonstration/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "7yfDIF97", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"contact_page\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Contact\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-horizontal form-group form-group-lg row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1 connect_horizental\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\",\"autofocus\"],[\"text\",\"form-control\",[\"get\",[\"nom\"]],\"Entrer votre nom.\",\"autofocus\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1 connect_horizental\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\",\"autofocus\"],[\"email\",\"form-control\",[\"get\",[\"email\"]],\"Entrer votre email.\",\"autofocus\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 connect_horizental\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[\"get\",[\"message\"]],\"Entrer votre message.\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-offset-1 col-sm-10 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-lg btn-block\"],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"isDisabled\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"verifyMessage\"]],[\"flush-element\"],[\"text\",\"Nous contacter\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"responseMessage\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"responseMessage\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/contact.hbs" } });
});
define("demonstration/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+tjjhTNI", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"login_page\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Service d'Authentification\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-horizontal form-group form-group-lg row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 connect_horizental\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\",\"autofocus\"],[\"text\",\"form-control\",[\"get\",[\"identifiant\"]],\"Entrer votre identifiant.\",\"autofocus\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 connect_horizental\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"value\",\"placeholder\",\"autofocus\"],[\"password\",\"form-control\",[\"get\",[\"password\"]],\"Entrer votre mot de passe.\",\"autofocus\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-10 col-xs-offset-1 col-sm-offset-1 col-sm-10 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-lg btn-block\"],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"isDisabled\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"verifyUser\"]],[\"flush-element\"],[\"text\",\"Se connecter\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/note.gif\"],[\"static-attr\",\"class\",\"image_login\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"message_login\"],[\"flush-element\"],[\"text\",\"Pour des raisons de sécurité, veuillez vous déconnecter et fermer votre navigateur lorsque vous avez fini d'accéder\\n    aux services authentifiés.\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"responseMessage\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"responseMessage\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/login.hbs" } });
});
define("demonstration/templates/navbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "E4pRdUck", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-inverse\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container_nav\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"main-navbar\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"block\",[\"link-to\"],[\"index\"],[[\"tagName\"],[\"li\"]],2],[\"text\",\"\\n          \"],[\"block\",[\"link-to\"],[\"login\"],[[\"tagName\"],[\"li\"]],1],[\"text\",\"\\n          \"],[\"block\",[\"link-to\"],[\"contact\"],[[\"tagName\"],[\"li\"]],0],[\"text\",\"\\n\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"comment\",\" /.navbar-collapse \"],[\"text\",\"\\n    \"],[\"close-element\"],[\"comment\",\" /.container-fluid \"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-envelope\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Contact\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-user\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Connexion\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"glyphicon glyphicon-home\"],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"Accueil\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "demonstration/templates/navbar.hbs" } });
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
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('demonstration/config/environment', ['ember'], function(Ember) {
  var prefix = 'demonstration';
/* jshint ignore:start */

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

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("demonstration/app")["default"].create({"name":"demonstration","version":"0.0.0+79fec66c"});
}

/* jshint ignore:end */
//# sourceMappingURL=demonstration.map
