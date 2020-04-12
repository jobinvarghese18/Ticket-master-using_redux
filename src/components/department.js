import React from 'react'
import{connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {startPostDepartment, startGetDepartment, startDeleteDepartment} from '../action/departmentAction'

class Department  extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'',
            showFlag:false,
            id:''
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetDepartment())
    }
    handleSubmit= (e)=>{
            e.preventDefault()
            const data = {
                name:this.state.name
            }
            this.props.dispatch(startPostDepartment(data))
            
    }
    handleShow = (id)=>{
        this.setState({id})
        this.setState({showFlag:true})
    }
    handleRemove =(id)=>{
        this.props.dispatch(startDeleteDepartment(id))
    }
    
    handleChange = (e)=>{
            this.setState({ [e.target.name]:e.target.value})
    }
    render(){

        return(
            <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Dep Name</th>
                            <th>Action</th>
                            <th>Remove</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.department.map((dep)=>{
                                return(
                                    <tr key={dep._id}>
                                        <td>{dep.name}</td>
                                        <td><button className='myButton' 
                                        onClick = {()=>{this.handleShow(dep._id)}}>show</button></td>
                                        <td><button className='myButton' 
                                        onClick={()=>{this.handleRemove(dep._id)}}>Delete</button></td>
                                       
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    {this.state.showFlag?<Redirect to={`department/${this.state.id}`}/>:''}
                </table>
                <form onSubmit={this.handleSubmit}>
                   <label>Department</label>
                   <input type='text' name='name' id='name' value={this.state.name}
                   onChange={this.handleChange}/><br/>
                   <input type ="submit" className='myButton'/>
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

export default connect(mapStateToProps)(Department)