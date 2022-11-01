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

    const init = () => {
render();
    };

    init();
}