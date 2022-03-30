
var myForm = document.getElementById("my_form")
var tasks = []
var taskContainer = document.getElementById("taskContainer")

myForm.addEventListener("submit" , function(e){
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target.elements.taskName.value)
    console.log(e.target.elements.taskType.value)
    addTask(e.target.elements.taskName.value , e.target.elements.taskType.value)
    showTasks()
})


function addTask(name , type){
    var task = {
        taskName : name,
        taskType : type , 
        status : false
    }
    tasks.push(task)
    // console.table(tasks)

}



function showTasks(){
    taskContainer.innerText = ""

    tasks.forEach((item , i)=>{
        var div = document.createElement("div");
        (item.status == false) ? div.classList.add("alert" , "alert-secondary") : div.classList.add("alert" , "alert-success")

        var h2 = document.createElement("h2")
        h2.innerText = item.taskName

        var h3 = document.createElement("h3")
        h3.innerText = item.taskType

        var completedTask = document.createElement("button")
        completedTask.innerText = "Completed Task"
        completedTask.classList.add("btn" , "btn-success" , "me-3")

        var removeTask = document.createElement("button")
        removeTask.classList.add("btn" , "btn-danger")
        removeTask.innerText = "Remove Task"

        div.append(h2)
        div.append(h3)
        div.append(completedTask)
        div.append(removeTask)

        taskContainer.append(div)

        completedTask.addEventListener("click" , function(){
          console.log(i)
          editTask(i)

        })

        removeTask.addEventListener("click" , function(){
            deleteTask(i)
        })


    })

}

function editTask(index){
    tasks[index].status = true
    showTasks()
}

function deleteTask(index){
    tasks.splice(index , 1)
    showTasks()
}




