import React from 'react'
import {connect} from 'react-redux'
import {startPostCustomer} from '../action/customerAction'

class CustomerNew extends React.Component{
    constructor(){
        super()
        this.state = {
            username:'',
            email:'',
            mobile:''
        }

    }
    handleChange = (e)=>{
        this.setState({ [e.target.name] : e.target.value})
    }
    handleSubmit =(e)=>{
        
          e.preventDefault()
          const  data = {
                name:this.state.username,
                email:this.state.email,
                mobile:this.state.mobile
            }
         const   redirect = ()=>{
                    return this.props.history.push('/customer')
            }
        this.props.dispatch(startPostCustomer(data,redirect))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Customer name</label>
                    <input type="text" name="username" id='username' 
                    value={this.state.username} onChange={this.handleChange}/><br/>
                    <label>E-Mail</label>
                    <input type="text" name="email" id='email' 
                    value={this.state.email} onChange={this.handleChange}/><br/>
                    <label>Mobile</label>
                    <input type="text" name="mobile" id='mobile' 
                    value={this.state.mobile} onChange={this.handleChange}/><br/>
                    <input type="submit" className='myButton'/>
                    <br/>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state,prosp)=>{
    return { 
          auth:state.auth
    }
}
export default connect(mapStateToProps)(CustomerNew)
