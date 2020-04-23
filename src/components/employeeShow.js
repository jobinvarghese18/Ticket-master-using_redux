import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class EmployeeShow extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
     
        return(
            <div> 
            {this.props.employee?
            <div>
                <h3>Name : {this.props.employee.name}</h3>
                <h4>Email : {this.props.employee.email}</h4>
                <h4>Department : {this.props.employee.department.name}</h4>
                <Link to={`employee/${this.props.match.params.id}/${this.props.match.params.id}`}>Edit</Link>
            </div>
            
            
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
export default connect(mapStateToProps)(EmployeeShow)