import { makeAutoObservable } from 'mobx';
import { debounce } from '../../utils';
import services from '../../services';
import { STORAGE_KEYS } from '../../constants';

export class SettingsStore {
	theme = 'dark';
	isPipMode = false;

	constructor() {
		makeAutoObservable(this);
		this.getLocalStorageTheme();
		this.debouncedSetTheme = debounce(theme => {
			services.storageService.setItem(STORAGE_KEYS.THEME, theme);
		}, 1000);
	}

	getLocalStorageTheme() {
		const savedTheme = services.storageService.getItem(STORAGE_KEYS.THEME);
		if (savedTheme) {
			this.setTheme(savedTheme);
		}
	}

	setTheme(theme) {
		if (theme !== 'dark' && theme !== 'light') {
			console.error('Неверный тип темы. Принимает "dark" или "light"');
			return;
		}

		this.theme = theme;
		this.debouncedSetTheme(theme);
	}

	setIsPipMode(isPipMode) {
		this.isPipMode = Boolean(isPipMode);
	}
}
