import React from 'react'
import {connect} from 'react-redux'
import {startGetCustomers} from '../action/customerAction'


class CustomerShow extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    componentDidMount(){
        if(this.props.customers){
                this.props.dispatch(startGetCustomers())
        }
    }
    render(){
        console.log(this.props.customers)
        return(
            <div>
                
                <h2>Customee Details</h2>
                {this.props.customers? 
                
                <table border='1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-Mail</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    
                                <tr key={this.props.customers._id}>
                                    <td>{this.props.customers.name}</td>
                                    <td>{this.props.customers.email}</td>
                                    <td>{this.props.customers.mobile}</td>
                                </tr>
                            
                </tbody>
            </table>
                :''}
               
            </div>
        )
    }
}
const mapStateToProps =(state,props)=>{
    return {
            customers:state.customers.find(cst=>cst._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(CustomerShow)