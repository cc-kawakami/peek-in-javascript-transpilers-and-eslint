const cst = 1;
let lt = 2;
console.log(cst);
console.log(lt);
const fn = () => {
  console.log("fn");
};
class Hoge {
  fuga() {
    console.log("fuga");
  }
}
const array = [1, 2, 3, 4, 5];
console.log(array.includes(2));
console.log(2 ** 2);
async function log() {
  console.log("hoge");
}
const obj = { hoge: 0, fuga: 1, piyo: 2 };
console.log(Object.values(obj));
const hoge = { fuga: "piyo" };
console.log({ ...hoge });
console.log(/(?<year>[0-9]{4})年/.test("2021\u5E74"));
console.log(/(?<=[0-9]+)\.[0-9]+/.test(".34"));
console.log([[1, 2], 3, 4].flat());
console.log(hoge?.fuga);
console.log(a ||= b);
console.log(1e8);
class Foo {
  static bar = 1;
}
console.log(Foo.bar);
