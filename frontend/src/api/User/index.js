import { parseLink } from '../RestService/utils';

const USER_PATH_MAP = {
	create: '/users/create',
	login: '/users/login',
	getUser: '/users/{id}',
	update: '/users/{id}',
	delete: '/users/{id}',
};

export class UserRestService {
	constructor(restService) {
		this.restService = restService;
	}

	create(body) {
		return this.restService.post({
			url: USER_PATH_MAP.create,
			body,
		});
	}

	login(body) {
		return this.restService.post({
			url: USER_PATH_MAP.login,
			body,
		});
	}

	getUser(id) {
		return this.restService.get({
			url: parseLink(USER_PATH_MAP.getUser, { id }),
		});
	}

	update(id, body) {
		return this.restService.put({
			url: parseLink(USER_PATH_MAP.update, { id }),
			body,
		});
	}

	delete(id) {
		return this.restService.delete({
			url: parseLink(USER_PATH_MAP.delete, { id }),
		});
	}
}
