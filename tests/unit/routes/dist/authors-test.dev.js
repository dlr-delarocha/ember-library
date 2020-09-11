"use strict";

var _qunit = require("qunit");

var _emberQunit = require("ember-qunit");

(0, _qunit.module)('Unit | Route | authors', function (hooks) {
  (0, _emberQunit.setupTest)(hooks);
  (0, _qunit.test)('it exists', function (assert) {
    var route = this.owner.lookup('route:authors');
    assert.ok(route);
  });
});