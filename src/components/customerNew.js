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
                <div className='row'>
                    <div className='col-md-4 offset-4'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                    <label>Customer name</label>
                    <input type="text" name="username" id='username' 
                    value={this.state.username} onChange={this.handleChange}
                    className='form-control'/>
                    </div>
                    <div className='form-group'>
                    <label>E-Mail</label>
                    <input type="text" name="email" id='email' 
                    value={this.state.email} onChange={this.handleChange}
                    className='form-control'/>
                    <label>Mobile</label>
                    </div>
                    <div className='form-group'>
                    <input type="text" name="mobile" id='mobile' 
                    value={this.state.mobile} onChange={this.handleChange}
                    className='form-control'/>
                    <input type="submit" className='btn btn-info mt-3'/>
                    </div>
                </form>
                </div>
                </div>
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
