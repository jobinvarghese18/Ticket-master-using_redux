import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {startPostLogin} from '../action/LoginAction'
import '../app.css'


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
                <form onSubmit={this.handleSubmit}>
                    <label>E-Mail</label>
                    <input type="text" id='email' name='email' onChange={this.handleOnChange}/><br/>
                    <label>Password</label>
                    <input type="text"  id="password" name="password" onChange={this.handleOnChange}/><br/>
                    <input className='myButton' value='Login' type="submit"/>
                    {this.props.token.length>0?<Redirect to='/'/>:''}
                </form>
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