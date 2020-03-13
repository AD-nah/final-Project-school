import axios from 'axios'
import decode from 'jwt-decode'


export default {
    favorite:{
        getFavoriteRequest:() => {
            if(localStorage.sCount){
                const payload = decode(localStorage.sCount)
                return axios.post('/api/favorite/get-favorite',{userID: payload.userID}).then(res => res.data.favorite)
            }
        },
        saveToFavoriteRequest: (item) => {
            if(localStorage.sCount){
                const payload = decode(localStorage.sCount)
                return axios.post('/api/favorite/save-to-favorite', {item, userID: payload.userID}).then((res) => res.data.items)
            }
        }
    }
}
