// to save Products in the Basket 
import {ADD_TO_BASKET} from '../types'
import BasketApi from '../../APIs/BasketApi'


// to save products into The Favorite DB from the Basket DB
import {dispatchProductToFavoriteState} from './favorite'
import FavoriteApi from '../../APIs/FavoriteApi'


export const dispatchProductToBasketState = (items) => {
    return {
        type: ADD_TO_BASKET,
        items
    }
}

export const  addToBasketAction = (item) => (dispatch) => {
   return BasketApi.basket.saveToBasketRequest(item).then(res => {
        dispatch(dispatchProductToBasketState(res.products));
        return res.message
    }).catch(err => {
        return err.response.data.message
    })
}

export const fetchBasket = () => (dispatch) => {
   return BasketApi.basket.getBasketRequest().then(items => {
        dispatch(dispatchProductToBasketState(items))
    })
}

export const removeFromBasketAction = (item) => {
    return BasketApi.basket.removeFromBasketRequest(item).then(message => {
        return message
    }).catch((err)=> {
        return err.response.data.message
    })
}

export const sendFromBasketToFavoriteAction = (item) => (dispatch) => {
    return FavoriteApi.favorite.saveToFavoriteRequest(item).then(res => {
        dispatch(dispatchProductToFavoriteState(res.products));
        return res.message
    }).catch(err => {
        return err.response.data.message
    })
}