import handleHealthRequest from "./health";

async function handleApiRequest(request: Request, _env: Env): Promise<Response> {
    const handler = routes[new URL(request.url).pathname];

    if (!handler) {
        return new Response("Not Found", { status: 404 });
    }

    return handler(request, _env);
}

export default handleApiRequest;

const routes: Record<string, RouteHandler> = {
    "/api/health": handleHealthRequest
};

type RouteHandler = (request: Request<unknown, CfProperties<unknown>>, _env: Env) => Promise<Response>