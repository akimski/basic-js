const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    while (key.length < message.length) {
      key += key;
    }

    let messageArr = message.toLowerCase().split('');
    let keyArr = key.toLowerCase().split('');
    let keyPos = 0;
    let encryptedMessage = [];

    for (let letter of messageArr) {
      if (letter.match(/[a-z]/i)) {
        let encLetterPos = (alphabet.indexOf(letter) + alphabet.indexOf(keyArr[keyPos])) % 26;

        keyPos++;
        encryptedMessage.push(alphabet[encLetterPos].toUpperCase());
      } else {
        encryptedMessage.push(letter);
      }
    }

    return (this.direct) ? encryptedMessage.join('') : encryptedMessage.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error();
    }

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    while (key.length < encryptedMessage.length) {
      key += key;
    }

    let encryptedMessageArr = encryptedMessage.split('');
    let keyArr = key.toUpperCase().split('');
    let keyPos = 0;
    let message = [];

    for (let letter of encryptedMessageArr) {
      if (letter.match(/[A-Z]/i)) {
        let letterPos = (alphabet.indexOf(letter) + 26 - alphabet.indexOf(keyArr[keyPos])) % 26;

        keyPos++;
        message.push(alphabet[letterPos]);
      } else {
        message.push(letter);
      }
    }

    return (this.direct) ? message.join('') : message.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
