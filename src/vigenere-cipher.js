const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const ALPHABET_LENGHT = ALPHABET.length;

class VigenereCipheringMachine {
  constructor (reversed) {
    this.reversed = reversed !== true && reversed !== undefined;
  }
  encrypt (message, key) {
    return this.cipher(message, key, (symbolIndex, keyIndex, length) => {
      return (symbolIndex + keyIndex) % length;
    });
  }    
  decrypt (message, key) {
    return this.cipher(message, key, (symbolIndex, keyIndex, length) => {
      return (symbolIndex + length - keyIndex) % length;
    });
  }
  cipher (message, key, calcIndexFunc) {
    if (this.isCorrectArguments(message, key) && typeof calcIndexFunc === 'function') {
      let result = '';

      const currentMessageSymbols = this.reversed === true ? message.toUpperCase().split('').reverse() : message.toUpperCase().split('');
      let keyIndex = 0;
      let currentSymbolIndex;
      let currentKeyAlphabetIndex;
      currentMessageSymbols.forEach(symbol => {
        if ((currentSymbolIndex = ALPHABET.findIndex(el => el === symbol)) >= 0 &&
          (currentKeyAlphabetIndex = ALPHABET.findIndex(el => el === key[keyIndex].toUpperCase())) >= 0) {
          result += ALPHABET[calcIndexFunc(currentSymbolIndex, currentKeyAlphabetIndex, ALPHABET_LENGHT)];
          keyIndex = keyIndex + 1 < key.length ? keyIndex + 1 : 0;
        } else {
          result += symbol;
        }
      });
      return result;
    }
    throw new Error();
  }
  isCorrectArguments (message, key) {
    return message && key && typeof message === 'string' && typeof key === 'string' &&
      message.length > 0 && key.length > 0;
  }
}

module.exports = VigenereCipheringMachine;
