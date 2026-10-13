import type { ToDoTask } from "../types";

async function getTaskListHandler(_request: Request, env: Env): Promise<Response> {
    const { results }: D1Result<Record<string, ToDoTask>> = await env.DB
        .prepare("SELECT * FROM Tasks")
        .run();

    const returnHtml = resultsToHtmlList(results);
    return new Response(returnHtml);
}

export default getTaskListHandler;


function resultsToHtmlList(results: Record<string, ToDoTask>[]): string {
    let returnHtml = "";

    results.forEach(toDoTask => {
        returnHtml += "<p>" + toDoTask.Body + "</p>";
    })

    return returnHtml
}