import someScript2 from './script-2.ts';
console.log('import works :', someScript2)

const a = {'a': 'a'};
const b = {
  'b':'b',
  ...a
};
console.log('spread works: ', b)


console.log('testing out @babel/plugin-proposal-class-properties')
console.log('previously called transform-class-properties')
class Bork {
  //Property initializer syntax
  instanceProperty = "bork";
  boundFunction = () => {
  return this.instanceProperty;
  };

  //Static class properties
  static staticProperty = "babelIsCool";
  static staticFunction = function() {
  return Bork.staticProperty;
  };
}

let myBork = new Bork;

//Property initializers are not on the prototype.
console.log(myBork.__proto__.boundFunction); // > undefined

//Bound functions are bound to the class instance.
console.log(myBork.boundFunction.call(undefined)); // > "bork"

//Static function exists on the class.
console.log(Bork.staticFunction()); // > "babelIsCool"

export default 'exports from some-script.js'

