import {USER_LIGGED_IN_TYPE} from '../types'
import {USER_LIGGED_OUT_TYPE} from '../types'

export default function userReducer (state = {}, action = {}){

    switch(action.type){

        case USER_LIGGED_IN_TYPE:

                console.log({...state})
                return action.authenticatedData

        case USER_LIGGED_OUT_TYPE:
            return {}
        default:

            return state
    }
}