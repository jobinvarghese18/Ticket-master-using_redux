import axios  from 'axios'
//Post to tickets
export const postTicket = (data)=>{
    return {type:'POST_TICKET',payload:data}
}

export const startPostTicket = (data,redirect)=>{
    return(dispatch)=>{
        let auth  = localStorage.getItem('auth')
        auth = JSON.parse(auth)
        axios.post(`http://dct-ticket-master.herokuapp.com/tickets`,data,{
            headers:{
                'x-auth':auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const data = response.data
            if(data.hasOwnProperty('errors')){
               alert('Invalid Entry')
            }
            else{
                dispatch(postTicket(data))
                redirect()
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//Get all tickets
export const getTicket = (data)=>{
    return { type:'GET_TICKET',payload:data}
}

export const startGetTicket = ()=>{
    return(dispatch)=>{
        let auth  = localStorage.getItem('auth')
        auth = JSON.parse(auth)
        axios.get(`http://dct-ticket-master.herokuapp.com/tickets`,{
            headers:{
                'x-auth':auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const data = response.data
            dispatch(getTicket(data))

        })
        .catch((err)=>{
            console.log(err)
        })
    }
}