let name = "Kaushal"

console.log(name.length);

console.log(name.toUpperCase());  // toUpperCase() is a function

console.log(name.toLowerCase());  // toLowerCase() is a function

console.log(name.slice(2, 4));

console.log(name.slice(2));

// replace

let name1 = "Kaushal Bhai"

console.log(name1);

let newName = name1.replace("Bhai", "Damani")

console.log(newName);

// concate

let Name = "Kaushal"
let Name1 = "Damanai"

let Name2 = Name.concat(" surname is ", Name1)

let Name3 = Name += (" surname is ", Name1)

console.log(Name2);

console.log(Name3);

// trim

let fd = "          jay            "

console.log(fd.trim());

//

const k = "Hari" + "Kaushal" + "Jay"

console.log(k[2]);
console.log(k);

// Quick Quiz  = Use a for loop to print a String

let a = "JavaScript"

for (var i = 0; i < a.length;) {
    console.log(a.charAt(i));
    i++;
}