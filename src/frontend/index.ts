addInputEventListener();

function addInputEventListener(){
    const taskForm: HTMLFormElement = document.getElementById("task-form") as HTMLFormElement;
    const taskSubmitButton: HTMLButtonElement = document.getElementById("task-submit-button") as HTMLButtonElement;
    
    if (!taskForm) {
        return;
    }
    taskSubmitButton.addEventListener("htmx:configRequest", () => {
        taskForm.reset();
    });

}