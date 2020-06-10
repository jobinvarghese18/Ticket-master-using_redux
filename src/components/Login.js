import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {startPostLogin} from '../action/LoginAction'
// import '../app.css'


class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email:'',
            password:''
        }
    }
    handleOnChange = (e)=>{
       this.setState({ [e.target.name]:e.target.value })
    }
    handleSubmit = (e)=>{
            e.preventDefault()
             const data = {
                 email:this.state.email,
                 password:this.state.password
             }
             this.props.dispatch(startPostLogin(data))
            
    }
    render(){
        
        return(
            <div>
                <div className='row'>
                    <div className='col-md-4 offset-4'>
                        <h3>Login here</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                    <label>E-Mail</label>
                    <input type="text" id='email' className='form-control' name='email' onChange={this.handleOnChange}/></div>
                    <label>Password</label>
                    <div className='form-group'>
                    <input type="text"  id="password" className='form-control'name="password" onChange={this.handleOnChange}/></div>
                    <input className='btn btn-primary' value='Login' type="submit"/>
                    {this.props.token.length>0?<Redirect to='/'/>:''}
                </form>
                </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return {
         token:state.auth
    }
}
export default connect(mapStateToProps)(Login)