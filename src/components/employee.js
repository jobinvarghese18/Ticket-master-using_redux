import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from  'react-router-dom'
import {startGetEmployee} from '../action/employeeAction'

class Employee extends React.Component{
    constructor(){
        super()
        this.state = {
            addFlag:false
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetEmployee())
    }
    handleAddEmp = ()=>{
        this.setState({addFlag:true})
    }
    render(){
        console.log('employees',this.props.employee)
        return(
            <div>
                <h2>Employees Details</h2>
                {this.props.employee?
                <table border='1'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Mobile</th>
                            <th>Department</th>
                            <th>Action</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employee.map(emp=>{
                            return(
                                <tr>
                                    <td>{emp._id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.mobile}</td>
                                    <td>{emp.department.name}</td>
                                    <td><button className='myButton'>Show</button></td>
                                    <td><button className='myButton'>Remove</button></td>

                                </tr>
                            )
                        })}
                    </tbody>

                </table>:''}
               
                <button className='myButton' onClick={this.handleAddEmp}>Add Employee</button>
            {this.state.addFlag?<Redirect to={'/employee/employeenew'}/>:''}
            </div>
            
        )
    }
}
const mapStateToProps = (state,props)=>{
    return{
        employee:state.employee
    }
}
export default connect(mapStateToProps)(Employee)