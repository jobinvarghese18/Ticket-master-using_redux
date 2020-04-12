const intialState = []
const departmentReducer = (state = intialState,action)=>{
    switch(action.type){
        case 'POST_DEPARTMENT':{
            return state.concat(action.payload)
        }
        case 'GET_DEPARTMENT':{
            return [].concat(action.payload)
        }
        case 'DELETE_DEP':{
            return [].concat(state.filter(dep=>dep._id != action.payload._id))
        }
        default : {
            return [].concat(state)
        }
    }
}
export default departmentReducer