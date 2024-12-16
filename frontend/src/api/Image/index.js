import { parseLink } from '../RestService/utils';

const IMAGE_PATH_MAP = {
	getImage: '/images?limit={limit}&offset={offset}',
};

export class ImageRestService {
	constructor(restService) {
		this.restService = restService;
	}

	getImages(limit = 10, offset = 0) {
		return this.restService.get({
			url: parseLink(IMAGE_PATH_MAP.getImage, { limit, offset }),
		});
	}
}
