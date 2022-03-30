

// console.log(document.getElementById("text_id"))
// console.log(document.getElementsByTagName("h1"))


// var h1 = document.getElementById("text_id")
// h1.textContent = "Javascript"

// var h1Tags = document.getElementsByTagName("h1")

// h1Tags[1].innerText = "Bootstrap"


// for(var i = 0 ; i < h1Tags.length ; i++){
//     h1Tags[i].textContent = "bla bla bla"
// }


// var h2Class = document.getElementsByClassName("h2_class")
// console.log(h2Class)


// var p = document.querySelector(".p_class")
var paragraphs = document.querySelectorAll(".p_class")

// p.innerText = "web design"
console.log(paragraphs)
/////////////////////////////////////////////////////////////////////////////////


var div = document.getElementById("div_id")

// div.style.color = "red"
// div.style.backgroundColor = "lightgray"
// div.style.fontSize = "40px"

div.classList.add("custom_style")
div.classList.remove("custom_padding")
div.classList.toggle("test_class")

console.log(document.forms)
console.log(document.images[0].alt)
document.images[0].alt = "bla bla "
document.images[0].width = "500"
console.log(document.title)
document.title = "Js Dom 1"

console.log(document.scripts)
console.log(document.links) // a tags
console.log(document.head) 






