import {ADD_TO_BASKET} from '../types'


export const addedToBasket = (item) => {
    return {
        type: ADD_TO_BASKET,
        item
    }
}

export const  addToBasketAction = (item) => (dispatch) => {
    dispatch(addedToBasket(item))
}