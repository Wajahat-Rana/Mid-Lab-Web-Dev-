const form = document.getElementById("form")
const todos = document.getElementById("todos")
const addTaskBtn = document.getElementById("addTaskBtn")
const input = document.getElementById("input")
const checkbox = document.getElementById('checkbox')

function addTask() {
    if (input.value != '') {

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'checkbox')

        let newTask = document.createElement('li')
        newTask.classList.add('in-row')
        newTask.innerText = input.value

        let deleteBtn = document.createElement('button')
        deleteBtn.innerText = 'Delete'

        deleteBtn.addEventListener('click', () => {
            deleteTask(newTask)
        })
        let editBtn = document.createElement('button')
        editBtn.innerText = 'Edit'
        editBtn.addEventListener('click', () => {
            editTask(newTask, div)
        })
        checkbox.addEventListener('click', () => {
            checkedTask(newTask);
        })
        newTask.appendChild(checkbox);

        let options = document.createElement('div')
        options.appendChild(deleteBtn);
        options.appendChild(editBtn);
        options.classList.add('in-row')
        options.style.gap = '10px'
        
        newTask.appendChild(options)
        todos.appendChild(newTask)
        input.value = '';
    }
}

function deleteTask(newTask) {
    todos.removeChild(newTask)
}

//Once you click on Edit button the text available in input tag will be swapped
function editTask(newTask) {
    newTask.innerText = input.value;

}

function checkedTask(newTask) {
    newTask.classList.toggle('completed')
}
