import getTaskListHandler from "./getTaskList";

async function postTaskHandler(request: Request, env: Env): Promise<Response> {
    const data: FormData = await request.formData();
    const taskBody = data.get("Body")

    await env.DB
        .prepare("INSERT INTO Tasks (Body) VALUES (?);")
        .bind(taskBody)
        .run();
    
    return getTaskListHandler(request, env);
}

export default postTaskHandler;