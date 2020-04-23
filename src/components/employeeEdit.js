import React from 'react'
import {connect} from 'react-redux'
import { startGetEmployee, startUpdateEmployee } from '../action/employeeAction'


class EmployeeEdit extends React.Component{
    constructor(){
        super()
        this.state = {
             name:''
        }
    }
    componentDidMount(){
        if(this.props.employee){
            this.props.dispatch(startGetEmployee)
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        const data  = {
            name :this.state.name
        }
        const redirect = ()=>{
            return this.props.history.push('/employee')
        }
        this.props.dispatch(startUpdateEmployee(this.props.match.params.id,data,redirect))
    }
    render(){
        console.log(this.state.name)
        return(
            <div>
                <h3>Employee Edit</h3>
                {this.props.employee? 
                    <form onSubmit={this.handleSubmit}>
                    <label>ID</label>
                    <input type='text' value={this.props.employee.email}/> <br/>
                    <label>E-mail</label>
                    <input type='text' id ='name' name = 'name'
                    onChange={this.handleChange}
                    value={this.state.name.length>0?this.state.name:this.props.employee.name}/> <br/>
                    <input type='submit' className ='myButton'/>
                </form>
                :''}
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return {
        employee:state.employee.find(emp=>emp._id === props.match.params.id)
    }
}
export default connect(mapStateToProps)(EmployeeEdit)
//.find(emp=>emp._id === this.props.match.params.id)