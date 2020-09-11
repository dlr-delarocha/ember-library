"use strict";

var _qunit = require("qunit");

var _emberQunit = require("ember-qunit");

var _object = _interopRequireDefault(require("@ember/object"));

var _sinon = _interopRequireDefault(require("sinon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var spy = _sinon["default"].spy,
    stub = _sinon["default"].stub;
(0, _qunit.module)('Unit | Controller | authors', function (hooks) {
  (0, _emberQunit.setupTest)(hooks);
  hooks.beforeEach(function () {
    this.controller = this.owner.lookup('controller:authors');
  });
  (0, _qunit.test)('checks queryParams, filter, letter and limit', function (assert) {
    var controller = this.controller;
    assert.expect(3);
    assert.deepEqual(controller.queryParams, ['filter']);
    assert.equal(controller.filter, '');
    assert.equal(controller.limit, 'all');
  });
  (0, _qunit.test)('filteredList computed property', function (assert) {
    var controller = this.controller; //this model is order by name automatically 

    controller.model = [_object["default"].create({
      name: 'Richard Bach'
    }), _object["default"].create({
      name: 'Robert Kiyosaki'
    })];
    assert.expect(2);
    assert.deepEqual(controller.get('filteredList'), controller.model, 'no filter'); //robert must be first than Richard

    controller.set('filter', 'rob');
    assert.deepEqual(controller.get('filteredList'), [controller.model.objectAt(1)], 'filter by rob');
  });
});