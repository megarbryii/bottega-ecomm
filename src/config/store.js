import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import headerNavbar from '../reducers/headernavbar';
import user from '../reducers/userReducer';
import shop from '../reducers/shopReducer';

const rootReducer = combineReducers({
    form,
    headerNavbar,
    user,
    shop
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;