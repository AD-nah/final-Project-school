import axios from 'axios'


export default  {
    user:{

        loginRequest:( userSignInData ) => {

            return axios.post('/api/auth-req', { userSignInData }).then( response => response.data.userSignedInData )
        }
    }
}

