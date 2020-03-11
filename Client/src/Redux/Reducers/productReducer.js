import {FETCH_MEN_PRODUCTS} from '../types'
import {FETCH_WOMEN_PRODUCTS} from '../types'

let initialState = {
    menProducts   : null,
    womenProducts : null
}

export default function productReducer (state = initialState, action = {}){
    switch(action.type){

        case FETCH_WOMEN_PRODUCTS:
            state.womenProducts = action.womenProducts
        return state
        

        case FETCH_MEN_PRODUCTS:
            state.menProducts = action.menProducts
        return state
        default:
            return state
    }
}