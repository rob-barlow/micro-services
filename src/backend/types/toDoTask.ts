

type ToDoTask = {
    Id: number,
    Body: string
}

const ToDoTask = {
    toHtmlString(toDoTask: ToDoTask){
        return `<li>
<div class="task-item">
    <label class="checkbox">
        <input type="checkbox" name="${toDoTask.Id}" />
        ${checkboxLabel}
    </label>
    <div class="text">${toDoTask.Body}</div>
    <button class="flag">
        ${flag}
    </button>
    <button class="delete-button" hx-delete="/api/tasks/${toDoTask.Id}" hx-target="closest li" hx-swap="delete">
        ${binSvg}
    </button>
</div>
</li>`;
    }
}

const checkboxLabel = `<svg viewBox="0 0 21 18">
            <symbol id="tick-path" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69" fill="none" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
            </symbol>
            <defs>
                <mask id="tick">
                    <use class="tick mask" href="#tick-path" />
                </mask>
            </defs>
            <path class="shape" d="M1.08722 4.13374C1.29101 2.53185 2.53185 1.29101 4.13374 1.08722C5.50224 0.913124 7.25112 0.75 9 0.75C10.7489 0.75 12.4978 0.913124 13.8663 1.08722C15.4681 1.29101 16.709 2.53185 16.9128 4.13374C17.0869 5.50224 17.25 7.25112 17.25 9C17.25 10.7489 17.0869 12.4978 16.9128 13.8663C16.709 15.4681 15.4682 16.709 13.8663 16.9128C12.4978 17.0869 10.7489 17.25 9 17.25C7.25112 17.25 5.50224 17.0869 4.13374 16.9128C2.53185 16.709 1.29101 15.4681 1.08722 13.8663C0.913124 12.4978 0.75 10.7489 0.75 9C0.75 7.25112 0.913124 5.50224 1.08722 4.13374Z" />
            <use class="tick" href="#tick-path" stroke="currentColor" />
            <path fill="#2C2C31" mask="url(#tick)" d="M4.03909 0.343217C5.42566 0.166822 7.20841 0 9 0C10.7916 0 12.5743 0.166822 13.9609 0.343217C15.902 0.590152 17.4098 2.09804 17.6568 4.03909C17.8332 5.42566 18 7.20841 18 9C18 10.7916 17.8332 12.5743 17.6568 13.9609C17.4098 15.902 15.902 17.4098 13.9609 17.6568C12.5743 17.8332 10.7916 18 9 18C7.20841 18 5.42566 17.8332 4.03909 17.6568C2.09805 17.4098 0.590152 15.902 0.343217 13.9609C0.166822 12.5743 0 10.7916 0 9C0 7.20841 0.166822 5.42566 0.343217 4.03909C0.590151 2.09805 2.09804 0.590152 4.03909 0.343217Z" />
        </svg>`

const flag = `<svg viewBox="0 0 18 18">
            <path d="M7.66 16.75L2.25 2C8 -0.249996 9.5 3.50001 14 1.75C15.5 4.25002 16 8.00002 15.5 9C11 11 9.5 8.50002 5.03377 9.58975" />
            <path class="fill" d="M7.66 16.75L2.25 2C8 -0.249996 9.5 3.50001 14 1.75C15.5 4.25002 16 8.00002 15.5 9C11 11 9.5 8.50002 5.03377 9.58975" />
        </svg>`

const binSvg = `<svg width="20px" height="20px" viewBox="0 0 24 24" role="img" aria-labelledby="binIconTitle" stroke="#ffffffff" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none">
 <title id="binIconTitle">Delete Task</title>
 <path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10"/>
</svg>`;

export default ToDoTask;
