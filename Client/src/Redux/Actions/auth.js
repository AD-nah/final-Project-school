import { USER_LIGGED_IN_TYPE } from '../types'
import  api from '../../APIs/AuthApi'


export  const userLoggedIn = (authenticatedData) =>  { 
    return{
       type: USER_LIGGED_IN_TYPE,
       authenticatedData
    }
}



export const loginAction  = (userSignInData) => (dispatch) => {

    return api.user.loginRequest(userSignInData).then((response) => {

         localStorage.reactAppJWT = response.token 
         dispatch(userLoggedIn(response))
    })
}