import { USER_LIGGED_IN_TYPE } from '../types'
import { USER_LIGGED_OUT_TYPE } from '../types'
import  api from '../../APIs/AuthApi'

let registerdMessage = false
let loggedinMessage = false

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


export const registerAction  = (data) => (dispatch) => {

    return api.user.registerRequest(data).then((response) => {

         localStorage.sCount = response.token 
         dispatch(userLoggedIn(response))
         registerdMessage = true

    })
}
export const loginAction  = (data) => (dispatch) => {

     return api.user.loginRequest(data).then((response) => {

         localStorage.sCount = response.token 
         dispatch(userLoggedIn(response))
         loggedinMessage = true

     })
}

export const logoutAction  = () => (dispatch) => {
          
    // return api.user.logoutRequest(localStorage.sCount).then(res =>{
        localStorage.removeItem('sCount')
       return dispatch(userLoggedOut())    
    // })/* catch(err => {   // just for testing!
        // console.log("auth.js")
        // dispatch(userLoggedOut())
    // }) */
}


export const authMessagesHandler = () => {
    if(loggedinMessage){
        return "loggedinMessage"
    }else if(registerdMessage) {
        return 'registerdMessage'
    }else{
        return null
    }
}
