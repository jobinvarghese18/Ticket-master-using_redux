import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {startGetCustomers, startDeleteCustomer} from '../action/customerAction'


class Customer extends React.Component{
    constructor(){
        super()
        this.state = {
            flag:false,
            status:false,
            id:''
        }
    }
    componentDidMount(){
    //    const auth = this.props.auth[0].token
    //    console.log("auth",auth)
        
    //         this.props.dispatch(startGetCustomers(auth))
    this.props.dispatch(startGetCustomers())
        
        
    }
    handleShow = (id)=>{
        const status = true
        const flag = false
        this.setState({flag,id,status})
        

         
    }
    handleRemove = (id)=>{
         this.props.dispatch(startDeleteCustomer(id))
    }

    handleClick = ()=>{
        const flag=true
        const status = false
       this.setState({flag,status})
    }
    render(){

        return(
            <div>
                <table border='1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.customers.map((ele)=>{
                            return(
                                <tr key={ele._id}>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.mobile}</td>
                                    <td><button onClick={()=>{this.handleShow(ele._id)}} className='myButton'>Show</button></td>
                                    {this.state.status?<Redirect to={`/customer/newcustomer/${this.state.id}`}/>:''}
                                    <td><button onClick={()=>{this.handleRemove(ele._id)}} className='myButton'>Remove</button></td>
                                </tr>
                            )
                        })

                    }
                </tbody>
                
                </table>
                <button className="myButton" onClick={this.handleClick}>ADD Customer</button>
                {this.state.flag?<Redirect to ={'/customer/newcustomer'}/>:''}
            </div>
        )
    }
}
const mapStateToProps =(state,props)=>{
    return{
            customers:state.customers,
            auth:state.auth
    }
}
export default connect(mapStateToProps)(Customer)