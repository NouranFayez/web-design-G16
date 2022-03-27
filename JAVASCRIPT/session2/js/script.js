// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

/////////////////////// While Looping

/*
variable (start)
    while(condition){
        code .....




        increment++;
    }


*/


// var i = 1

// while(i <= 10){
//     console.log(i)
//     console.log("javascript")
//     i++
// }


//////////////////// For Looping

/*
for(start ; condition ; increment){
    codee .......
}
*/

// for(var i = 1 ; i <= 15 ; i++){
//       if(i == 12){
//        console.log("javascript")   
//        break
//       }
//      else if(i == 4) continue
//      else  console.log(i)

// }

///////////////////////// Function

/*
function name(){

}

name()

*/
///////////////////////////////
// function sumTwoNumbers(){
//     // console.log(4 + 5)
//     var sum = 4+5
//     return sum
//     // console.log("javascript")

// }

// var s = sumTwoNumbers()
// console.log(s)

// console.log(sumTwoNumbers())


// var p = prompt()

// console.log(s + 10)
/////////////////////////////

// var fullName 

// function getFullName(){
//    var firstName =  prompt("enter your First Name")
//    var lastName =  prompt("enter your Last Name")
//    fullName = firstName + " " + lastName 
// }

//  getFullName()

// console.log(fullName)
///////////////////////////////////

// var num1 = 40

// function sum(num1 , num2 , num3 = 100 , name = "marwa"){
//     console.log(name)
//     console.log(num2)
//     var s = num1 + num2 + num3
//     return s
// }

// var n = 4
// var n2 = 5

// var total = sum(n , n2)
// var total2 = sum(10 , 20 )
// var total3 = sum(10 , 15 , 5 , "nada")




// console.log(total)
// console.log(total2)
// console.log(total3)

// var p = prompt("enter your Name" , 'Nouran')
/////////////////////////////////////////////////////////////


//////////// function statment

// function getNumber(){
//     return 10
// }

// var num = getNumber()
// console.log(num)

//////////  function expression

// var getNumber = function(num1){
//     return 10
// }

// console.log(getNumber(20))


// var firstName ="nklnfk"

// console.log(firstName)

//////////////  arrow function

// var getFullName = (name)=>{
//     return 10
// }
// getFullName("nada")

////////////////////////////////////////////////////////////////////////////////////////////////

// var userName = "tamer"
// var userAddress = "october"
// var userPosition = "engineer"
// var userAge = 40

var userInfo = ["tamer" , "october" , "engineer" , 40 , true ]


var address = userInfo[1] // get item


userInfo[1] = "Maadi" // update item

userInfo[5] = "Egyptian" // set item

userInfo[userInfo.length] = "loreeeem"


// console.log(userInfo)
// console.log(userInfo.length)


///// Array Methods

var courses = ["html" , "css" , "bootstrap" , "Js"]

courses.push("Node" , "Angular" , "php")

courses.unshift(true , 20)

// courses.pop()
// courses.pop()

// courses.shift()
// courses.shift()

//////////////// splice(startIndex , deletedCount , item/s?)
//// remove item/s

courses.splice(4 , 2)


//// add item/s

courses.splice(1 , 0 , "lorem" , false )


//// add/remove item/s

courses.splice(6 , 2 , 300000 , false , 400000)

// console.log(courses)


var ids = [100 , 200 , 101 , 403]

console.log(ids.includes(101111))

// if(ids.includes(101111) == false) ids.push(101111)

if(!ids.includes(101111)){
    ids.push(101111)
} 


// console.log(ids)

var mergedArray = courses.concat(userInfo , ids)

// console.log(mergedArray.toString())
// console.log(mergedArray.join("--"))
console.log(mergedArray)

console.log(mergedArray[0])
console.log(mergedArray[1])
console.log(mergedArray[2])
console.log(mergedArray[3])
console.log(mergedArray[4])
console.log(mergedArray[5])
console.log(mergedArray[6])
console.log(mergedArray[7])
console.log(mergedArray[8])


for(var i = 0 ; i < mergedArray.length ; i++ ){
    console.log(mergedArray[i])
}

