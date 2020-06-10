import React from 'react'
import {connect} from 'react-redux'
import{Link} from'react-router-dom'
import {startLogout} from '../action/userAction'


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
        this.props.dispatch(startLogout())
    }
    render()
    { 
    return(
        <div>
        {localStorage.getItem('auth')? 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#"></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <Link class="nav-link" to="#">Home <span class="sr-only">(current)</span></Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/customer">Customers</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/employee">Employee</Link>
    </li>
    <li class="nav-item dropdown">
      <Link class="nav-link dropdown-toggle" to="/department" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Department
      </Link>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="/department">Department</a>
        <a class="dropdown-item" href="/employee">Employee</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/ticket">Tickets</Link>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <Link class="nav-link" onClick={this.handleLogut} to="/login">Log out<span class="sr-only">(current)</span></Link>
    </li>
    </ul>
  </form>
</div>
</nav>
:<div>
       
              
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to='#'>Home <span class="sr-only">(current)</span></Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
      <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/userreg">Sign up</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/login">Sign in<span class="sr-only">(current)</span></Link>
      </li>
      </ul>
    </form>
  </div>
</nav>

                {/* <ul className="myUl">
                <li><Link className='myuLink' to='/login'>Login</Link></li>
                <li><Link className='myuLink' to='/userreg'>Register</Link></li> 
                </ul> */}
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