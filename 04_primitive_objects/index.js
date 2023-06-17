// nn ss bb u 
//                ----------- 7 PRIMITIVE -----------
let a = null
let b = 123
let c = true
let d = BigInt("567") + BigInt("3")
let e = "Kaushal"
let f = Symbol("i am a nice symbol")  
// let g = undefined
let g // this also undefined

console.log(a,b,c,d,e,f,g);
console.log(typeof c);  // we can known type using typeof

//                ----------- NON-PRIMITIVE DATATYPE (OBJECT) -----------

const item = {
    "kaushal" : true,
    "jay": false,
    "vivek":35,
    "max":undefined
}

console.log(item["kaushal"]);