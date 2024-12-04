export class RestService {
	constructor(baseUrl) {
		this.baseUrl = baseUrl;
	}

	async request({ url, method, body }) {
		const response = await fetch(`${this.baseUrl}${url}`, {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: body ? JSON.stringify(body) : undefined,
		});
		console.log(`👾 > RestService > request > response:`, response);
		const data = await response.json();

		return data;
	}

	get({ url }) {
		return this.request({ url, method: 'GET' });
	}

	post({ url, body }) {
		return this.request({ url, method: 'POST', body });
	}

	put({ url, body }) {
		return this.request({ url, method: 'PUT', body });
	}

	delete({ url }) {
		return this.request({ url, method: 'DELETE' });
	}
}
