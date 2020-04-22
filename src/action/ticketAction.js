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




//Delete Ticket 

export const  deleteTickets = (data)=>{
    return {type:'DELETE_TICKET',payload:data}
}

export const startDeleteTickets = (id)=>{
    return(dispatch)=>{
        let auth = localStorage.getItem('auth')
        auth = JSON.parse(auth)
        axios.delete(`http://dct-ticket-master.herokuapp.com/tickets/${id}`,{
            headers:{
                'x-auth':auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const data = response.data
            dispatch(deleteTickets(data))
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


//Update Ticket
export const updateTicket =  (data)=>{
    return { type:'UPDATE_TICKET',payload:data}
}

export const startUpdateTicket = (data,id,redirect)=>{
    return (dispatch)=>{
        let auth  =  localStorage.getItem('auth')
        auth = JSON.parse(auth)
        axios.put(`http://dct-ticket-master.herokuapp.com/tickets/${id}`,data,{
            headers : {
                'x-auth' : auth
            }
        })
        .then((response)=>{
            console.log(response.data)
            const data = response.data
            if(response.hasOwnProperty('errors')){
                alert('Invalid entry')
            }
            else{
                dispatch(updateTicket(data))
                redirect()
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}