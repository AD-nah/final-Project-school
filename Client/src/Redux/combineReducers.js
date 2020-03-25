import { combineReducers }from 'redux'

import userReducer from './Reducers/userReducer'
import basketReducer from './Reducers/basketReducer'
import productReducer from './Reducers/productReducer'
import favoriteReducer from './Reducers/favoriteReducer'

export default combineReducers({
    userReducer,
    basketReducer,
    productReducer,
    favoriteReducer
})