import someScript2 from './script-2.js'
console.log('import works : ', someScript2)
console.log('polyfill work: ', typeof String.prototype.padStart === 'function')


const a = {'a': 'a'}
const b = {
  'b': 'b',
  ...a
}
console.log('spread works: ', b)


class Bork {
  static staticProperty = 'staticProperty'
  static getStaticProperty = () => Bork.staticProperty
  instanceProperty = 'instanceProperty'
  getInstanceProperty = () => this.instanceProperty
}

let myBork = new Bork
console.log('Tesing out @babel/plugin-proposal-class-properties')
console.log('Property initializers are not on the prototype: ', myBork.__proto__.boundFunction === undefined)
console.log('Instance property works: ', myBork.getInstanceProperty() === 'instanceProperty')
console.log('Static property works: ', Bork.getStaticProperty() === 'staticProperty')
