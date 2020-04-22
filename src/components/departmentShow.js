import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { startGetDepartment } from '../action/departmentAction'


class DepartmentShow extends React.Component{
    componentDidMount(){
        if(this.props.department){
            this.props.dispatch(startGetDepartment())
        }
    }
     render(){
         console.log(this.props.match.params.id)
         return(
             <div>
            {this.props.dep?
        <div>
            <label>Name</label> <h3>{this.props.dep.name}</h3>  
            <label>ID</label> <h3>{this.props.dep._id}</h3>   
            <Link to={`departments/${this.props.match.params.id}`}>Edit</Link> 
               
               </div>    
              :''  
            }
               
             </div>
         )
     }
}
const mapStateToProps = (state,props)=>{
    return {
        dep:state.department.find((ele)=>ele._id ==props.match.params.id)
    }
}
export default connect(mapStateToProps)(DepartmentShow)
