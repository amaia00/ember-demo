import { moduleForModel, test } from 'ember-qunit';

moduleForModel('etudiant', 'Unit | Model | etudiant', {
  // Specify the other units that are required for this test.
  needs: ['model:ue']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
