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
let arr10 = [];
    for(let i=0;i<expr.length; i+=10){
      arr10.push(expr.substr(i,10))
    }

let result = '';
arr10.forEach(el=>{
    if (el === '**********'){
        result+=' ';
    }
    else
    {
        result+=MORSE_TABLE[toMorse(el)]
    }
})
return result;

}

module.exports = {
    decode
}


let toMorse = function (expr10){
let morseString= '';
let arr = [];
    for(let i=0;i<expr10.length; i+=2)
    {
      arr.push(expr10.substr(i,2))
    }
  for(j=0;j<arr.length;j++)
{
    if(arr[j] !==0)
    {
    if(arr[j]==='01' || arr[j]==='10'){
    morseString+= '.'
     }
        if(arr[j]==='11'){
        morseString+='-'
        }
    }
}

return morseString;
}


