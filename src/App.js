import React from'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
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
import EmployeeShow from './components/employeeShow'
import ticket from './components/ticket'
import ticketNew from './components/ticketNew'
import ticketShow from './components/ticketShow'
import departmentEdit from './components/departmentEdit'
import ticketEdit from './components/ticketEdit'
import customerEdit from './components/customerEdit'
import employeeEdit from './components/employeeEdit'


function App(props){
    return(
           <BrowserRouter>
           <div className='container'>
               
               <Route path='/' component={Home} />
               <Route path='/userreg' component = {UserRegister}/>
               <Route path='/login' component={Login}/>
               <Route path='/customer' exact={true} component={Customer}/>
               <Route path='/customer/newcustomer' exact ={true} component={CustomerNew}/>
               <Route path='/customer/newcustomer/:id'exact = {true}component={customerShow}/>
               <Route path='/customer/newcustomer/customers/:id' component={customerEdit}/>
               <Route path='/department' exact={true} component={department}/>
               <Route path='/department/:id' exact={true} component = {departmentShow} />
               <Route path='/department/departments/:id' component = {departmentEdit}/>
               <Route path ='/employee' component={Employee} exact = {true}/>
               <Route path='/employee/employeenew' component={EmployeeNew}/>
               <Route path='/employee/:id' exact={true} component={EmployeeShow}/>
               <Route path='/employee/:id/:id' component={employeeEdit}/>
               <Route path='/ticket' exact={true} component={ticket}/>
               <Route path='/ticket/new' exact={true} component = {ticketNew}/>  
               <Route path='/tickets/:id' exact={true} component = {ticketShow}/>
               <Route path='/tickets/ticket/:id' component = {ticketEdit}/>
               
           </div>
           </BrowserRouter>
    )
}

export default  App