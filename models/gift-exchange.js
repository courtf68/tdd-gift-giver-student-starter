const { BadRequestError } = require("../utils/errors.js");

class GiftExchange {
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //math code in class
  }

  static pairs(names) {
    if (!names) {
      throw "can't make pairs w o array";
    }
    const isOdd = names?.length % 2 === 1;
    if (isOdd) {
      throw BadRequestError("can't pair odd # of names");
    }
    const namesToUse = [...names]; //spread makes copy
    const pairs = [];

    while (namesToUse.length > 0) {
      const fperson = namesToUse.pop(); //for ret tuples
      const randix = GiftExchange.getRandomInt(0, namesToUse.length);
      const sperson = namesToUse[randix];
      if (fperson && sperson) {
        pairs.push([fperson, sperson]);
      }
      return false;
    }
  }
  static traditional(names) {
    if (!names) {
      throw "can't make traditional w o array";
    }
    const namesToUse = [...names]; //spread makes copy
    const exPairs = [];
    let currPerson = namesToUse.pop();
    const firstPerson = currPerson;
    while (namesToUse.length > 0) {
      const randIdx = GiftExchange.getRandomInt(0, namesToUse.length);
      const toWho = namesToUse[randIdx];
      namesToUse.splice(randIdx, 1);
      const newLine = `${currPerson} is giving a gift to ${toWho}`;
      currPerson = toWho;
      exPairs.push(newLine);
    }
    const lastLine = `${currPerson} is giving a gift to ${firstPerson}`;
    exPairs.push(lastLine);

    return exPairs;
  }
}

module.exports = GiftExchange;
