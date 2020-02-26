import { USER_LIGGED_IN_TYPE } from '../types'
import { USER_LIGGED_OUT_TYPE } from '../types'
import  api from '../../APIs/AuthApi'


export  const userLoggedIn = (authenticatedData) =>  { 
    return{
       type: USER_LIGGED_IN_TYPE,
       authenticatedData
    }
}
export  const userLoggedOut = () =>  { 
    return{
       type: USER_LIGGED_OUT_TYPE
    }
}




export const loginAction  = (userSignInData) => (dispatch) => {

    return api.user.loginRequest(userSignInData).then((response) => {

         localStorage.sCount = response.token 
         dispatch(userLoggedIn(response))
    })
}

export const logoutAction  = () => (dispatch) => {
    
         localStorage.removeItem('sCount')
         dispatch(userLoggedOut())
}