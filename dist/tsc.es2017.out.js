/**
 * ES2015
 * ------------------------------------------------
 */
/** const, let */
const cst = 1;
let lt = 2;
console.log(cst);
console.log(lt);
/** Allow function */
const fn = () => {
    console.log('fn');
};
/** classes */
class Hoge {
    fuga() {
        console.log('fuga');
    }
}
/**
 * ES2016
 * ------------------------------------------------
 */
/** Array.prototype.includes */
const array = [1, 2, 3, 4, 5];
console.log(array.includes(2));
/** べき乗演算子 */
console.log(2 ** 2);
/**
 * ES2017
 * ------------------------------------------------
 */
/** Async functions */
async function log() {
    console.log('hoge');
}
/** Object.values() */
const obj = { hoge: 0, fuga: 1, piyo: 2 };
console.log(Object.values(obj));
/**
 * ES2018
 * ------------------------------------------------
 */
/** Spread Properties */
const hoge = { fuga: 'piyo' };
console.log(Object.assign({}, hoge));
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
class Foo {
}
Foo.bar = 1;
console.log(Foo.bar);
