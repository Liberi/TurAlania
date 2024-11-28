import { makeAutoObservable } from 'mobx';

export class SettingsStore {
	theme = 'dark';
	isPipMode = false;

	constructor() {
		makeAutoObservable(this);
	}

	setTheme(theme) {
		this.theme = theme;
	}

	setIsPipMode(isPipMode) {
		this.isPipMode = isPipMode;
	}
}