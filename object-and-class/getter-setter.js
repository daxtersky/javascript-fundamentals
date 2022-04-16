/**
 * * ACCESSOR PROPERTIES: SETTER & GETTER
 * 📚 https://javascript.info/property-accessors
 */


let developer = {
  name: 'Miko',
  nickName: 'Żuk',

  get fullData() { // * GETTER
    return `${this.name} aka ${this.nickName}`
  },
  set changeData(value) { // * SETTER
    [this.name, this.nickName] = value.split(" ");
  }
};
console.log(developer.fullData);
developer.changeData = 'Miko Miki'
console.log(developer.fullData);
