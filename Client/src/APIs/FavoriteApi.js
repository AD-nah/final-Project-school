import axios from 'axios'
import decode from 'jwt-decode'


export default {
    favorite:{
        getFavoriteRequest:() => {
            if(localStorage.sCount){
                const payload = decode(localStorage.sCount)
                return axios.post('/api/favorite/get-favorite',{userId: payload.userId}).then(res => res.data.favorite)
            }
        },
        saveToFavoriteRequest: (item) => {
            if(localStorage.sCount){
                const payload = decode(localStorage.sCount)
                return axios.post('/api/favorite/save-to-favorite', {item, userId: payload.userId}).then((res) => res.data.res)
            }
        },
        removeFromFavoriteRequest:(item) => {
            if(localStorage.sCount){
                const payload = decode(localStorage.sCount)
            return axios.post('/api/favorite/remove-from-favorite',{ item, userId:payload.userId}).then(res => res.data.message)
            }
        }
    }
}
