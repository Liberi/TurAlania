import { StorageService } from './StorageService';

class RootService {
	storageService = new StorageService();
}

export default new RootService();
