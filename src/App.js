import React from'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
// import Login from './components/Login'
import Home from './components/Home'
import UserRegister from './components/UserRegister'
import Login from './components/Login'
import Customer from './components/customer'
import CustomerNew from './components/customerNew'
import customerShow from './components/customerShow'
import department from './components/department'
import departmentShow from './components/departmentShow'
import Employee from './components/employee'
import EmployeeNew from './components/employeeNew'


function App(props){
    return(
           <BrowserRouter>
           <div>
               
               <Route path='/' component={Home} />
               <Route path='/userreg' component = {UserRegister}/>
               <Route path='/login' component={Login}/>
               <Route path='/customer' exact={true} component={Customer}/>
               <Route path='/customer/newcustomer' exact ={true} component={CustomerNew}/>
               <Route path='/customer/newcustomer/:id'component={customerShow}/>
               <Route path='/department' exact={true} component={department}/>
               <Route path='/department/:id' component = {departmentShow} />
               <Route path ='/employee' component={Employee} exact = {true}/>
               <Route path='/employee/employeenew' component={EmployeeNew}/>
           </div>
           </BrowserRouter>
    )
}

export default  App