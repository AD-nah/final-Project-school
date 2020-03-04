import {ADD_TO_BASKET} from '../types'

export default function basketReducer (state = [], action = {}){

    switch(action.type){

        case ADD_TO_BASKET:

            let products = [...state]
                products.push(action.item)

                return  products
                // {...state},{...action.item}
                
                
        default:

            return state
    }
}