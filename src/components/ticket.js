import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {startGetTicket} from '../action/ticketAction'
import { startGetCustomers} from '../action/customerAction'
import { startGetDepartment } from '../action/departmentAction'
import {startGetEmployee} from '../action/employeeAction'
import {startDeleteTickets} from '../action/ticketAction'

class TicketHome extends React.Component{
    componentDidMount(){
        if(this.props.tickets){
            this.props.dispatch(startGetTicket())
        }
        
        if(this.props.customer){
            this.props.dispatch(startGetCustomers())
        }
        if(this.props.department){
            this.props.dispatch(startGetDepartment())
        }
        if(this.props.employees){
            this.props.dispatch(startGetEmployee())
        }
    }
    handleShow = (id)=>{
        return this.props.history.push(`/tickets/${id}`)
    }
    handleRemove = (id)=>{
         this.props.dispatch(startDeleteTickets(id))
    }
    render(){
       
        return(
            <div>
                
               <h1>Ticket Home</h1>
                <table border='1'>
                <thead>
                    <tr>
                        <th>Code No.</th>
                        <th>Customer</th>
                        <th>Department</th>
                        <th>Employee</th>
                        <th>Message</th>
                        <th>priority</th>
                        <th>action</th>
                        <th>Remove</th>
                        <th>Complete</th>
                    </tr>
                
                </thead>
                <tbody>
                    {this.props.customer !=  [] && this.props.employees !=[]?
                    
                    
                        this.props.tickets.map(tkts=>{
                            let department = this.props.department.find(dep=>dep._id==tkts.department)
                            let customer = this.props.customer.find(cst=>cst._id === tkts.customer)
                            let employee =  this.props.employees.find(emp=>emp._id == tkts.employees[0]._id)
                            return(
                                <tr key={tkts._id}>
                                  <td>{tkts.code}</td>
                                  <td>{customer?customer.name:'loading'}</td>
                                  <td>{department?department.name:'loading'}</td>
                                  <td>{employee?employee.name:'loading'}</td>
                                  <td>{tkts.message}</td>
                                  <td>{tkts.priority}</td>
                                  <td><button className='myButton' onClick={()=>{this.handleShow(tkts._id)}}>show</button></td>
                                  <td><button className='myButton' onClick={()=>{this.handleRemove(tkts._id)}}>Remove</button></td>
                                  <td><input type='checkbox'/></td>
                                </tr>
                            )
                        })
                    
                    
                    :''}
                    
                </tbody>
                </table>
                <Link to ={'ticket/new'}>New ticket</Link>
              
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return {
        tickets:state.tickets,
        employees:state.employee,
        department:state.department,
        customer:state.customers
    }
}
export default connect(mapStateToProps)(TicketHome)