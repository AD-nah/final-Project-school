import api from '../../APIs/ProductApi'
import {FETCH_MEN_PRODUCTS} from '../types'
import {FETCH_WOMEN_PRODUCTS} from '../types'


export const  fetchWomenProducts = () => (dispatch) => {
    return api.products.getWomenProductRequest().then(womenProducts => {
        dispatch( { type: FETCH_WOMEN_PRODUCTS, womenProducts});
    })
}

export const  fetchMenProducts = () => (dispatch) => {
    return api.products.getMenProductRequest().then(menProducts => {
        dispatch( { type: FETCH_MEN_PRODUCTS, menProducts});
    })
}

