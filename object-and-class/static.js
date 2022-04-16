/**
 * * STATIC METHOD 
 * 📚 https://javascript.info/static-properties-methods
 * Static is assigned to the class itself, not to it's instances (prototypes)
 * Good for utility classes that don't change
 * Good for database related classes
 */

class JavaScript {
  static shortName = 'JS';
  static getName() {
    console.log('Hi my name is JavaScript');
  }
}
JavaScript.getName();

class TypeScript extends JavaScript {
  shortName = 'TS';
}
TypeScript.getName();

console.log('static prop:', JavaScript.shortName);
console.log('static prop: ', TypeScript.shortName); // takes property from static!
