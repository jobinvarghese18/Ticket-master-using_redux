import customerReducer from "./customerReducer"

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
        case 'UPDATE_TICKET':{
            return state.map(tkt=>{
                if(tkt._id===action.payload._id){
                    return Object.assign({},tkt,action.payload)
                }
                else{
                    return Object.assign({},tkt)
                }
            })  
        }
        case 'UPDATE_ISRESOLVED':{
            return state.map(tkt=>{
                if(tkt._id === action.payload._id){
                    return Object.assign({},tkt,action.payload)
                }
                else{
                    return Object.assign({},tkt)
                }
            })
        }
        default : {
            return [].concat(state)
        }
    }
}
export default ticketReducer