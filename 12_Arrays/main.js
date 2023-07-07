let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, false, "not present"]


console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[11]);

console.log("=======================================");

// length
console.log("This is length of Array", num.length);

console.log("==================== Add ===================");

// add value

num[12] = 'Hello im add'

console.log(num);

console.log("==================== Chankging ===================");

// Changing Value

num[12] = "Hello I'm Change"

console.log(num);

console.log("==================== type of ===================");

// type of 

console.log(typeof num);


console.log("==================== Quick Quiz ===================");

// QuickQuiz: Use a for loop to print a arry element

console.log("Using For Loop");

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);

}