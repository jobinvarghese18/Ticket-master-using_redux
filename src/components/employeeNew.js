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
                 <h2>ADD Employee</h2>
                <div className='row'>
                    <div className='col-md-8 offset-2'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' className='form-control' onChange={this.handleChange}
                    value={this.state.name} />
                    </div>
                    <div className='form-group'>
                    <label htmlFor='phone'>Phone</label>
                    <input type='text' name='phone' id='phone' className='form-control' onChange={this.handleChange}
                    value={this.state.phone} />
                    </div>
                    <div className='form-group'>
                    <label htmlFor='email'>E-mail</label>
                    <input type='text' name='email' id='email' className='form-control' onChange={this.handleChange}
                    value={this.state.email} />
                    </div>
                    <div className='form-group'>
                    <label htmlFor='select'>Department</label>
                    <select name='select' className='form-control' onClick={this.handleSelect}>
                    <option>--select--</option>
                        {
                            
                            this.props.department.map(dep=>{
                                
                                return(
                                    
                                    <option key={dep._id} value={dep._id}>{dep.name}</option>
                                )
                            })
                        }
                    </select><br/>
                    </div>
                    <input type="submit" className='btn btn-primary'/>

                </form>
                </div>
                </div>
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