import {ADD_TO_BASKET} from '../types'
import { USER_LIGGED_OUT_TYPE } from '../types'
export default function basketReducer (state = [], action = {}){

    switch(action.type){

        case ADD_TO_BASKET:

            // let products = [...state]
            // products.push(action.item)



            return  action.items;
        case USER_LIGGED_OUT_TYPE:
            return {} 
                
        default:

            return state
    }
}