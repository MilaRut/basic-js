const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;
    const keyLength = key.length;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (char.match(/[A-Z]/)) {
        const messageCharCode = char.charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCharCode = key[keyIndex % keyLength].charCodeAt(0) - 'A'.charCodeAt(0);
        const encryptedChar = String.fromCharCode(((messageCharCode + keyCharCode) % 26) + 'A'.charCodeAt(0));
        result += encryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (typeof encryptedMessage !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;
    const keyLength = key.length;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];

      if (char.match(/[A-Z]/)) {
        const encryptedCharCode = char.charCodeAt(0) - 'A'.charCodeAt(0);
        const keyCharCode = key[keyIndex % keyLength].charCodeAt(0) - 'A'.charCodeAt(0);
        const decryptedChar = String.fromCharCode(((encryptedCharCode - keyCharCode + 26) % 26) + 'A'.charCodeAt(0));
        result += decryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
