function clearDisplay() {
    document.getElementById('calc-display').value = '';
}

function deleteLast() {
    let display = document.getElementById('calc-display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('calc-display').value += value;
}

function calculateResult() {
    try {
        let display = document.getElementById('calc-display');
        display.value = eval(display.value);
    } catch {
        alert('Invalid Expression');
    }
}

// To-Do List Functions
function addTask() {
    let taskInput = document.getElementById('todo-input');
    let taskValue = taskInput.value.trim();

    if (taskValue) {
        let taskList = document.getElementById('todo-items');
        let taskItem = document.createElement('li');

        taskItem.textContent = taskValue;
        taskItem.onclick = function() {
            this.classList.toggle('completed');
        };

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}