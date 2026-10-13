import handleApiRequest from "./api/api";

export default {
	async fetch(request: Request, env: Env) {
		if (request.url.includes("/api")) {
			return handleApiRequest(request, env);
		}

		return env.ASSETS.fetch(request);
	}
};