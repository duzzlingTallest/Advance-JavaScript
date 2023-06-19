console.log("Opertrators");


//  			-------------1. Arithmetic Operatoros-------------

let a = 32
let b = 7

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a / b =", a / b);
console.log("a * b =", a * b);
console.log("a ** b =", a ** b);
console.log("a % b =", a % b);

console.log("++a =", ++a); // it will first increment and then print     
console.log("a++ =", a++);   // it will print and then first increment   
console.log("--a =", --a);
console.log("a-- =", a--);
console.log("a =", a);   // after incrimental the value has plus 


// 			-------------2. ASsignment Operatoros-------------

d = 1

d += 5 //same as d = d + 5
console.log("a is now = ", a);

d -= 5 //same as d = d - 5
console.log("a is now = ", a);

d *= 5 //same as d = d * 5
console.log("a is now = ", a);

d /= 5 //same as d = d / 5
console.log("a is now = ", a);

console.log(d);


// 			-------------3. Comparison Operators-------------

let comp1 = 7
let comp2 = 9
// let comp2 = "7"  // if this is string then "===" can't true it give FALSE


console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);

console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 != comp2);

console.log("comp1 < comp2 is ", comp1 < comp2);
console.log("comp1 > comp2 is ", comp1 > comp2);


//			-------------4. Logical Operators-------------

let x = 5;
let y = 6;

console.log(x>y && x==5);
console.log(x<y || x==5);
console.log(!false);
console.log(!true);

//  True True = True 
//  True False = False 
//  False True = False 
//  False False = False 
