import axios from 'axios'


export const setUsers = (user)=>{
    return{type:'SET_USERS',payload:user}
}

export const startGetUsers = ()=>{
    return (dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response.data)
            const user  = response.data
            dispatch(setUsers(user))
        })
    }
}
//User Registartion
export const setReg = (usr)=>{
    return{type:'POST_USERS',payload:usr}
}

export const startPostUsers = (data)=>{
    return (dispatch)=>{
        axios.post('http://dct-ticket-master.herokuapp.com/users/register',data)
        .then((response)=>{
            console.log(response.data)
            const usr = response.data
            dispatch(setReg(usr))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}



