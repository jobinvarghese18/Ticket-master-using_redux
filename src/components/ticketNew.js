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
                        _id:this.state.employee
                    }
                ],
                priority:this.state.priority,
                message:this.state.message
        }
        const redirect  = ()=>{
          return  this.props.history.push('/ticket')
        }
        this.props.dispatch(startPostTicket(data,redirect))
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSelect = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        console.log(this.state.employee)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Add Ticket</h1>
                <div className='form-group'>
                <label>Code</label> <h4>{this.state.random}</h4><br/>
                </div>
                <div className='form-group'>
                <label>Customer</label>
                <select className='form-control' onChange={this.handleSelect}name='customer'>
                    <option>---select---</option>
                    {
                        this.props.customer.map((cstr=>{
                            return(
                                <option key={cstr._id} value={cstr._id}>{cstr.name}</option>
                            )
                        }))
                    }
                </select>
                </div>
                <div className='form-group'>
                <label>Department</label>
                <select className='form-control' onChange={this.handleSelect}name='department'>
                    <option>---select---</option>
                    {
                        this.props.department.map((dep=>{
                            return(
                                <option key={dep._id} value={dep._id}>{dep.name}</option>
                            )
                        }))
                    }
                </select>
                </div>
                <div className='form-group'>
                <label>Employee</label>
                <select className='form-control' onChange={this.handleSelect}name='employee'>
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
                </select>
                </div>
                <div className='form-group'>
                <label>Message</label>
                <input className='form-control' type="textarea"  name ='message' onChange={this.handleChange} id='message'/></div>
                <div className='form-group'>
                <input  type='radio' id='high' onChange={this.handleChange} value ='high' name='priority'/><label>High</label></div>
                <div className='form-group'>
                <input  type='radio' id='medium' onChange={this.handleChange} value ='medium' name='priority'/><label>Meidum</label></div>
                <div className='form-group'>
                <input type='radio' id='low'  onChange={this.handleChange} value ='low' name='priority'/><label>Low</label></div>
                <input type='submit' className='btn btn-primary'/>
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