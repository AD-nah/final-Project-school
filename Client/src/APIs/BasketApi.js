import axios from 'axios'
import decode from 'jwt-decode'


export default {
    basket:{
        getBasketRequest:() => {
            if(localStorage.sCount){
                const payload = decode(localStorage.sCount)
                return axios.post('/api/basket/get-basket',{userId: payload.userId}).then(res => res.data.basket)
            }
        },
        saveToBasketRequest: (item) => {
            if(localStorage.sCount){
                const payload = decode(localStorage.sCount)
                return axios.post('/api/basket/save-to-basket', { item, userId: payload.userId}).then((res) => res.data.items)
            }
        },
        removeFromBasketRequest:(item) => {
            if(localStorage.sCount){
                const payload = decode(localStorage.sCount)
            return axios.post('/api/basket/remove-from-basket',{ item, userId:payload.userId}).then(res => res.data.item)
            }
        }
    }
}
