import { RestService } from './RestService';
import { UserRestService } from './User';

class ApiService {
	restService = new RestService(process.env.REACT_APP_API_URL_IP + '/backend');

	constructor() {
		this.user = new UserRestService(this.restService);
	}
}

export const apiService = new ApiService();
