const initialState = []

const ticketReducer = (state,action)=>{
    switch(action.type){
        case 'POST_TICKET':{
            return state.concat(action.payaload)
        }
        default : {
            return [].concat(state)
        }
    }
}
export default ticketReducer