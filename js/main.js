const form= document.getElementById('formJournal')
const inputTask = document.getElementById('goal')
const inputDay = document.getElementById('day')
const tasks = document.getElementById('entries')


form.addEventListener('submit', function(event){
    event.preventDefault()
    acceptData()
    event.target.reset()
})

let data=[]
let acceptData = () => {
    data.push({
     text: inputTask.value,   
     day: inputDay.value
    })
  localStorage.setItem("data", JSON.stringify(data))
  console.log (data)  

  createTask()
}

let createTask = () => {
    tasks.innerHTML = ""
    data.map ((x,y)=>{
        return (tasks.innerHTML +=  `<div id=${y}> 
        <span>${x.text}</span> 
        <span class="opciones"><i onclick="editTask(this)" class="fa-regular fa-pen-to-square"></i>
        <i onClick = "deleteTask(this);createTask()" class="fa-solid fa-trash-can"></i></div>`)
    })

    resetForm();
}

let deleteTask = (e) =>{
e.parentElement.parentElement.remove ()
  data.splice(e.parentElement.parentElement.id, 1)
  localStorage.setItem("data", JSON.stringify(data))
  console.log(data)
}

let editTask = (e) =>{
    let selectedTask = e.parentElement.parentElement

    inputTask.value = selectedTask.children[0].innerHTML,
    inputDay.value = selectedTask.children[1].innerHTML

    deleteTask(e)
}

let resetForm = () => {
    inputTask.value = ""
    inputDay.value = ""
}

(() => {
    data = JSON.parse(localStorage.getItem("data")) || []
    createTask()
    console.log(data)
  }) ()