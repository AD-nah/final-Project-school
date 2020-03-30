import axios from 'axios';

export default  {
    user:{

        loginRequest : ( data ) => {

            return axios.post('/api/auth-post', { data }).then( response => response.data.userSignedInData )
        },
        // logoutRequest : (token) => {

        //     return axios.post('/api/logout-post', { token }).then( response => response.data.userLoggedOut )
        // },
        registerRequest:(data) => {

            return axios.post('/api/register-post', { data }).then( response => response.data.userRegistered )
        },
        forgotPasswordRequest: (data) => {

            return axios.post('/api/forgotpassword-post', { data })/* .then( response => response.data); */
        }
    },
    ///News Api
    newApi : {
        getNews : (url)=>{
            return axios.get(url)
        }
    }
}

