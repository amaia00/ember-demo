import Ember from 'ember';

export default Ember.Controller.extend({

  identifiant: '',
  password: '',
  isDisabled: Ember.computed.empty('identifiant') && Ember.computed.empty('password'),

  actions: {

    verifyUser() {
      /**
       * TODO a effacer
       * /

      var recordAdmin = this.store.createRecord('user',{
        password: 'admin',
        identifiant: 'admin',
        nom: 'Administrator',
        prenom: ' ',
        datedenaissance: null,
        email: 'admin@univ-lyon1.fr'

      } );
      recordAdmin.save();

      var recordetu1 = this.store.createRecord('etudiant', {
        password: 'amina',
        identifiant: 'p1411332',
        nom: 'Meziani',
        prenom: 'Amina',
        datedenaissance: Date(),
        email: 'amina.meziani@etu.fr'

      });

      var recordetu2 = this.store.createRecord('etudiant',{
        password: 'mouad',
        identifiant: 'p1310550',
        nom: 'El Gharbi',
        prenom: 'Mouad',
        datedenaissance: Date(),
        email: 'mouad.elgharbi@etu.com'

      } );

      var recordetu3 = this.store.createRecord('etudiant',{
        password: 'sofiaa',
        identifiant: 'p1614340',
        nom: 'Faddi',
        prenom: 'Sofiaa',
        datedenaissance: Date(),
        email: 'sofiaa.faddi@etu.com'

      } );

      var recordetu4 = this.store.createRecord('etudiant',{
        password: 'amaia',
        identifiant: 'p1614291',
        nom: 'Nazabal',
        prenom: 'Amaia',
        datedenaissance: Date(),
        email: 'amaia.nazabal@etu.com'

      } );

      var recordetu5 = this.store.createRecord('etudiant',{
        password: 'michel',
        identifiant: 'p1111111',
        nom: 'Diop',
        prenom: 'Michel',
        datedenaissance: Date(),
        email: 'michel.diop@etu.com'

      } );


      var recordens1 = this.store.createRecord('enseignant',{
        password: 'donald',
        identifiant: 'donald',
        nom: 'Donald',
        prenom: 'Trump',
        datedenaissance: Date(),
        email: 'ens1@ens.com'

      } );

      var recordens2 = this.store.createRecord('enseignant',{
        password: 'laure',
        identifiant: 'laure',
        nom: 'Gonnord',
        prenom: 'Laure',
        datedenaissance: Date(),
        email: 'laure.gonnord@ens.com'

      } );

      var recordens3 = this.store.createRecord('enseignant',{
        password: 'françois',
        identifiant: 'françois',
        nom: 'Michel',
        prenom: 'François',
        datedenaissance: Date(),
        email: 'ens1@ens.com'

      } );

      var recordens4 = this.store.createRecord('enseignant',{
        password: 'fabien',
        identifiant: 'fabien',
        nom: 'Ezequel',
        prenom: 'Fabien',
        datedenaissance: Date(),
        email: 'fabien.ezequel@ens.com'

      } );

      var recordens5 = this.store.createRecord('enseignant',{
        password: 'julien',
        identifiant: 'Julien',
        nom: 'Brandel',
        prenom: 'julien',
        datedenaissance: Date(),
        email: 'julien.brandel@ens.com'

      } );



      var recordue1 = this.store.createRecord('ue',{
        nom:'Compilation',
        datedouverture: '20/12/2016',
        datedefermeture: '20/12/2017'
      });
      var recordue2 = this.store.createRecord('ue',{
        nom:'Réseau',
        datedouverture: '20/12/2016',
        datedefermeture: '20/12/2017'

      });
      var recordue3 = this.store.createRecord('ue',{
        nom:'Logique',
        datedouverture: '20/12/2016',
        datedefermeture: '20/12/2017'
      });
      var recordue4 = this.store.createRecord('ue',{
        nom:'Droit',
        datedouverture: '20/12/2016',
        datedefermeture: '20/12/2017'
      });
      var recordue5 = this.store.createRecord('ue',{
        nom:'Programmation',
        datedouverture: '20/12/2016',
        datedefermeture: '20/12/2017'

      });

      var recordnote1 = this.store.createRecord('note',{
        cc1: 12,
        cc2: 10,
        ccf: 15
      });
      var recordnote2 = this.store.createRecord('note',{
        cc1: 10,
        cc2: 8,
        ccf: 12
      });
      var recordnote3 = this.store.createRecord('note',{
        cc1: 12,
        cc2: 15,
        ccf: 13
      });
      var recordnote4 = this.store.createRecord('note',{
        cc1: 11,
        cc2: 11,
        ccf: 14
      });
      var recordnote5 = this.store.createRecord('note',{
        cc1: 13,
        cc2: 14,
        ccf: 12
      });
      var recordnote6 = this.store.createRecord('note',{
        cc1: 11,
        cc2: 15,
        ccf: 18
      });
      var recordnote7 = this.store.createRecord('note',{
        cc1: 20,
        cc2: 19,
        ccf: 12
      });
       var recordnote8 = this.store.createRecord('note',{
        cc1: 12,
        cc2: 19,
        ccf: 12
      });
       var recordnote9 = this.store.createRecord('note',{
        cc1: 10,
        cc2: 19,
        ccf: 12
      });
       var recordnote10 = this.store.createRecord('note',{
        cc1: 10,
        cc2: 19,
        ccf: 12
      });
       var recordnote11 = this.store.createRecord('note',{
        cc1: 10,
        cc2: 19,
        ccf: 12
      });
       var recordnote12 = this.store.createRecord('note',{
        cc1: 16,
        cc2: 19,
        ccf: 12
      });
       var recordnote13 = this.store.createRecord('note',{
        cc1: 9,
        cc2: 19,
        ccf: 12
      });
       var recordnote14 = this.store.createRecord('note',{
        cc1: 10,
        cc2: 19,
        ccf: 12
      });
       var recordnote15 = this.store.createRecord('note',{
        cc1: 15,
        cc2: 19,
        ccf: 12
      });
       var recordnote16 = this.store.createRecord('note',{
        cc1: 14,
        cc2: 19,
        ccf: 12
      });
       var recordnote17 = this.store.createRecord('note',{
        cc1: 13,
        cc2: 19,
        ccf: 12
      });
       var recordnote18 = this.store.createRecord('note',{
        cc1: 12,
        cc2: 19,
        ccf: 12
      });
       var recordnote19 = this.store.createRecord('note',{
        cc1: 11,
        cc2: 19,
        ccf: 12
      });
       var recordnote20 = this.store.createRecord('note',{
        cc1: 20,
        cc2: 19,
        ccf: 12
      });

      recordens1.get('ues').pushObject(recordue4);
      recordens2.get('ues').pushObject(recordue1);
      recordens3.get('ues').pushObject(recordue2);
      recordens3.get('ues').pushObject(recordue5);
      recordens4.get('ues').pushObject(recordue3);
      recordens5.get('ues').pushObject(recordue5);

      recordetu1.get('ues').pushObject(recordue1);
      recordetu1.get('ues').pushObject(recordue2);
      recordetu1.get('ues').pushObject(recordue5);
      recordetu1.get('ues').pushObject(recordue4);

      recordetu2.get('ues').pushObject(recordue1);
      recordetu2.get('ues').pushObject(recordue3);
      recordetu2.get('ues').pushObject(recordue5);
      recordetu2.get('ues').pushObject(recordue4);

      recordetu3.get('ues').pushObject(recordue5);
      recordetu3.get('ues').pushObject(recordue1);
      recordetu3.get('ues').pushObject(recordue2);
      recordetu3.get('ues').pushObject(recordue3);

      recordetu4.get('ues').pushObject(recordue1);
      recordetu4.get('ues').pushObject(recordue2);
      recordetu4.get('ues').pushObject(recordue3);
      recordetu4.get('ues').pushObject(recordue5);

      recordetu5.get('ues').pushObject(recordue1);
      recordetu5.get('ues').pushObject(recordue5);
      recordetu5.get('ues').pushObject(recordue4);
      recordetu5.get('ues').pushObject(recordue2);



      recordue1.get('notes').pushObject(recordnote1);
      recordetu1.get('notes').pushObject(recordnote1);

      recordue2.get('notes').pushObject(recordnote2);
      recordetu1.get('notes').pushObject(recordnote2);

      recordue5.get('notes').pushObject(recordnote3);
      recordetu1.get('notes').pushObject(recordnote3);

      recordue4.get('notes').pushObject(recordnote20);
      recordetu1.get('notes').pushObject(recordnote20);



      recordue1.get('notes').pushObject(recordnote19);
      recordetu2.get('notes').pushObject(recordnote19);

      recordue3.get('notes').pushObject(recordnote4);
      recordetu2.get('notes').pushObject(recordnote4);

      recordue5.get('notes').pushObject(recordnote5);
      recordetu2.get('notes').pushObject(recordnote5);

      recordue4.get('notes').pushObject(recordnote6);
      recordetu2.get('notes').pushObject(recordnote6);


      recordue5.get('notes').pushObject(recordnote7);
      recordetu3.get('notes').pushObject(recordnote7);

      recordue1.get('notes').pushObject(recordnote8);
      recordetu3.get('notes').pushObject(recordnote8);

      recordue2.get('notes').pushObject(recordnote18);
      recordetu3.get('notes').pushObject(recordnote18);

      recordue3.get('notes').pushObject(recordnote9);
      recordetu3.get('notes').pushObject(recordnote9);


      recordue1.get('notes').pushObject(recordnote10);
      recordetu4.get('notes').pushObject(recordnote10);

      recordue2.get('notes').pushObject(recordnote11);
      recordetu4.get('notes').pushObject(recordnote11);

      recordue3.get('notes').pushObject(recordnote12);
      recordetu4.get('notes').pushObject(recordnote12);

      recordue5.get('notes').pushObject(recordnote13);
      recordetu4.get('notes').pushObject(recordnote13);



      recordue1.get('notes').pushObject(recordnote14);
      recordetu5.get('notes').pushObject(recordnote14);

      recordue5.get('notes').pushObject(recordnote15);
      recordetu5.get('notes').pushObject(recordnote15);

      recordue4.get('notes').pushObject(recordnote16);
      recordetu5.get('notes').pushObject(recordnote16);

      recordue2.get('notes').pushObject(recordnote17);
      recordetu5.get('notes').pushObject(recordnote17);




      recordnote1.save();
      recordnote2.save();
      recordnote3.save();
      recordnote4.save();
      recordnote5.save();
      recordnote6.save();
      recordnote7.save();
      recordnote8.save();
      recordnote9.save();
      recordnote10.save();
      recordnote11.save();
      recordnote12.save();
      recordnote13.save();
      recordnote14.save();
      recordnote15.save();
      recordnote16.save();
      recordnote17.save();
      recordnote18.save();
      recordnote19.save();
      recordnote20.save();


      recordue1.save();
      recordue2.save();
      recordue3.save();
      recordue4.save();
      recordue5.save();

      recordens1.save();
      recordens2.save();
      recordens3.save();
      recordens4.save();
      recordens5.save();

      recordetu1.save();
      recordetu2.save();
      recordetu3.save();
      recordetu4.save();
      recordetu5.save();

*/






      const identifier = this.get('identifiant');
      const password = this.get('password');

      const model = this.get('model');
      let valid = false;

      console.debug("MODEL", model);

      for (let i = 0; i < model.length; i++) {
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
          this.transitionToRoute('/manage', {queryParams: {id: identifier}});
        } else {
          this.set('responseMessage', 'Bienvenue !! Vous allez être rediriger dans quelque instant!!');
          this.transitionToRoute('/users/' + identifier);
        }

      }
    }
  }
});

