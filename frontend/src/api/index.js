import { RestService } from './RestService';
import { UserRestService } from './User';
import { ImageRestService } from './Image';
import { getApiUrlFromPath } from '../utils';

class ApiService {
	restService = new RestService(getApiUrlFromPath('backend'));

	constructor() {
		this.user = new UserRestService(this.restService);
		this.image = new ImageRestService(this.restService);
	}
}

export const apiService = new ApiService();
