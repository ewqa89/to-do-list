{
    let tasks = [];
    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent }
        ];

        render();
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, +taskIndex),
            ...tasks.slice(+taskIndex + 1),
        ];
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            {
                ...tasks[taskIndex],
                done: !tasks[taskIndex].done,
            },
            ...tasks.slice(+taskIndex + 1),
        ];
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const renderTasks = () => {
        let htmlSring = "";

        for (const task of tasks) {
            htmlSring += `
            <li class="list ${(hideDoneTasks && task.done) ? "list__hidden" : ""}">
            <button class="list__button list__button--done js-done">
            ${task.done ? "✔" : ""}
            </button>
            <span class="list__item ${task.done ? "list__item--done" : ""}">
            ${task.content}
            </span>
            <button class="list__button list__button--remove js-remove">
            🗑
            </button>
            </li>
    `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlSring;
    };

    const renderButtons = () => {
        let htmlSring = "";

        if (tasks.length > 0) {
            htmlSring = `
            <button class="buttons__button js-hideButtonTasks">
            ${hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button class="buttons__button js-completeButtonTasks" 
            ${tasks.every((task) => task.done) ? "disabled" : ""}>
            Ukończ wyszystkie
            </button>
                `;
        };
        document.querySelector(".js-buttons").innerHTML = htmlSring;
    };

    const bindButtonsEvents = () => {
        const hideButtonTasks = document.querySelector(".js-hideButtonTasks");
        const completeButtonTasks = document.querySelector(".js-completeButtonTasks");

        hideButtonTasks.addEventListener("click", () => {
            hideDoneTasks = !hideDoneTasks;
            render();
        });

        completeButtonTasks.addEventListener("click", () => {
            for (const task of tasks) {
                task.done = true;
                render();
            };
        });
    };

    const render = () => {
        renderTasks();
        renderButtons();

        bindEvents();
        if (tasks.length > 0) 
        {
            bindButtonsEvents(); 
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
        document.querySelector(".js-form").reset();
        document.querySelector(".js-newTask").focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}