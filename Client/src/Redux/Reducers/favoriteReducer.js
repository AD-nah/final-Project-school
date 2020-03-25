import {ADD_TO_FAVORITE} from '../types'
import { USER_LIGGED_OUT_TYPE } from '../types'
export default function favoriteReducer (state = [], action = {}){

    switch(action.type){

        case ADD_TO_FAVORITE:

            // let products = [...state]
            // products.push(action.item)
            return  action.items;

        case USER_LIGGED_OUT_TYPE:
            return {} 
                
        default:

            return state
    }
}