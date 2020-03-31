import {ADD_TO_FAVORITE} from '../types'
import FavoriteApi from '../../APIs/FavoriteApi'


// to save products into The Basket DB from the Favorite DB
import {dispatchProductToBasketState} from '../Actions/basket'
import BasketApi from '../../APIs/BasketApi'

export const dispatchProductToFavoriteState = (items) => {
    return {
        type: ADD_TO_FAVORITE,
        items
    }
}

export const  addToFavoriteAction = (item) => (dispatch) => {
   return FavoriteApi.favorite.saveToFavoriteRequest(item).then(res => {
        dispatch(dispatchProductToFavoriteState(res.products));
        return res.message
    }).catch(err => {
        return err.response.data.message
    })
}

export const fetchFavorite = () => (dispatch) => {
   return FavoriteApi.favorite.getFavoriteRequest().then(items => {
        dispatch(dispatchProductToFavoriteState(items))
    })
}

export const removeFromFavoriteAction = (item) => {
    return FavoriteApi.favorite.removeFromFavoriteRequest(item).then(item => {
        return item
    }).catch(()=> {
        return 'failed to remove from Favorite'
    })
}

export const sendFromFavoriteToBasketAction = (item) => (dispatch) => {
    return BasketApi.basket.saveToBasketRequest(item).then(res => {
        dispatch(dispatchProductToBasketState(res.products));
        return res.message
    }).catch(err => {
        return err.response.data.message
    })
}