import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from  'react-router-dom'
import {startGetEmployee, startDeleteEmployee} from '../action/employeeAction'

class Employee extends React.Component{
    constructor(){
        super()
        this.state = {
            addFlag:false,
            showFlag:false,
            id:''
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetEmployee())
    }
    handleShow =(id)=>{
        this.setState({showFlag:true})
        this.setState({id})
    }
    handleAddEmp = ()=>{
        this.setState({addFlag:true})
    }
    handleRemove = (id)=>{
        this.props.dispatch(startDeleteEmployee(id))
    }
    render(){
        console.log('employees',this.props.employee)
        return(
            <div>
                <h2>Employees Details</h2>
                <div className='row'>
                <div className='col mt-3'>
                {this.props.employee?
                <table className='table'>
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
                                <tr key={emp._id}>
                                    <td>{emp._id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.mobile}</td>
                                    <td>{emp.department?emp.department.name:'loading'}</td>
                                    <td><button className='btn btn-info' onClick={()=>{this.handleShow(emp._id)}}>Show</button></td>
                                    <td><button className='btn btn-danger' onClick={()=>{this.handleRemove(emp._id)}}>Remove</button></td>

                                </tr>
                            )
                        })}
                    </tbody>

                </table>:''}
                </div>
                </div>
               
                <button className='btn btn-info' onClick={this.handleAddEmp}>Add Employee</button>
            {this.state.addFlag?<Redirect to={'/employee/employeenew'}/>:''}
            {this.state.showFlag?<Redirect to={`/employee/${this.state.id}`}/>:''}
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