import { observable } from 'mobx';
import { createContext } from 'react';

class UserStore {
	@observable firstname = '';
	@observable lastname = '';
	@observable password = '';
	@observable email = '';
	@observable user = null;
}

export const UserStoreContext = createContext(new UserStore());
