import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ue', 'Unit | Model | ue', {
  // Specify the other units that are required for this test.
  needs: ['model:etudiant', 'model:enseignant']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
