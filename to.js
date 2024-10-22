do = document.getElementById('todo-form');
  cument.addEventListener('DOMContentLoaded', () => {
    const form  const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = input.value.trim();
        if (todoText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-btn">✖</button>
        `;

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        todoList.appendChild(li);
        input.value = '';
        input.focus();
    }
});

