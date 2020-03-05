import axios from 'axios';

export default  {
    user:{

        loginRequest : ( data ) => {

            return axios.post('/api/auth-req', { data }).then( response => response.data.userSignedInData )
        },
        logoutRequest : (token) => {

            return axios.post('/api/logout-req', { token }).then( response => response.data.userLoggedOut )
        },
        registerRequest:(data) => {

            return axios.post('/api/register-req', { data }).then( response => response.data.userRegistered )
        }
    },
    ///News Api
    newApi : {
        getNews : (url)=>{
            return axios.get(url)
        }
    }
}

