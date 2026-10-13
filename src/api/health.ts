const Health = {
    Healthy: "Healthy",
    Degraded: "Degraded",
    Unhealthy: "Unhealthy"
}

handleHealthRequest

async function handleHealthRequest(_request: Request, _env: Env): Promise<Response> {
    const init: ResponseInit = {status: 200};
    
    const response = new Response(Health.Healthy, init);
    return response;
}

export default handleHealthRequest;