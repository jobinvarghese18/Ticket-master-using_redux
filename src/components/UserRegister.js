import React from 'react'
import {connect} from 'react-redux'


// import '../app.css'
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
                <div className='row'>
                    <div className='col-md-4 offset-4'>
                <h3>Register here..!</h3>
                <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="username">Name</label>
                    <input type="text" name="username" id="username" className='form-control'value={this.state.username}
                    onChange={this.handleChange}/></div>
                    <div className='form-group'>
                    <label>E-mail</label>
                    <input type="text" name="email" id='email' className='form-control' vlaue={this.state.email}
                    onChange={this.handleChange}/></div>
                    <div className='form-group'>
                    <label>Password</label>
                    <input type="text" name="password" id='password' className='form-control' value ={this.state.password}
                    onChange={this.handleChange}/></div>
                    <input type="submit" value="Register" className='btn btn-primary'/>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
return {
    
}
}
export default connect(mapStateToProps)(UserRegister)