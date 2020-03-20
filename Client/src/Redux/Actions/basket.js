import {ADD_TO_BASKET} from '../types'
import api from '../../APIs/BasketApi'

export const addedToBasket = (items) => {
    return {
        type: ADD_TO_BASKET,
        items
    }
}

export const  addToBasketAction = (item) => (dispatch) => {
    api.basket.saveToBasketRequest(item).then(items => {
        dispatch(addedToBasket(items));
    })
}

export const fetchBasket = () => (dispatch) => {
   return api.basket.getBasketRequest().then(items => {
        dispatch(addedToBasket(items))
    })
}