import React from 'react'
import { connect } from 'react-redux'
import {startUpdateDepartment, startGetDepartment} from '../action/departmentAction'

class DepartmentEdit extends React.Component{
    constructor(){
        super()
        this.state = {
            depName:''
        }
    }
    componentDidMount(){
        if(this.props.speficDep){
            this.props.dispatch(startGetDepartment())
        }
    }
    handleChange = (e)=>{
        this.setState({ [e.target.name]:e.target.value})
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        const data = {
            name:this.state.depName
        }
        this.props.dispatch(startUpdateDepartment(data,this.props.match.params))
    }
    render(){
        return(
            <div>Hello Edit
                <form onSubmit={this.handleSubmit}>
                    {this.props.speficDep?
                    <div>
                    <h3>Name : {this.props.speficDep.name}</h3>
                    <input type="text" name='depName' id = 'depName' 
                    value = {this.state.depName} onChange = {this.handleChange}/><br/>
                    <input type='submit' className='myButton'/>
                    </div>
                    :'Loading'}
                </form>
            </div>
            
        )
    }
}
const mapStateToProps  = (state,props)=>{
  return {
     speficDep:state.department.find((dep)=>dep._id == props.match.params.id)
  }
}
export default connect(mapStateToProps)(DepartmentEdit)