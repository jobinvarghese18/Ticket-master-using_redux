import React from 'react'
import { connect } from 'react-redux'
import { startGetTicket } from '../action/ticketAction'

class TicketShow extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    componentDidMount(){
        if(!this.props.tickets){
            this.props.dispatch(startGetTicket())
        }
    }
    render(){
        console.log(this.props.tickets)
        return(
            <div>
                {this.props.tickets?
                <div> 
                 <h1>Ticket details</h1>
                 <h3>Code :{this.props.tickets.code}</h3>
                 <h4>Priority :{this.props.tickets.priority}</h4>
                 <h4>Message :{this.props.tickets.message}</h4>
                </div>:''}
                
            </div>

        )
    }
}
const mapStateToProps = (state,props)=>{
   return {
        tickets:state.tickets.find(tkt=>tkt._id === props.match.params.id)
   }
}
export default connect(mapStateToProps)(TicketShow)