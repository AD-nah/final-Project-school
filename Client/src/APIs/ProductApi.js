import axios from 'axios'

export default {

    products:{
        getWomenProductRequest: () => {
            return axios.get("/api/product/get-women-products").then(res => res.data.women)
        },
        getMenProductRequest: () => {
            return axios.get("/api/product/get-men-products").then(res => res.data.men)
        }
    }
}