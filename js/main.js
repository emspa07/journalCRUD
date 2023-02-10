let descriptionInput = document.getElementById ('description')
let goalInput = document.getElementById('goal')
let dayInput = document.getElementById('day')

let btnAdd = document.getElementById('btnAdd')

let formJournal = document.getElementById('formJournal')
let entriesDiv = document.getElementById('entries')

document.addEventListener('DOMContentLoaded', () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    
    if (tasks === null) {
        let paragraph = document.createElement("p")
        let textParagraph = document.createTextNode("No hay entradas en tu journal")
        
        paragraph.appendChild(textParagraph)
        entriesDiv.append(paragraph)
    } else {
        for (let i = 0; i <= tasks.length; i++){
            let taskDiv = document.createElement("div")
            let textDescriptionGoal = document.createTextNode(`${tasks[i].description}-${tasks[i].goal} `)
            
            let buttonDelete = document.createElement('button')
            let textButtonDelete = document.createTextNode('Eliminar')
            buttonDelete.appendChild(textButtonDelete)

            taskDiv.appendChild(textDescriptionGoal)
            taskDiv.appendChild(buttonDelete)

            entriesDiv.appendChild(taskDiv)
        }
    }

    btnAdd.addEventListener('click', (e) => {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || []

        let description = descriptionInput.value
        let goal = goalInput.value
        let day = dayInput.value

        let task = {
            "description": description,
            "goal": goal,
            "day": day
        }
        console.log(task)

        tasks.push(task)

        console.log(tasks)

        localStorage.setItem('tasks', JSON.stringify(tasks))

        for (let i = 0; i <= tasks.length; i++){
            let taskDiv = document.createElement("div")
            let textDescriptionGoal = document.createTextNode(`${tasks[i].description}-${tasks[i].goal} `)
            
            let buttonDelete = document.createElement('button')
            let textButtonDelete = document.createTextNode('Eliminar')
            buttonDelete.appendChild(textButtonDelete)

            taskDiv.appendChild(textDescriptionGoal)
            taskDiv.appendChild(buttonDelete)

            entriesDiv.appendChild(taskDiv)
        }
    })
})