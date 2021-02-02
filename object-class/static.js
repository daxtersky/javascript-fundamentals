// !

// * static methods are assigned to the class itself, not to it's instances
// * static methods for utility classes that don't change
class JavaScript {
  static getName() {
    console.log('Hi my name is JavaScript');
  }
}
JavaScript.getName();