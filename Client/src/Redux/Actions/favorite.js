import {ADD_TO_FAVORITE} from '../types'
import api from '../../APIs/FavoriteApi'

export const addedToFavorite = (items) => {
    return {
        type: ADD_TO_FAVORITE,
        items
    }
}

export const  addToFavoriteAction = (item) => (dispatch) => {
   return api.favorite.saveToFavoriteRequest(item).then(items => {
        dispatch(addedToFavorite(items));
    })
}

export const fetchFavorite = () => (dispatch) => {
   return api.favorite.getFavoriteRequest().then(items => {
        dispatch(addedToFavorite(items))
    })
}

export const removeFromFavoriteAction = (item) => {
    return api.favorite.removeFromFavoriteRequest(item).then(item => {
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