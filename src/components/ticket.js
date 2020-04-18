import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class TicketHome extends React.Component{
    render(){
        return(
            <div>
                Hello ticket home
                <Link to ={'ticket/new'}>New ticket</Link>
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return {

    }
}
export default connect(mapStateToProps)(TicketHome)