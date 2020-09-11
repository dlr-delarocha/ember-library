import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';
import sinon from 'sinon';

const { spy, stub } = sinon;

module('Unit | Controller | authors', function(hooks) {
  setupTest(hooks);


  hooks.beforeEach(function () {
    this.controller = this.owner.lookup('controller:authors');
  });
 
  test('checks queryParams, filter, letter and limit', function (assert) {
    const { controller } = this;
    assert.expect(3);
    assert.deepEqual(controller.queryParams, ['filter']);
    assert.equal(controller.filter, '');
    assert.equal(controller.limit, 'all');
  });


  test('filteredList computed property', function(assert) {
    const { controller } = this;

    //this model is order by name automatically 
    controller.model = [
      EmberObject.create({ name: 'Richard Bach' }),
      EmberObject.create({ name: 'Robert Kiyosaki' }),
    ];

    assert.expect(2);
    assert.deepEqual(controller.get('filteredList'), controller.model, 'no filter');

    //robert must be first than Richard
    controller.set('filter', 'rob');
    assert.deepEqual(controller.get('filteredList'), [controller.model.objectAt(1)], 'filter by rob');
  });  
});
