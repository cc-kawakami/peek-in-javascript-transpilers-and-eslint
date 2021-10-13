var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var fn = function () {
    console.log('fn');
};
/** classes */
var Hoge = /** @class */ (function () {
    function Hoge() {
    }
    Hoge.prototype.fuga = function () {
        console.log('fuga');
    };
    return Hoge;
}());
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
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('hoge');
            return [2 /*return*/];
        });
    });
}
/** Object.values() */
var obj = { hoge: 0, fuga: 1, piyo: 2 };
console.log(Object.values(obj));
/**
 * ES2018
 * ------------------------------------------------
 */
/** Spread Properties */
var hoge = { fuga: 'piyo' };
console.log(__assign({}, hoge));
/** RegExp named capture groups */
console.log(/(?<year>[0-9]{4})年/.test('2021年'));
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
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.bar = 1;
    return Foo;
}());
console.log(Foo.bar);
