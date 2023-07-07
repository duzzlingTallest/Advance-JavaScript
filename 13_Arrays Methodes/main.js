//  Arrays Methode's

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// toString()

let b = num.toString()

console.log(b, typeof b);

console.log("----------- join -----------");
// join()

let c = num.join("_")

console.log(c);

console.log("----------- POP -----------");
// pop()

num.pop()

console.log(num);

console.log("----------- POP return -----------");
// Pop returns the popped element

let r = num.pop()

console.log(num, r);

console.log("----------- PUSH -----------");
// Push returns the new array length

let d = num.push(10)

console.log(num);

console.log("----------- Shift -----------");
// shift()

let e = num.shift()

console.log(e,num);

console.log("----------- unShift -----------");
// unShift()

let f = num.unshift(77)

console.log(f,num);