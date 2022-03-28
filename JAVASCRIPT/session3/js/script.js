

// function name(){

// }

// var user = function(){

// }

// var info = ()=>{

// }
////////////////////////////////////////////// Methods Of array
var userInfo = ["marwa", "developer", 30, "egyptian", true]

// for(var i = 0 ; i < userInfo.length ; i++){
//     console.log(userInfo[i])
// }

// console.log(userInfo)

userInfo.forEach((element, i, arr) => {
    // console.log(element)
    // console.log(i)
    // console.log(arr)

})


var numbers = [20, 4, 10, 30, 5, 1, 60, "js"]


// var findItem = numbers.find(element => element > 10)
var findItem = numbers.find(element => element > 100)
// console.log(findItem)

if (findItem == undefined) numbers.push(100)


// var findIndex = numbers.findIndex(val => val == 10)
// var findIndex = numbers.findIndex(val => val > 10)
// var findIndex = numbers.findIndex(val => val > 100)
// var findIndex = numbers.findIndex(val => val == "js")

// var arr = numbers.filter(item => item > 10)
var arr = numbers.filter(item => item > 200)


///////////////////////////////////////////////////
// var ages = [3, 10, 18, 20];

// var a = ages.find(checkAge);

// function checkAge(age) {
//   return age > 18;
// }

// console.log(a)
///////////////////////////////////////////////////////


// var firstName = "zain"
// var lastName = "tamer"
// var age = 30
// var isGraduated = true




var info = ["zain", "tamer", 30, true]

console.log(info[0])
///////////////////////////////////// Object
var clientInfo = {
    firstName: "zain",
    lastName: "tamer",
    age: 30,
    isGraduated: true,
    fullName: function (familyName) {
        return this.firstName + " " + this.lastName + " " + familyName
    },
    numbers: function () {
        return {
            mobile: 11111111111,
            phone: 22222222
        }
    },
    homeAddress: {
        address1: "nasr city",
        address2: "october"
    },
    ids: [1, 2, 3, 4, 5]

}

console.log(clientInfo.firstName) // get value
clientInfo.address = "maadi" // set value
clientInfo.age = 20 // update value

// console.log(clientInfo)

// console.log(clientInfo.fullName("ahmed"))
// console.log(clientInfo.numbers())
// console.log(clientInfo.numbers().mobile)


var user1 = {
    name: "ahmed",
    address: "nasr city",
    age: 10
}
var user2 = {
    name: "Nada",
    address: "october",
    age: 15
}
var user3 = {
    name: "tamer",
    address: "maadi",
    age: 20
}
/////////////////////// array of objects
var users = [{
    name: "ahmed",
    address: "nasr city",
    age: 10
},
{
    name: "Nada",
    address: "october",
    age: 15
},
{
    name: "tamer",
    address: "maadi",
    age: 20
},


]

// users.splice(1 , 2)




// users.forEach((item)=>{
//     // console.log(item)
// })


// var item = users.find(ele => ele.address == "october")
// console.log(item.name)

// users.push({
//     name : "omar" ,
//     age : 5,
//     address : "maadi"
// })
console.log(users)
console.table(users)

//////////////////////////////////////////////////////////
/////////// function statment
// function getFullName(){
//     return "ahmed"
// }
// var fName = getFullName()

////////// function expression
// var fName = function(){
//     return "ahmed"
// }
// fName()

////////////// Arrow Function
// var fName = ()=>{
//     return "ahmed"
// }
// fName()
////////////////////////////////////////////////////////////
