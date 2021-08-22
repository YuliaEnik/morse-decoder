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
    let array = expr.match(/.{1,10}/g);
    let word = ''
    for (let i in array){
      word += getLetter(array[i]);
    }
    return word;
}

function getLetter(input){
   if (input === '**********') {
       return ' ';
   }
let  letters = input.match(/.{1,2}/g);
let word = '';
for (let i in letters){
    switch (letters[i]) {
    case '00':
        break;
    case '10':
        word += '.'
        break;
    case '11':
        word +='-'
        break;
    }
}
return MORSE_TABLE[word]
}


module.exports = {
    decode
}