const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [...expr].slice();
  let arrLetter = [];
  let arrPhrase = [];

  for (let i = 0; i < [...expr].length; i = i + 10) {
    let letter = arr.splice(0, 10);

    if (letter.includes("*")) {
      arrPhrase.push(" ");
    }
    let counter = letter.length;
    for (let i = 0; i < counter; i = i + 2) {
      let sign = letter.splice(0, 2);

      if (sign[0] == "1" && sign[1] == "0") {
        arrLetter.push(".");
      } else if (sign[0] == "1" && sign[1] == "1") {
        arrLetter.push("-");
      }
    }
    arrPhrase.push(MORSE_TABLE[arrLetter.join("")]);

    arrLetter = [];
  }
  return arrPhrase.join("");
}

module.exports = {
    decode
}