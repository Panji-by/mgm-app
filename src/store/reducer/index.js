import {combineReducers} from 'redux';

// import reducers
import product from './getProductList'

const rootReducer = combineReducers({
	product
});

export default rootReducer;