const  initialState = []

const customerReducer =(state=initialState,action)=>{
   switch(action.type){
       case 'SET_CUSTOMER' :{
           return [].concat(action.payload)
       }
       case 'GET_CUSTOMER':{
           return [].concat(action.payload)
       }
       case 'DELETE_CUSTOMER':{
        return [].concat(state.filter(user=>user._id != action.payload._id))
       }
       default:{
           return [].concat(state)
       }
   }
}
export default customerReducer