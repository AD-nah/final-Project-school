import axios from 'axios'


export default  {
    user:{

        loginRequest : ( userSignInData ) => {

            return axios.post('/api/auth-req', { userSignInData }).then( response => response.data.userSignedInData )
        },
        logoutRequest : (token) => {

            return axios.post('/api/logout-req', { token }).then( response => response.data.userLoggedOut )
        },
        registerRequest:(data) => {

            return axios.post('/api/register-req', { data }).then( response => response.data.userRegistered )
        }
    }
}

