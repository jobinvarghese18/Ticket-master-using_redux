import axios from 'axios'
import {Redirect} from 'react-router-dom'
//Login user

export const setLogin =(token)=>{
    return{type:'POST_LOGIN',payload:token}
 }
 
 
 export const startPostLogin = (data)=>{
    return(dispatch)=>{
         axios.post('http://dct-ticket-master.herokuapp.com/users/login',data)
         .then((response)=>{
             console.log(response.data)
             const token = response.data
             
                const data = response.data.token
                localStorage.setItem('auth',JSON.stringify(data))
            
             dispatch(setLogin(token))
         })
         .catch((err)=>{
             console.log(err)
         })
    }
 }