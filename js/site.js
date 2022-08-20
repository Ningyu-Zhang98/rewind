const Morse_Code = {
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----', 
}

const To_Letter = {
   ".-": "a", "-...":"b", "-.-.": "c", "-..": "d", ".":"e", 
   "..-.":"f", "--.":"g", "....":"h", "..":"i", ".---":"j", 
   "-.-":"k", ".-..":"l", "--":"m", "-.":"n", "---":"o", 
   ".--.":"p", "--.-":"q", ".-.":"r", "...":"s", "-":"t", 
   "..-":"u", "...-":"v", ".--":"w", "-..-":"x", "-.--":"y", 
   "--..":"z", ".----":"1", "..---":"2", "...--":"3", "....-":"4", 
   ".....":"5", "-....":"6", "--...":"7", "---..":"8", "----.":"9", 
   "-----":"0", "/":" "
}

//Get the letters string from the input 
//Controller function
function getValues(){
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    if (document.getElementById("inputReverse").checked) {
        userString = reverseString(userString)
    }
    let moreCode = toMorse(userString);
    displayString(moreCode);
}

//Get the morse code from the input
function getMorse(){
    document.getElementById("alertOutput").classList.add("invisible");
    let codedStr = document.getElementById("codedString").value;
    let msg = toLetters(codedStr)
    if (document.getElementById("decodeReverse").checked){
        msg = reverseString(msg)
    }
    displayDecode(msg)
}

//Translate morse codes to texts
function toLetters(code){
    let words = code.split('/')
    let letters = words.map((w) => w.split(' '));
    let decoded = []

    for(let i = 0; i < letters.length; i++){
        decoded[i] = [];
        for(let x = 0; x < letters[i].length; x++){
            if(To_Letter[letters[i][x]]){
                decoded[i].push(To_Letter[letters[i][x]] );
            } else {
                decoded[i].push(letters[i][x]);
            }
        }
    }
    return decoded.map(arr => arr.join('')).join(' ');
}

//Translate texts to morse codes
function toMorse(str){
    
    return str.toLowerCase().split('')
    .map(function(e){     // Replace each character with a morse "letter"
        return Morse_Code[e.toLowerCase()] || e.toLowerCase(); // Lowercase only, ignore unknown characters.
    })
    .join(' ')            // Convert the array back to a string.
    .replace(/ +/g, ' ');
    
}


//Reverse the string
function reverseString(uString){
    let revString = [];
    
    for(let index = uString.length-1; index>-1; index--){
        revString+=uString[index]
    }
    return revString
}


//Display the reversed string
//View functions
function displayString(codedStr){
    //Write to the page
    document.getElementById("msg").innerHTML = `${codedStr}` 
    //Show the alert box
    document.getElementById("alert").classList.remove("invisible");

}

//Display the output decoded message
function displayDecode(msg) {
    //Write to the page
    document.getElementById("msgOuput").innerHTML = `${msg}` 
    //Show the alert box
    document.getElementById("alertOutput").classList.remove("invisible");

}