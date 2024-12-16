import { SettingsStore } from './Settings';
import { UserStore } from './User';
import { ImagesStore } from './Images';

class RootStore {
	settingsStore = new SettingsStore();
	userStore = new UserStore();
	imagesStore = new ImagesStore();
}

export default new RootStore();
