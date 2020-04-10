const initialState = []

const loginReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'POST_LOGIN':{
            return [].concat(action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
}

export default loginReducer