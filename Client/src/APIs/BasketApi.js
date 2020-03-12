import axios from 'axios'
import decode from 'jwt-decode'


export default {
    basket:{
        getBasketRequest:() => {
            if(localStorage.sCount){
                const payload = decode(localStorage.sCount)
                return axios.post('/api/basket/get-basket',{userID: payload.userID}).then(res => res.data.basket)
            }
        },
        saveToBasketRequest: (item) => {
            if(localStorage.sCount){
                const payload = decode(localStorage.sCount)
                return axios.post('/api/basket/save-to-basket', {item, userID: payload.userID}).then((res) => res.data.items)
            }
        }
    }
}
