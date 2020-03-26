import {ADD_TO_BASKET} from '../types'
import api from '../../APIs/BasketApi'

export const addedToBasket = (items) => {
    return {
        type: ADD_TO_BASKET,
        items
    }
}

export const  addToBasketAction = (item) => (dispatch) => {
   return api.basket.saveToBasketRequest(item).then(items => {

       console.log('200 ' + items)
        dispatch(addedToBasket(items));

    }).catch((err => {

        console.log('404 ' + err)
        return err
    }))
}

export const fetchBasket = () => (dispatch) => {
   return api.basket.getBasketRequest().then(items => {
        dispatch(addedToBasket(items))
    })
}

export const removeFromBasketAction = (item) => {
    return api.basket.removeFromBasketRequest(item).then(item => {
        return item
    }).catch(()=> {
        return 'failed to remove from Basket'
    })
}
