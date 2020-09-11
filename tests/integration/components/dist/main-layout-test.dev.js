"use strict";

var _qunit = require("qunit");

var _emberQunit = require("ember-qunit");

var _testHelpers = require("@ember/test-helpers");

var _emberCliHtmlbars = require("ember-cli-htmlbars");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <MainLayout>\n        template block text\n      </MainLayout>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<MainLayout />"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _qunit.module)('Integration | Component | main-layout', function (hooks) {
  (0, _emberQunit.setupRenderingTest)(hooks);
  (0, _qunit.test)('it renders', function _callee(assert) {
    var component;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _testHelpers.render)((0, _emberCliHtmlbars.hbs)(_templateObject())));

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _testHelpers.render)((0, _emberCliHtmlbars.hbs)(_templateObject2())));

          case 4:
            component = this.element.querySelector('.container');
            assert.dom(component).hasClass('container', 'loaded correctly');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  });
});