import React from 'react'
import { connect } from 'react-redux'
import {  startGetCustomers } from '../action/customerAction'
import { startGetDepartment } from '../action/departmentAction'
import { startGetEmployee } from '../action/employeeAction'
import { startPostTicket } from '../action/ticketAction'

class Tickets extends React.Component{
    constructor(){
        super()
        this.state = {
            message:'',
            customer:'',
            department:'',
            employee:'',
            random:'',
            priority:''
        }
    }
    componentDidMount(){
        if(this.props.customer){
          this.props.dispatch(startGetCustomers())  
        }
        if(this.props.department){
            this.props.dispatch(startGetDepartment())
        }
        if(this.props.employee){
            this.props.dispatch(startGetEmployee())
        }
    }
    handleSubmit = (e)=>{
        const random = Number(new Date())
        e.preventDefault()
        this.setState({random})
        console.log(this.state.random)
        const data = {
                code:String(random),
                customer:this.state.customer,
                department:this.state.department,
                employees:[
                    {
                        id:this.state.employee
                    }
                ],
                priority:this.state.priority,
                message:this.state.message
        }
        this.props.dispatch(startPostTicket(data))
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSelect = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Add Ticket</h1>
                <label>Code</label> <h4>{this.state.random}</h4><br/>
                <label>Customer</label>
                <select onChange={this.handleSelect}name='customer'>
                    <option>---select---</option>
                    {
                        this.props.customer.map((cstr=>{
                            return(
                                <option key={cstr._id} value={cstr._id}>{cstr.name}</option>
                            )
                        }))
                    }
                </select>
                <br/>
                <label>Department</label>
                <select onChange={this.handleSelect}name='department'>
                    <option>---select---</option>
                    {
                        this.props.department.map((dep=>{
                            return(
                                <option key={dep._id} value={dep._id}>{dep.name}</option>
                            )
                        }))
                    }
                </select><br/>
                <label>Employee</label>
                <select onChange={this.handleSelect}name='employee'>
                    <option>---select---</option>
                    {
                        this.props.employee.map((emp=>{
                            if(emp.department._id === this.state.department){
                                return(
                                    <option key={emp._id} value={emp._id}>{emp.name}</option>
                                )
                            }
                            
                        }))
                    }
                </select><br/>
                <br/>
                <label>Message</label>
                <input type="textarea"  name ='message' onChange={this.handleChange} id='message'/><br/>
                <input type='radio' id='high' onChange={this.handleChange} value ='high' name='priority'/><label>High</label><br/>
                <input type='radio' id='medium' onChange={this.handleChange} value ='medium' name='priority'/><label>Meidum</label><br/>
                <input type='radio' id='low' onChange={this.handleChange} value ='low' name='priority'/><label>Low</label><br/>
                <input type='submit' className='myButton'/>
                </form>
            </div>
        )
    }
}

const mapToState = (state,props)=>{
    return {
     customer:state.customers,
     department:state.department,
     employee:state.employee
    }
}
export default connect(mapToState)(Tickets)