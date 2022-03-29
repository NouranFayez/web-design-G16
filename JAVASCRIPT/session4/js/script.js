///////////////////////// Methods Of String

var str = "                 LOREM IPSUM DOLOR LOREM SIT AMET CONSECTETUR            "

// console.log(str.length)
// console.log(str.startsWith("test"))
// console.log(str.includes("dolor"))
// console.log(str.endsWith("consectetur"))
// console.log(str.replace("lorem" , "test"))
// console.log(str.replaceAll("lorem" , "test"))
// console.log(str.trim())
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

var num = 10

// console.log(String(num))
// console.log(num)

var s = String(num)

// console.log(typeof num)
// console.log(typeof s)

var fName = "nouran"

// console.log(fName[0])



///////////////////////////////////////// Methods Of Numbers

var t = 10 / "html"

console.log(t) // NaN = Not a Number

var n = 20

// console.log(isNaN(n))

// isNaN() = false ==> number

// console.log(Math.abs(-2))
// // 2.7 ==> 3
// console.log(Math.round(2.7))

// console.log(Math.ceil(4.3))

// console.log(Math.floor(4.9))
// console.log(Math.min(20  , 5 , 10 , -3))
// console.log(Math.max(20  , 5 , 10 , -3))

// console.log(Math.round(Math.random()*100))


// var n = "20"
// var n = "20.30"
// var n = "50html"
// var n = "7 40 100"
// var n = "JS 100"
// var f = "1.503"
// var f = "1.503html"

// console.log(parseInt(n))

// console.log(parseFloat(f))


/////////////////////////////// Date Methods

var d = new Date()
console.log(d)
console.log(d.getFullYear())
console.log(d.getMonth()) // 0 : 11
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

var currentMonth = month[d.getMonth()]
console.log(currentMonth)

console.log(d.getDate())
console.log(d.getDay()) // 0 : 6  strating from sunday

console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())


/////////////////////////////////// owl carousel implementation

$('.owl-carousel').owlCarousel({
    margin : 40 ,
    // center : true ,
    loop:true ,
    nav: true ,
    navText : ['<h1>Prev</h1>' , '<h1 class="bg-primary">Next</h1>' ] ,
    dots : false ,
    responsive:{
               0:{
                   items : 1,
                   autoplay:true,
                   autoplayTimeout: 2000
               },
               992:{
                   items:2,
                   autoplay : false
               }
            }
})










// {
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// }


