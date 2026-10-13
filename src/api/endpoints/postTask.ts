async function postTaskHandler(_request: Request, _env: Env): Promise<Response> {
    currentTasks.push(hardcodedHtml);
    
    const init: ResponseInit = {status: 200};
    
    const response = new Response(currentTasks.join(""), init);
    return response;
}

export default postTaskHandler;

const hardcodedHtml = "<p class=\"task\">I am a hardcoded task</p>";

const currentTasks: string[] = [];