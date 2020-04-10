const initialState = []

const userReducer = (state=initialState,action)=>{
  switch(action.type){
      case 'SET_USERS' :{
          return [].concat(action.payload)
      }
      case 'POST_USERS':{
          return [].concat(action.payload)
      }
      
      default:{
          return [].concat(state)
      }
  }
}
export default userReducer