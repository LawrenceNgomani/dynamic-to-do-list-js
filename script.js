// Setup event listener for page load
document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Task creation and removal
        // Create a new li element and set its textContent to taskText
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Assign onclick event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);
        
        // Append the li to taskList
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach event listeners
    // Add event listener to addButton that calls addTask when clicked
    addButton.addEventListener('click', addTask);

    // Add event listener to taskInput for 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        // Check if event.key is equal to 'Enter' before calling addTask
        if (event.key === 'Enter') {
            addTask();
        }
    });
});