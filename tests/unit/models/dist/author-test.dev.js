"use strict";

var _qunit = require("qunit");

var _emberQunit = require("ember-qunit");

(0, _qunit.module)('Unit | Model | author', function (hooks) {
  (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

  (0, _qunit.test)('it exists', function (assert) {
    var store = this.owner.lookup('service:store');
    var model = store.createRecord('author', {});
    assert.expect(2);
    assert.equal(model.constructor.modelName, 'author');
    assert.ok(model);
  });
});