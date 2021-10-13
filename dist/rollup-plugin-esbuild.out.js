var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj2, key, value) => key in obj2 ? __defProp(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __publicField = (obj2, key, value) => {
  __defNormalProp(obj2, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const cst = 1;
let lt = 2;
console.log(cst);
console.log(lt);
const array = [1, 2, 3, 4, 5];
console.log(array.includes(2));
console.log(2 ** 2);
const obj = { hoge: 0, fuga: 1, piyo: 2 };
console.log(Object.values(obj));
const hoge = { fuga: "piyo" };
console.log(__spreadValues({}, hoge));
console.log(/(?<year>[0-9]{4})年/.test("2021\u5E74"));
console.log(/(?<=[0-9]+)\.[0-9]+/.test(".34"));
console.log([[1, 2], 3, 4].flat());
console.log(hoge == null ? void 0 : hoge.fuga);
console.log(a || (a = b));
console.log(1e8);
class Foo {
}
__publicField(Foo, "bar", 1);
console.log(Foo.bar);
