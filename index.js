
var todoInput = document.getElementById('todo-input');
var todoButton = document.getElementById('todo-button');
var todoList = document.getElementById('todo-list');
todoButton.addEventListener('click', function (e) {
  if (todoInput.value && todoInput.value.length > 0) {
    var li = document.createElement('li');
    li.innerHTML = todoInput.value;
    li.addEventListener('click', function() {
      li.remove();
    });
    todoList.appendChild(li);
    todoInput.value = '';
  }
});
