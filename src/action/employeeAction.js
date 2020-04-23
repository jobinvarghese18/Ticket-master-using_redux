import axios from 'axios'
import { Redirect } from 'react-router-dom'
//create employee
export const postEmployee  = (data)=>{
    return {type:'POST_EMP',payload:data}
}

export const startPostEmployee = (data,redirect)=>{
    return (dispatch)=>{
        let auth = localStorage.getItem('auth')
        auth  = JSON.parse(auth)
       axios.post('http://dct-ticket-master.herokuapp.com/employees',data,{
           headers:{
               'x-auth':auth
           }
       })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert('Invalid Entry')
            }
            else{
                console.log(response.data)
                const emp =  response.data
                dispatch(postEmployee(emp))
                redirect()
            }
           
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//get employee data


export const getEmployee = (data)=>{
    return {type:'GET_EMP',payload:data}
}


export const startGetEmployee = ()=>{
    return(dispatch)=>{
        let auth  = localStorage.getItem('auth')
        auth = JSON.parse(auth)
        axios.get('http://dct-ticket-master.herokuapp.com/employees',{
            headers:{
                'x-auth':auth
            }
        })
        .then((response)=>{
            
            console.log(response.data)
          const  data  = response.data
            dispatch(getEmployee(data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//Delete Employee 
export const deleteEmployee = (data)=>{
    return {type:'DELETE_EMP' ,payload:data}
}
export const startDeleteEmployee = (id)=>{
    return (dispatch)=>{
        let auth  = localStorage.getItem('auth')
        auth = JSON.parse(auth)
        axios.delete(`http://dct-ticket-master.herokuapp.com/employees/${id}`,{
            headers:{
                'x-auth':auth
            }
        })
        .then((response)=>{
            
            console.log(response.data)
            const data = response.data
            dispatch(deleteEmployee(data))

        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


//Update Employee
export const updateEmployee = (data)=>{
    return {type:'UPDATE_EMPLOYEE',payload:data}
}

export const startUpdateEmployee = (id,data,redirect)=>{
    return(dispatch)=>{
        let auth = localStorage.getItem('auth')
        auth  = JSON.parse(auth)
        axios.put(`http://dct-ticket-master.herokuapp.com/employees/${id}`,data,{
            headers:{
                'x-auth':auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const data = response.data
            if(data.hasOwnProperty('errors')){
             alert('Invalid entry')
            }
            else{
                dispatch(updateEmployee(data))
                redirect()
            }
        })
    }
}