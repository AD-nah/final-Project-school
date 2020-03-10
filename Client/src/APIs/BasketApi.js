import axios from 'axios'

export default {

    basket:{
        saveToBasketRequest: (item) => {
            return axios.post('/api/basket/save-to-basket', {item}).then((res) => res.data.items)
        }
    }
}