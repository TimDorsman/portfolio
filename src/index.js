import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//Reducers
import userReducer from './reducers/user-reducer';

const allReducers = combineReducers({
	user: userReducer,
})

const store = createStore(allReducers
);

const updateUserAction = {
	type: 'updateUser',
	payload: {
		user: 'Tyrone'
	}
};

const addUserAction = {
	type: 'addUser',
	payload: {
		
	}
}

store.dispatch(updateUserAction);

console.log(store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
