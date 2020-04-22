import React from 'react'
import { connect } from 'react-redux'
import {startGetCustomers, startUpdateCustomer} from '../action/customerAction'

class CustomerEdit extends React.Component{
    constructor(){
        super()
        this.state = {
            email:''
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        const data  = {
            email:this.state.email
        }
        const redirect = ()=>{
            return this.props.history.push('/customer')
        }
        this.props.dispatch(startUpdateCustomer(data,this.props.match.params.id,redirect))
    }
    componentDidMount(){
        if(this.props.customer){
            this.props.dispatch(startGetCustomers())
        }
    }

    render(){
        return(
            <div>
                <h3>Customer Edit</h3>
                {this.props.customer?
                <div>
                    <form onSubmit={this.handleSubmit}> 
                    <label>Name</label> <input type='text' value={this.props.customer.name}/><br/>
                    <label>E-mail</label> <input type='text' name='email' id='email' 
                    onChange={this.handleChange} 
                    value={this.state.email.length>0?this.state.email:this.props.customer.email}/>
                    <br/>
                    <input type='submit' className = 'myButton'/>
                    </form>
                    
                </div>
                :''}
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return{
        customer:state.customers.find(cstmr=>cstmr._id === props.match.params.id)
    }
}
export default connect(mapStateToProps)(CustomerEdit)