import {ADD_TO_BASKET} from '../types'
import api from '../../APIs/BasketApi'

export const addedToBasket = (items) => {
    return {
        type: ADD_TO_BASKET,
        items
    }
}

export const  addToBasketAction = (item) => (dispatch) => {
   return api.basket.saveToBasketRequest(item).then(res => {
        dispatch(addedToBasket(res.products));
        return res.message
    }).catch(err => {
        return err.response.data.message
    })
}

export const fetchBasket = () => (dispatch) => {
   return api.basket.getBasketRequest().then(items => {
        dispatch(addedToBasket(items))
    })
}

export const removeFromBasketAction = (item) => {
    return api.basket.removeFromBasketRequest(item).then(message => {
        return message
    }).catch((err)=> {
        return err.response.data.message
    })
}
