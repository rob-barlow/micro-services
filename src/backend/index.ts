import getHealthHandler from "./endpoints/health/getHealth";
import deleteTaskHandler from "./endpoints/tasks/deleteTask";
import getTaskListHandler from "./endpoints/tasks/getTaskList";
import postTaskHandler from "./endpoints/tasks/postTask";

async function handleApiRequest(request: Request, env: Env): Promise<Response> {
    const path = new URL(request.url).pathname;

    const route = routes.find(
        r =>
            r.method === request.method &&
            r.pattern.test(path)
    );

    if (!route) {
        return new Response("Not Found", { status: 404 });
    }

    return route.handler(request, env);
}

export default handleApiRequest;

type RouteHandler = (request: Request<unknown, CfProperties<unknown>>, _env: Env) => Promise<Response>

type Route = {
    method: string;
    pattern: RegExp;
    handler: RouteHandler;
};

const routes: Route[] = [
    {
        method: "GET",
        pattern: /^\/api\/health$/,
        handler: getHealthHandler,
    },
    {
        method: "GET",
        pattern: /^\/api\/tasks$/,
        handler: getTaskListHandler,
    },
    {
        method: "POST",
        pattern: /^\/api\/tasks$/,
        handler: postTaskHandler,
    },
    {
        method: "DELETE",
        pattern: /^\/api\/tasks\/(\d+)$/,
        handler: deleteTaskHandler,
    },
];