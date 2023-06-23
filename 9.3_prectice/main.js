//---------------------- Q.1 ----------------------\\ 

let marks = {
    kaushal: 0,
    Jay: 100,           //  object
    Jamiesh: 90
}

console.log(marks);


for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log(" The markes of  " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

// Object.keys(marks)[i]        :- It gives the all name keys and also it return the array.
// marks[Object.keys(marks)[i]] :- " [Object.keys(marks)[i]] " It gives the all name keys  provides the value (Marks).



//---------------------- Q.2 ----------------------\\

for (let key in marks) {
    console.log(" The markes of  " + key + " are " + marks[key]);
}


//---------------------- Q.3 ----------------------\\

let cn = 4;
let i

while (i != cn) {
    console.log("Try again");
    i = prompt("Enter a number")
}

console.log("you have entered a correct number ");

//---------------------- Q.4 ----------------------\\


const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
}
console.log(mean(4, 5, 6, 7));