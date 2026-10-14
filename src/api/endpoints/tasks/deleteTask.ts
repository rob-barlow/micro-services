import ToDoTask from "../../types/toDoTask";

async function deleteTaskHandler(request: Request, env: Env): Promise<Response> {
    const id = request.url.split("/").at(-1);

    const result: D1Result<ToDoTask> = await env.DB
        .prepare("DELETE FROM Tasks where id = (?)")
        .bind(id)
        .run();

    if (result.error){
        console.log(result.error);
        return new Response("<p>Shiz went wrong</p>", {status: 500})
    }

    return new Response(null, {status: 200});
}

export default deleteTaskHandler;