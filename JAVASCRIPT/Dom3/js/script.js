

// setTimeout(()=>{
//     console.log("javascript")
// } , 5000)

var h1 = document.getElementById("h1_id")
setTimeout(() => {
    h1.innerText = "web Design"
}, 5000)


// setInterval(()=>{
//     console.log("js")
//     console.log("html")
// } , 1000)


var counter = document.getElementById("counter")
var counter2 = document.getElementById("counter2")

// var i = 0
// var set = setInterval(()=>{

//     if(i == 1000){
//       clearInterval(set)  
//     }
//     else{
//         i+=10
//         counter.innerText = i
//     }
// } , 100)


function customSetInterval(start, clear, count, ele, time) {
    var i = start
    var set = setInterval(() => {

        if (i == clear) {
            clearInterval(set)
        }
        else {
            i += count
            ele.innerText = i
        }
    }, time)
}


// setInterval(()=>{

// } , time);

// setInterval(() => {

// }, interval);



// var customSet = ()=>{

// }

// customSet()






customSetInterval(0, 1000, 10, counter, 100)
customSetInterval(0, 3000, 100, counter2, 1000)



/// Relationship between elments
var ul = document.getElementById("my_ul")

var firstChild = ul.firstElementChild
firstChild.style.color = "red"
var lastChild = ul.lastElementChild
lastChild.style.background = "lightgray"
console.log(firstChild)

var customLi = document.querySelector("#myLi")
console.log(customLi.parentElement)

console.log(customLi.nextElementSibling)
console.log(customLi.previousElementSibling)



//////////////////////////////////////////////

// localStorage.setItem("firstName" , "Nouran")
// localStorage.setItem("id" , "123")
// localStorage.setItem("address" , "Nasr city")

localStorage.removeItem("id")


// var users = [{
//     name: "tamer",
//     age: 30,
//     address: "maadi"
// },
// {
//     name: "zain",
//     age: 10,
//     address: "maadi"
// },
// {
//     name: "marwa",
//     age: 30,
//     address: "maadi"
// }
// ]

// console.log(JSON.stringify(users))

// localStorage.setItem("usersInfo" , JSON.stringify(users))


var usersArr =JSON.parse(localStorage.getItem("usersInfo")) 

usersArr.push({
    name:"omar",
    age:10,
    address :"october"
})

console.log(usersArr)




 



// console.log(localStorage.getItem("firstName"))


sessionStorage.setItem("name" , "nouran")
sessionStorage.removeItem("address")
console.log(sessionStorage.getItem("id"))
