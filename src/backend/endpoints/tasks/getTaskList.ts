import ToDoTask from "../../types/toDoTask";

async function getTaskListHandler(_request: Request, env: Env): Promise<Response> {
    const { results }: D1Result<ToDoTask> = await env.DB
        .prepare("SELECT * FROM Tasks")
        .run();

    const returnHtml = resultsToHtmlList(results);
    return new Response(returnHtml);
}

export default getTaskListHandler;


function resultsToHtmlList(results: ToDoTask[]): string {
    let returnHtml = "";

    results.forEach(task => {
        returnHtml += ToDoTask.toHtmlString(task);
    })

    return returnHtml
}