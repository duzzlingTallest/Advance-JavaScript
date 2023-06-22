let a = prompt("Hey what you age ?")  // prompt make a string 
a = Number.parseInt(a) // This is a type casting .converting a string to a number

if (a<0) {
    alert("This is an invalid age..")
}

else if (a<9) {
    alert("You are a kid you can not think of driving ..")
}

else if (a<18 && a>=9) {
    alert("You are a kid you can think of driving after 18..")
}

else{
    alert("YOU CAN DRIVE ABOVE AGE 18...")
}

//				-----------------------Ternary Operator-----------------------

console.log("you can",(a<18? "not drive" : "drive"));