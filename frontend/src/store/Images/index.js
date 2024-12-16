import { makeAutoObservable } from 'mobx';
import { apiService } from '../../api';

export class ImagesStore {
	data = [];
	hasMore = true;

	constructor() {
		makeAutoObservable(this);
	}

	async loadImages(limit = 1, offset) {
		try {
			let count = limit;
			let startOffset = offset;

			if (offset === undefined || offset === 0) {
				const currentLength = this.data.length;
				if (currentLength >= limit) return;

				count = limit - currentLength;
				startOffset = currentLength;
			}

			const result = await apiService.image.getImages(count, startOffset);
			console.log('loadImages:', JSON.stringify(result, null, 4));

			if (result?.data?.length === 0) {
				this.setHasMore(false);
				return;
			}

			if (result?.status && !result?.error) {
				this.addImages(result.data);
			}
			return result;
		} catch (e) {
			console.error('Ошибка загрузки изображений:', e);
		}
	}

	addImages(newImages) {
		this.data = [...this.data, ...newImages];
	}

	clearImages() {
		this.data = [];
	}

	setHasMore(value) {
		this.hasMore = value;
	}
}
