import axios  from 'axios'
//Post to tickets
export const postTicket = (data)=>{
    return {type:'POST_TICKET',payload:data}
}

export const startPostTicket = (data)=>{
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
            dispatch(postTicket(data))
        })
    }
}