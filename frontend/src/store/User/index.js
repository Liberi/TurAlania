import { makeAutoObservable } from 'mobx';
import { apiService } from '../../api';
import services from '../../services';
import { STORAGE_KEYS } from '../../constants';

export class UserStore {
	data = {};

	constructor() {
		makeAutoObservable(this);
		this.getLocalStorageData();
	}

	getLocalStorageData() {
		const userData = services.storageService.getItem(STORAGE_KEYS.USER);
		if (userData) {
			this.setData(userData);
		}
	}

	async register(userData) {
		try {
			const result = await apiService.user.create(userData);
			console.log('register:', JSON.stringify(result, null, 4));

			if (result?.status && !result?.error) {
				this.setData(result.data);
				services.storageService.setItem(STORAGE_KEYS.USER, this.data);
			}
			return result;
		} catch (e) {
			console.error('Ошибка регистрации:', e);
		}
	}

	async login(credentials) {
		try {
			const result = await apiService.user.login(credentials);
			console.log('login:', JSON.stringify(result, null, 4));

			if (result.status && !result?.error) {
				this.setData(result.data);
				services.storageService.setItem(STORAGE_KEYS.USER, this.data);
			}
			return result;
		} catch (e) {
			console.error('Ошибка входа:', e);
		}
	}

	async getUser(id) {
		try {
			const result = await apiService.user.getUser(id);
			console.log('getUser:', JSON.stringify(result, null, 4));

			if (result.status && !result?.error) {
				this.setData(result.data);
				services.storageService.setItem(STORAGE_KEYS.USER, this.data);
			}
			return result;
		} catch (e) {
			console.error('Ошибка получения данных пользователя:', e);
		}
	}

	async updateUser(id, userData) {
		try {
			const result = await apiService.user.update(id, userData);
			console.log('updateUser:', JSON.stringify(result, null, 4));

			if (result.status && !result?.error) {
				this.setData({ ...this.data, ...userData });
				services.storageService.setItem(STORAGE_KEYS.USER, {
					...this.data,
					...userData,
				});
			}
			return result;
		} catch (e) {
			console.error('Ошибка обновления данных:', e);
		}
	}

	logout() {
		this.setData();
		services.storageService.removeItem(STORAGE_KEYS.USER);
	}

	setData(data = {}) {
		this.data = data;
	}
}
