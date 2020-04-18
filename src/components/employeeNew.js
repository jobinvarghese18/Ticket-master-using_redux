import React from 'react' 
import {connect} from 'react-redux'
import { startGetDepartment } from '../action/departmentAction'
import {startPostEmployee} from '../action/employeeAction'

class EmployeeNew extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'',
            phone:'',
            id:'',
            email:''
        }
    }
    componentDidMount(){
     
        this.props.dispatch(startGetDepartment())
    }
    handleSelect = (e)=>{
        this.setState({id:e.target.value})
    }
    handleChange = (e)=>{
        this.setState({ [e.target.name]:e.target.value})
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        const redirect  = ()=>{
                return this.props.history.push('/employee')
        }
        const data  = {
                name:this.state.name,
                email:this.state.email,
                mobile:this.state.phone,
                department:this.state.id

        }
        this.props.dispatch(startPostEmployee(data,redirect))
    }
    render(){
        return(
            <div>
                <h1>ADD Employee</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' onChange={this.handleChange}
                    value={this.state.name} /><br/>
                    <label htmlFor='phone'>Phone</label>
                    <input type='text' name='phone' id='phone' onChange={this.handleChange}
                    value={this.state.phone} /><br/>
                    <label htmlFor='email'>E-mail</label>
                    <input type='text' name='email' id='email' onChange={this.handleChange}
                    value={this.state.email} /><br/>
                    <label htmlFor='select'>Department</label>
                    <select name='select' onClick={this.handleSelect}>
                    <option>--select--</option>
                        {
                            
                            this.props.department.map(dep=>{
                                
                                return(
                                    
                                    <option key={dep._id} value={dep._id}>{dep.name}</option>
                                )
                            })
                        }
                    </select><br/>
                    <input type="submit" className='myButton'/>

                </form>
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return {
          department:state.department
    }
}
export default connect(mapStateToProps)(EmployeeNew)