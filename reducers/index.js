import { combineReducers } from 'redux'
import { ADD_COPY, REMOVE_COPY } from '../actions/index';

function counter(state = 1, action) {
	switch (action.type) {
		case ADD_COPY:
			return state + 1
		case REMOVE_COPY:
			return state - 1 
		default:
			return state
	}
}

export default combineReducers({
  counter
})
