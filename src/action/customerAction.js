import axios from 'axios'
import { setUsers } from './userAction'

///create customer
export const setCustomers = (cst)=>{
    return {type:'SET_CUSTOMER',payload:cst}
}

export const startPostCustomer  =(data,redirect)=>{
    
    return (dispatch)=>{
        let auth1 = localStorage.getItem('auth')
        auth1 = JSON.parse(auth1)
        axios.post('http://dct-ticket-master.herokuapp.com/customers',data,{
            headers:{
                'x-auth':auth1
            }
        })
        .then((response)=>{
            console.log(response.data)
            const cst = response.data
            if(cst.hasOwnProperty('error')){
                alert('invalid entry')
            }
            else{
                dispatch(setCustomers(cst))
                redirect()
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


//post customer Details
export const getCustomer  =(cstmr)=>{
    return {type:'GET_CUSTOMER',payload:cstmr}
}

export const startGetCustomers =(auth)=>{
    return(dispatch)=>{
        let auth1 = localStorage.getItem('auth')
        auth1 = JSON.parse(auth1)
        console.log(auth)
        axios.get('http://dct-ticket-master.herokuapp.com/customers',{
            headers:{
                'x-auth':auth1
            }
        })
        .then((response)=>{
            console.log(response.data)
            const cstr = response.data
            dispatch(getCustomer(cstr))
        })
    }
}


//Delete customer based in user ID

export const deleteCustomer = (cstmr)=>{
    return {type:'DELETE_CUSTOMER',payload:cstmr}
}

export const startDeleteCustomer = (id)=>{
    return (dispatch)=>{
        let auth1 = localStorage.getItem('auth')
        auth1 = JSON.parse(auth1)
            axios.delete(`http://dct-ticket-master.herokuapp.com/customers/${id}`,{
                headers:{
                    'x-auth':auth1
                }
            })
            .then((response)=>{
                console.log(response.data)
                const csmtr   = response.data
                dispatch(deleteCustomer(csmtr))
            })
            .catch((err)=>{
                console.log(err)
            })
            
    }
}