"use strict";

var _qunit = require("qunit");

var _emberQunit = require("ember-qunit");

(0, _qunit.module)('Unit | Controller | author', function (hooks) {
  (0, _emberQunit.setupTest)(hooks);
  hooks.beforeEach(function () {
    this.controller = this.owner.lookup('controller:books');
  }); // TODO: Replace this with your real tests.

  (0, _qunit.test)('it exists', function (assert) {
    var controller = this.owner.lookup('controller:author');
    assert.ok(controller);
  });
});