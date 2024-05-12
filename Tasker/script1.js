var Categoryy = document.querySelector('.left-2');
var CategoryyPopup = document.querySelector('.popup');
Categoryy.addEventListener("click", function() {
    if (CategoryyPopup.style.display == "block") {
        CategoryyPopup.style.display = "none";
    } else {
        CategoryyPopup.style.display = "block";
    }
});

var AddTaskButton = document.querySelector('.add-task');
var CancelTaskButton = document.querySelector('.Task-cancel');
AddTaskButton.addEventListener("click", function() {
    var TaskPopup = document.querySelector('.task-popup');
    TaskPopup.style.display = "block";
});
CancelTaskButton.addEventListener("click", function() {
    console.log("Cancel Task button clicked!");
    var TaskPopup = document.querySelector('.task-popup');
    TaskPopup.style.display = "none";
});

var TaskAddButton = document.querySelector('.Task-add');
TaskAddButton.addEventListener("click", function() {
    var taskName = document.querySelector('.task-popup input[type="text"]').value;
    var NameTask=document.querySelector('.add-task-1 input')
    NameTask.value=""
    var categorySelect = document.querySelector('.task-popup select');
    var selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;

    var newTask = document.createElement('div');
    newTask.classList.add('middle');

    var checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('flex-1');
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('check')
    var checkboxSpan = document.createElement('span');
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkboxSpan);

    var taskInfoContainer = document.createElement('div');
    taskInfoContainer.classList.add('flex-2');
    var taskNameElement = document.createElement('h5');
    taskNameElement.textContent = taskName;
    var ImgCateg = document.createElement('div')
    ImgCateg.classList.add('middle-flex')
    var categoryImage = document.createElement('img');
    categoryImage.src = getCategoryImage(selectedCategory);
    categoryImage.classList.add('imgg');
    var categoryNameElement = document.createElement('p');
    categoryNameElement.textContent = selectedCategory;
    ImgCateg.appendChild(categoryImage)
    ImgCateg.appendChild(categoryNameElement)

    function getCategoryImage(category) {
        if (category === "None") {
            return "https://tinyurl.com/ycynv9a6"
        } else if (category === "Home") {
            return "https://tinyurl.com/uc44sjzv";
        } else if (category === "School") {
            return "https://tinyurl.com/437hyf7t";
        } else if (category === "Shopping list") {
            return "https://tinyurl.com/uzecftzp";
        } else {
            return "";
        }
    }

    taskInfoContainer.appendChild(taskNameElement);
    taskInfoContainer.appendChild(ImgCateg);

    var editDeleteContainer = document.createElement('div');
    editDeleteContainer.classList.add('edit-delete');
    var editButton = document.createElement('img');
    editButton.src = "https://th.bing.com/th/id/OIP.IlMn0uiTq6u4q1BE6ekn0wHaHa?w=800&h=800&rs=1&pid=ImgDetMain";
    editButton.classList.add('edit');
    var deleteButton = document.createElement('img');
    deleteButton.src = "https://th.bing.com/th/id/OIP._7ha0zXBoYOS6jofOfuX_gHaHa?rs=1&pid=ImgDetMain";
    deleteButton.classList.add('delete');

    editDeleteContainer.appendChild(editButton);
    editDeleteContainer.appendChild(deleteButton);

    newTask.appendChild(checkboxContainer);
    newTask.appendChild(taskInfoContainer);
    newTask.appendChild(editDeleteContainer);

    var referenceElement = document.querySelector('.add-task');
    referenceElement.parentNode.insertBefore(newTask, referenceElement);

    var TaskPopup = document.querySelector('.task-popup');
    TaskPopup.style.display = "none";


    addDeleteEventListener();
    Check();
});
addDeleteEventListener();
Check();


function Check() {
    var checkButtons = document.querySelectorAll('.check');
    checkButtons.forEach(function(checkButton) {
        checkButton.addEventListener('click', function() {
            var taskNameElement = this.closest('.middle').querySelector('h5');
            if (this.checked) {
                taskNameElement.style.textDecoration = "line-through";
                taskNameElement.style.color="grey"
            } else {
                taskNameElement.style.textDecoration = "none";
                taskNameElement.style.color="black"
            }
        });
    });
}



function addDeleteEventListener() {
    var deleteIcons = document.querySelectorAll('.delete');
    deleteIcons.forEach(function(deleteIcon) {
        deleteIcon.addEventListener("click", function() {
            var deleteTaskPopup = document.querySelector('.delete-task');
            deleteTaskPopup.style.display = "block";
            var parentTask = deleteIcon.closest('.middle');
            var deleteButton = document.querySelector('.delete-delete');
            deleteButton.addEventListener("click", function() {
                parentTask.remove();
                deleteTaskPopup.style.display = "none";
            });
        });
    });
}

var cancelTaskPopup = document.querySelector('.delete-cancel');
cancelTaskPopup.addEventListener("click", function() {
    var deleteTaskPopup = document.querySelector('.delete-task');
    deleteTaskPopup.style.display = "none";
});


function filterTasks(filterType) {
    var tasks = document.querySelectorAll('.middle');
    var NameEle=document.querySelector('.top h1')

    tasks.forEach(function(task) {
        var taskNameElement = task.querySelector('h5');
        if (filterType === 'All' || (filterType === 'Done' && taskNameElement.style.textDecoration === 'line-through') || (filterType === 'Not Done' && taskNameElement.style.textDecoration !== 'line-through')) {
            task.style.display = 'flex';
            NameEle.textContent=filterType+" Tasks";
        } else {
            task.style.display = 'none';
        }
    });
}
var filterButtons = document.querySelectorAll('.top-1-right button');
filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var filterType = this.textContent;
        filterTasks(filterType);
    });
});



var CategoryyPopup = document.querySelector('.popup');
function filterTasksByCategory(category) {
    var tasks = document.querySelectorAll('.middle');
    var NameEle=document.querySelector('.top h1')

    tasks.forEach(function(task) {
        var taskCategoryElement = task.querySelector('.middle-flex p');
        if (taskCategoryElement.textContent.toLowerCase() === category.toLowerCase()) {
            task.style.display = 'flex';
            NameEle.textContent="";
            NameEle.textContent=taskCategoryElement.textContent
        } else {
            task.style.display = 'none';
        }
    });
}
var categoryItems = document.querySelectorAll('#popup-list li');
categoryItems.forEach(function(categoryItem) {
    categoryItem.addEventListener('click', function() {
        var selectedCategory = categoryItem.querySelector('p').textContent;
        filterTasksByCategory(selectedCategory);
    });
});











