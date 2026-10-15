import ToDoTask from "../../types/toDoTask";

async function postTaskHandler(request: Request, env: Env): Promise<Response> {
    const data: FormData = await request.formData();
    const taskBody = data.get("Body")

    if (typeof taskBody !== "string") {
        return new Response("Missing Body field", { status: 400 });
    }

    const result: D1Result<ToDoTask> = await env.DB
        .prepare("INSERT INTO Tasks (Body) VALUES (?);")
        .bind(taskBody)
        .run();

    if (result.error){
        console.log(result.error);
        return new Response("<p>Shiz went wrong</p>", {status: 500})
    }
    
    const task: ToDoTask = {
        Id: result.meta.last_row_id,
        Body: taskBody 
    }

    return new Response(ToDoTask.toHtmlString(task))
}

export default postTaskHandler;