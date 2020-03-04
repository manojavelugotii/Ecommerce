import { combineReducers } from 'redux';
import products from './products';

const reducers = combineReducers({
	products    : products
});
const rootReducer = (state, action) => {
	// if (action.type === 'RESET_REDUCERS') {
	// 	state = undefined;
	// }
	return reducers(state, action);
};

export default rootReducer;
