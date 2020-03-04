import { combineReducers }from 'redux'

import userReducer from './Reducers/userReducer'
import basketReducer from './Reducers/basketReducer'
export default combineReducers({
    userReducer,
    basketReducer
})