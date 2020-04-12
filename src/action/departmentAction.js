
//ADDcustomer

import Axios from "axios"

export const postDepartment = (dep)=>{
    return {type:'POST_DEPARTMENT',payload:dep}
}

export const startPostDepartment = (data)=>{
    return (dispatch)=>{
        let auth = localStorage.getItem('auth')
        auth = JSON.parse(auth)
        Axios.post('http://dct-ticket-master.herokuapp.com/departments',data,{
            headers:{
                'x-auth':auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const depData = response.data
            if(depData.hasOwnProperty('error')){
                alert('inavlid entry')
            }
            else{
                dispatch(postDepartment(depData))
            }
        })
    }
}
///GET all department data
export const getDepartment = (data)=>{
    return {type:"GET_DEPARTMENT",payload:data}
}

export const startGetDepartment = ()=>{
    return (dispatch)=>{
        let auth = localStorage.getItem('auth')
        auth  = JSON.parse(auth)
        Axios.get('http://dct-ticket-master.herokuapp.com/departments',{
            headers:{
                "x-auth":auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const data = response.data
            dispatch(getDepartment(data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}



///Delete department by id

export const deleteDepartment = (dep)=>{
    return {type:'DELETE_DEP',payload:dep}
}

export const startDeleteDepartment =  (id)=>{
    return(dispatch)=>{
        let auth = localStorage.getItem('auth')
        auth = JSON.parse(auth)
        Axios.delete(`http://dct-ticket-master.herokuapp.com/departments/${id}`,{
            headers : {
                'x-auth':auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const data  =  response.data
            dispatch(deleteDepartment(data))
        })
    }
}


