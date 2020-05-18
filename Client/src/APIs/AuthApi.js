import axios from 'axios';
import decode from 'jwt-decode'

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
            return axios.post('/api/forgotpassword-post', { data })
        },
        validateResetPasswordTokenRequest: (token) => {
            return axios.post('/api/validateresetpasswordtoken-post', { token })
        },
        resetPasswordRequest: (data) => {
            return axios.post('/api/resetpassword-post', { data }).then( response => response.data.userSignedInData )
        },
        getUserData: () => {
            const payload = decode(localStorage.sCount)
            return axios.post('/api/auth-post/getUserData', {userId: payload.userId}).then( response => response.data.userData )

        },
        saveUserData: (data) => {
            const payload = decode(localStorage.sCount)
            return axios.post('/api/auth-post/saveUserData', {data , userId: payload.userId}).then( response => response.data.message )

        }
    },

    ///News Api
    newApi : {
        getNews : (url)=>{
            return axios.get(url)
        }
    }
}
