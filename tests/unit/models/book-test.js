import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | book', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('book', {});
  
    assert.expect(2);
    assert.equal(model.constructor.modelName, 'book');
    assert.ok(model);
  });
});
