const initialState = []

const ticketReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'POST_TICKET':{
            return state.concat(action.payload)
        }
        case 'GET_TICKET':{
            return [].concat(action.payload)
        }
        case 'DELETE_TICKET':{
            return [].concat(state.filter(tkt=>tkt._id != action.payload._id))
        }
        default : {
            return [].concat(state)
        }
    }
}
export default ticketReducer