"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** 
 * ES2015
 * ------------------------------------------------
 */

/** const, let */
var cst = 1;
var lt = 2;
console.log(cst);
console.log(lt);
/** Allow function */

var fn = function fn() {
  console.log('fn');
};
/** classes */


var Hoge = /*#__PURE__*/function () {
  function Hoge() {
    _classCallCheck(this, Hoge);
  }

  _createClass(Hoge, [{
    key: "fuga",
    value: function fuga() {
      console.log('fuga');
    }
  }]);

  return Hoge;
}();
/** 
 * ES2016
 * ------------------------------------------------
 */

/** Array.prototype.includes */


var array = [1, 2, 3, 4, 5];
console.log(array.includes(2));
/** べき乗演算子 */

console.log(Math.pow(2, 2));
/**
 * ES2017
 * ------------------------------------------------
 */

/** Async functions */

function log() {
  return _log.apply(this, arguments);
}
/** Object.values() */


function _log() {
  _log = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('hoge');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _log.apply(this, arguments);
}

var obj = {
  hoge: 0,
  fuga: 1,
  piyo: 2
};
console.log(Object.values(obj));
/**
 * ES2018
 * ------------------------------------------------
 */

/** Spread Properties */

var hoge = {
  fuga: 'piyo'
};
console.log(_objectSpread({}, hoge));
/** RegExp named capture groups */

console.log(/([0-9]{4})\u5E74/.test('2021年'));
/** RegExp Lookbehind Assertions */

console.log(/(?<=[0-9]+)\.[0-9]+/.test('.34'));
/**
 * ES2019
 * ------------------------------------------------
 */

/** flat array methods */

console.log([[1, 2], 3, 4].flat());
/**
 * ES2020
 * ------------------------------------------------
 */

/** Optional chaining operator */

console.log(hoge === null || hoge === void 0 ? void 0 : hoge.fuga);
/**
 * ES2021
 * ------------------------------------------------
 */

/** Logical assignment operators */

console.log(a || (a = b));
/** Numeric separators */

console.log(100000000);
/**
 * ESNext
 * ------------------------------------------------
 */

/** static class field */

var Foo = function Foo() {
  _classCallCheck(this, Foo);
};

_defineProperty(Foo, "bar", 1);

console.log(Foo.bar);
