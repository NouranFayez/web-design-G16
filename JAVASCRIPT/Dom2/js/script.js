var img = document.querySelector("#custom_img")

function changeImage(){
    console.log(img.src);
    // if(img.src == "file:///C:/Users/Nouran%20Fayez/Desktop/web-design-G16/JAVASCRIPT/Dom2/images/msid-88239775,width-96,height-65.cms")
    // img.src = "images/wp3505739.jpg"
    // else 
    // img.src = "images/msid-88239775,width-96,height-65.cms"

    (img.src == "file:///C:/Users/Nouran%20Fayez/Desktop/web-design-G16/JAVASCRIPT/Dom2/images/msid-88239775,width-96,height-65.cms") ?
    img.src = "images/wp3505739.jpg" :
    img.src = "images/msid-88239775,width-96,height-65.cms"

}

// var div = document.querySelector(".custom_div")

function changeBgColor(type , element){
    (type == 'enter') ?
    element.style.backgroundColor = "lightpink" :
    element.style.backgroundColor = "lightgray"
}



// function changeBgColor2(){
//     div.style.backgroundColor = "lightgray"
// }



// var user = {
//     firstName : "tamer" ,
//     fullName : function(){
//         return this.firstName
//     }
// }



var inputTag = document.getElementById("custom_input")


inputTag.addEventListener("input" , function(e){
    // console.log(inputTag.value)
    // console.log(e.target.value)
    console.log("typing .....")
})
inputTag.addEventListener("change" , function(e){
    console.log(e.target.value)

    console.log("input changed")
})

var selectTag = document.querySelector("#custom_select")

selectTag.addEventListener("change" , function(e){
    console.log(e.target.value)
    console.log(e.path[0].value)
})

var section = document.getElementById("scroll_section")

section.addEventListener("scroll" , function(){
    console.log("section is scrolling .....")
    console.log(section.scrollTop)
    if(section.scrollTop > 200) {
        section.style.backgroundColor = "black"
    }
    else section.style.backgroundColor = "olive"

})


var topBtn = document.getElementById("topBtn")

window.addEventListener("scroll" , function(){
    console.log("window is scrolling ....")

    if(document.documentElement.scrollTop > 400)
    topBtn.style.display = "block"
    else topBtn.style.display = "none"
})


// Dom ==> document object model
// Bom ==> browser object model










