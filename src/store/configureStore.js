import React from 'react'
import thunk from 'redux-thunk'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import usersReducer from '../reducers/usersReducers'
import loginReducer from '../reducers/loginReducers'
import customerReducer from '../reducers/customerReducer'
import departmentReducer  from '../reducers/departmentReducer'
import employeeReducer from '../reducers/employeeReducer'

const configureStore = ()=>{
    const store =createStore(combineReducers({
      users:usersReducer,
      auth:loginReducer,
      customers:customerReducer,
      department:departmentReducer,
      employee:employeeReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore