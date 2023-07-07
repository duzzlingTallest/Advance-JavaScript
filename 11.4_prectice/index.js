// Q1 

let a = " Kaushal\""  // \" This also count in String

console.log(a.length);

// Q2

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
                                                //          True : False  parameters
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"


    // Start with

    const str1 = 'Saturday night plans';

    console.log(str1.startsWith('Sat'));
    // Expected output: true

    console.log(str1.startsWith('Sat', 3));
    // Expected output: false
    
    // End with

    const str2 = 'Cats are the best!';

    console.log(str2.endsWith('best!'));
    // Expected output: true

    console.log(str2.endsWith('best', 17));
    // Expected output: true

    const str3 = 'Is this a question?';

    console.log(str3.endsWith('question'));
    // Expected output: false

// Q3

let k = "DAMANI"

console.log(k.toLowerCase());

// Q4
let rs = "please give Rs 1000"
let amount = rs.slice("please give Rs".length)

console.log(amount); 


// Q5 

let frd = "jay"

frd[1] = "r"

console.log(frd); // frd is not changed because string is immutable
