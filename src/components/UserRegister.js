import React from 'react'
import {connect} from 'react-redux'


import '../app.css'
import {startPostUsers} from '../action/userAction'


class UserRegister extends React.Component{
    constructor(){
        super()
        this.state = {
            username:'',
            email:'',
            password:''
        }
    }
    handleChange =(e)=>{
        this.setState({ [e.target.name] : e.target.value })
    }
    handleSubmit= (e)=>{
        e.preventDefault()
        const data = {
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        this.props.dispatch(startPostUsers(data))
    }
    render(){
        return(
            <div>
                <h1>User REG</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Name</label>
                    <input type="text" name="username" id="username" value={this.state.username}
                    onChange={this.handleChange}/><br/>
                    <label>E-mail</label>
                    <input type="text" name="email" id='email' vlaue={this.state.email}
                    onChange={this.handleChange}/><br/>
                    <label>Password</label>
                    <input type="text" name="password" id='password' value ={this.state.password}
                    onChange={this.handleChange}/><br/>
                    <input type="submit" value="Register" className='myButton'/>
                    </form>
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
return {
    
}
}
export default connect(mapStateToProps)(UserRegister)