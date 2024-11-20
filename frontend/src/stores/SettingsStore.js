import { makeAutoObservable } from 'mobx';

export class SettingsStore {
	theme = 'dark';

	constructor() {
		makeAutoObservable(this);
	}

	setTheme(theme) {
		this.theme = theme;
	}
}