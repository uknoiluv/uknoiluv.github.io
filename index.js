
var todoInput = document.getElementById('todo-input');
var todoButton = document.getElementById('todo-button');
todoButton.addEventListener('click', function (e) {
  console.log('todoInput value', todoInput.value);
});
