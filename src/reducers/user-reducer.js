import { REMOVE_USER, ADD_USER } from '../actions/user-actions';

export default function userReducer(state = [], { type, payload }) {
	switch (type) {
		case ADD_USER:
			return payload.user;
		case REMOVE_USER:
			return payload.user;
		default:
			return state;
	}
}
