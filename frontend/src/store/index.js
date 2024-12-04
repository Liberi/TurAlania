import { SettingsStore } from './Settings';
import { UserStore } from './User';

class RootStore {
	settingsStore = new SettingsStore();
	userStore = new UserStore();
}

export default new RootStore();
