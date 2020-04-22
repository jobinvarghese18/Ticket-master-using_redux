import React from 'react'
import { connect } from 'react-redux'
import { startGetTicket, startUpdateTicket } from '../action/ticketAction'

class TicketEdit extends React.Component{
    constructor(){
        super()
        this.state = {
            priority:''
        }
    }
    componentDidMount(){
        if(this.props.tickets){
            this.props.dispatch(startGetTicket())
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = (e)=>{
        e.preventDefault()
       const data = {
            priority:this.state.priority
        }
       const redirect = ()=>{
           return this.props.history.push('/ticket')
       }
        this.props.dispatch(startUpdateTicket(data,this.props.match.params.id,redirect))
    }
    render(){
        
        return(
           <div>TicketEdit

               {this.props.tickets?
               <div>
                   <h3>{this.props.tickets.code}</h3>
                   <form onSubmit={this.handleSubmit}>
                    <input type='radio' id='high' onChange={this.handleChange} value ='high' name='priority'/><label>High</label><br/>
                    <input type='radio' id='medium' onChange={this.handleChange} value ='medium' name='priority'/><label>Meidum</label><br/>
                    <input type='radio' id='low' onChange={this.handleChange} value ='low' name='priority'/><label>Low</label><br/>
                    <input type='submit' className='myButton'/>
                   </form>
               </div>:''}
           </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return {
        tickets:state.tickets.find(tkt=>tkt._id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(TicketEdit)