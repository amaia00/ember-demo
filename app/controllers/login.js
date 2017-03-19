import Ember from 'ember';

export default Ember.Controller.extend({

  identifiant: '',
  password: '',
  isDisabled: Ember.computed.empty('identifiant') && Ember.computed.empty('password'),

  actions: {

    verifyUser() {
      /**
       * a effacer
       */
    /*  var recordetu1 = this.store.createRecord('etudiant',{
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


      const identifiant = this.get('identifiant');
      const password = this.get('password');



      var modele = this.get('model');
      var valid = false;
      for(var i =0; i<modele.length; i++) {
        if(modele[i][0] === identifiant && modele[i][1] === password) {
          valid = true;
          break;
        }
        else {
          valid = false;

        }
      }

      if(valid === false) {
        console.log('false1');
        this.set('responseMessage', 'mot de passe inccorect');
        this.set('emailAddress', '');
      }else{
        this.set('responseMessage', 'Bienvenue !! Vous allez être rediriger dans quelque instant!!');
        this.transitionToRoute('/users/'+identifiant);
      }



    }

  }



});

