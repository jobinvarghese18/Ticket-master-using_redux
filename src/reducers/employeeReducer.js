const intialState = []

const employeeReducer = (state = intialState,action)=>{
    switch(action.type){
        case 'POST_EMP':{
            return state.concat(action.payload)
        }
        case 'GET_EMP':{
            return [].concat(action.payload)
        }
        case 'DELETE_EMP':{
            console.log('empl',action.payload._id)
            return [].concat(state.filter(emp=>emp._id != action.payload._id))
        }
        default:{
            return [].concat(state)
        }
    }
}
export default employeeReducer