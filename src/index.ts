import handleApiRequest from "./api";

export default {
	async fetch(request: Request, env: Env) {
		console.log(JSON.stringify(request))
		console.log(JSON.stringify(request.url))

		if (request.url.startsWith("/api")) {
			return handleApiRequest(request, env);
		}

		return env.ASSETS.fetch(request);
	}
};