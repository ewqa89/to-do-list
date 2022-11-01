{
    const tasks = [];

    const render = () => {
        let htmlSring = "";

        for (const task of tasks) {
            htmlSring += `
            <li class="list">
            <button class="button__done js-done">${task.done ? "✔" : ""}</button>
            <span class="list__item ${task.done ? "list__item--done" : ""}">${task.content}</span>
            <button class="button__remove js-remove">🗑</button>
            </li>
    `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlSring;
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();       
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim(); 

    if (newTaskContent === "") {
        return;
    } 

    addNewTask(newTaskContent);      
};

    const init = () => {
render();

const form = document.querySelector(".js-form");
        
        form.addEventListener("submit", onFormSubmit); 
};

    init();
}