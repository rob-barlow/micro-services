import handleApiRequest from "./api";

export default {
	async fetch(request: Request, env: Env) {
		console.log("Is this logged?")

		if (request.url.startsWith("/api")) {
			return handleApiRequest(request, env);
		}

		return env.ASSETS.fetch(request);
	}
};