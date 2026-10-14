
type ToDoTask = {
    Id: number,
    Body: string
}

const ToDoTask = {
    toHtmlString(toDoTask: ToDoTask){
        return `<li>
            <div class="to-do-task">
                <p>${toDoTask.Body}</p>
                <button hx-delete="/api/tasks/${toDoTask.Id}" hx-target="closest li" hx-swap="delete">
                    &#x232B;
                </button>
            </div>
        </li>`;
    }
}

export default ToDoTask;