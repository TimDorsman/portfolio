export const ADD_USER = 'users:addUser';
export const REMOVE_USER = 'users:removeUser';

export function removeUser(user) {
	return {
		type: REMOVE_USER,
		payload: {
			name: user.name,
			age: user.age,
			birthday: user.birthday
		}
	}
}

export function addUser(newUser) {
	return {
		type: ADD_USER,
		payload: {
			user: newUser
		}
	}
}
