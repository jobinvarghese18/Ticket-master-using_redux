import React from 'react'
import {connect} from 'react-redux'
import{Link} from'react-router-dom'
import '../app.css'


class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    componentDidUpdate(){
        if(this.props.auth.length>0){
            const data =localStorage.getItem('auth')
         }
    }
    handleLogut=()=>{
        localStorage.clear()
    }
    render()
    {
        // if(this.props.auth.length>0){
        //     const data = this.props.auth[0].token
        //     localStorage.setItem('auth',JSON.stringify(data))
        // }
       
    return(
        <div>
            <h1>Home</h1>
        {localStorage.getItem('auth')? <ul className="myUl">
             
             <li><Link className='myuLink' to='/customer'>Customers</Link></li>
             <li><Link className='myuLink' to='/department'>Department</Link></li> 
             <li><Link className='myuLink' to='/employee'>Employee</Link></li>
             <li><Link className='myuLink' to='/ticket'>Tickets</Link></li>
             <li><Link className='myuLink' onClick={this.handleLogut} to='/'>Logout</Link></li>
</ul>:<div>
    
                <ul className="myUl">
                <li><Link className='myuLink' to='/login'>Login</Link></li>
                <li><Link className='myuLink' to='/userreg'>Register</Link></li> 
                </ul>
    </div>}
     
        </div>
    )
    }
}
const mapStateToProps  =(state,props)=>{
    return {
        auth:state.auth
    }
}
export default connect(mapStateToProps)(Home)