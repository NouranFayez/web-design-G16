
var firstName = "nouran";
// console.log("javascript") ;
// console.log(firstName) ;

var lastName = 'ahmed'
var age = 10

var age = "html"

var isGraduated = false
// console.log(isGraduated)

var familyName // undefined

var x = null

// console.log(familyName)
// console.log(x)

/*

code .....

*/


var num1 = 4
var num2 = 5
var sum = num1 + num2

// console.log(sum) // 9
// ++ ==> increment

// console.log(++sum)
// console.log(sum++)
// console.log(sum)


// -- ==> decrement

// console.log(--sum)
// console.log(sum--)
// console.log(sum)


var userFirstName = "zain"
var userLastName = "Ahmed"

var fullName = userFirstName + " tamer " + userLastName

var g = 4 / fullName

// console.log(fullName)
// console.log(g)


/////////////////////////////////////////////// Assignment operators (shortcut Operators)

var a = 3
// a = a + 5

// console.log(a+=10)



// console.log(typeof(fullName))
// console.log(typeof(a))
// console.log(typeof isGraduated)

//////////////////////////////////////////// -- Comparison Operators ==> (> , >= , < , <= , == , ===  , != , !== )

var y = 5
var x = 10
var w = 10

// console.log( x > y)
// console.log( x < y)
// console.log(x >= w)
// console.log(x <= w)


var n = 10 // number
var m = "10"


// console.log(n == m) // value = true
// console.log(n === m) // value - datatype = false


// console.log(n == "10")
// console.log(n === "10")

// console.log(typeof n)
// console.log(typeof n == "Number")

// console.log(n != m) // value =  false
// console.log(n !== m) // value , datatype =  true



// var p = prompt("enter your name" , 'ahmed')

// console.log(p)

/////////////////////////////////////// -- logical operator ==> && , || , !



// console.log(p === "nouran")
// console.log(p === "")

var f = 3
// && => true , true , true , ........ = true
// && => true , false , true , ........ = false
// console.log(p == "nouran" && p === "" && f == 3 && typeof f == "number")
// console.log(p == "nouran"  && f == 3 && typeof f == "number")



// || => true , false , false , ........ = true
// || => false , false , false , ........ = false
// console.log(p == "nouran" || p === "" || f == 3 || typeof f == "string")




var num  // undefined
num = 0
var num = 10
var num = ""
var num = " "
var num = "html"


// console.log(!num)



///////////////////// Ternary Operator


/*

(condition) ? true ..... : false ....

*/

// var prom = prompt("enter your age")

// prompt() ==> return string

// console.log(prom);
// var result ; // undefined


// (prom == 20) ? result = "correct" : result = "wrong"

// (prom == null) ? result = "wrong" : result = "correct"


// null = false 
// "" = false
// value = true 


// (!prom) ? result = "correct" : result = "wrong" ;



// (prom === "20" && typeof prom == "string") ? result = "correct" : result = "wrong"
// (prom === "20" || typeof prom == "string") ? result = "correct" : result = "wrong"




// console.log(typeof prom)
// console.log(result) 



////////////////////////////////////  if/else statment 

/*
if(condition){
    true ......
}
else {
    false ........
}

*/

// var job = prompt("enter your Job")



// if(job == null || job == "") console.log("enter a correct job")

// else if(job == "developer"){
//     var res = "valid job = " + job
//     console.log(res)
// }
//  else if(job == "engineer"){
//     console.log("engineer")
//  }
//  else if(job == "doctor" || job == "nurse"){
//      console.log("he is a doctor/nurse")
//  }

//  else{
//      console.log("invalid Job")
//  } 




// if (job == null || job == "") console.log("enter a correct job")

// else {
//             if (job == "developer") {
//                 var res = "valid job = " + job
//                 console.log(res)
//             }
//             else if (job == "engineer") {
//                 console.log("engineer")
//             }
//             else if (job == "doctor" || job == "nurse") {
//                 console.log("he is a doctor/nurse")
//             }

//             else {
//                 console.log("invalid Job")
//             }
// }




///////////////////// Switch Case Statment




/*
    variable 

    switch(variable){
        case value : code ...
        case value : code ...
        case value : code ...
        case value : code ...
        case value : code ...
        default: code ......
    }

    */

// var job = prompt("enter your Job")
// var job = 0
var job = true
switch (job) {
    case "doctor":
    case "nurse":
        console.log("he is a doctor / nurse")
        console.log("html")
        console.log("Js")
        break
    case "developer":
        var res = "valid job = " + job
        console.log(res)
        break
    case "eng":
        console.log("engineer")
        break
    case 0:
        console.log("zero")
        break
    case true:
        console.log("boolean type")
        break
    default: console.log("invalid job")

}





