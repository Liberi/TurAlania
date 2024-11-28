import { SettingsStore } from './SettingsStore';

class RootStore {
	settingsStore = new SettingsStore();
}

export default new RootStore();
