import { moduleForModel, test } from 'ember-qunit';

moduleForModel('note', 'Unit | Model | note', {
  // Specify the other units that are required for this test.
  needs: ['model:etudiant', 'model:ue']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
