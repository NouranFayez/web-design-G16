
var div = document.getElementById("main_div")

var paragraph = document.createElement("p") 
paragraph.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eligendi dignissimos unde suscipit officiis"
console.log(paragraph)


var aTag = document.createElement("a")
aTag.innerText = "google"

aTag.href = "#top"
aTag.id = "a_id"


var h1Tag = document.createElement("h1")
h1Tag.innerText = "web design"

// div.append(paragraph)
div.prepend(paragraph)

div.append(aTag)

div.append(h1Tag)
