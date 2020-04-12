import axios from 'axios'
//create employee
export const postEmployee  = (data)=>{
    return {type:'POST_EMP',payload:data}
}

export const startPostEmployee = (data)=>{
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
                console.log('err')
            }
            else{
                console.log(response.data)
                const emp =  response.data
                dispatch(postEmployee(emp))
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