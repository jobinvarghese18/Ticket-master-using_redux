const intialState = []

const employeeReducer = (state = intialState,action)=>{
    switch(action.type){
        case 'POST_EMP':{
            return state.concat(action.payload)
        }
        case 'GET_EMP':{
            return [].concat(action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
}
export default employeeReducer