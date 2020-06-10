import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {startGetTicket, startUpdateIsResolved} from '../action/ticketAction'
import { startGetCustomers} from '../action/customerAction'
import { startGetDepartment } from '../action/departmentAction'
import {startGetEmployee} from '../action/employeeAction'
import {startDeleteTickets} from '../action/ticketAction'
import {Chart} from 'react-google-charts'


const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"] // CSS-style declaration
  ];

const pieOptions = {
    title: "",
    pieHole: 0.6,
    slices: [
      {
        color: "#2BB673"
      },
      {
        color: "#d91e48"
      },
      {
        color: "#007fad"
      },
      {
        color: "#e9a227"
      }
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto"
  }

class TicketHome extends React.Component{
    constructor(){
        super()
        this.state = {
            checkbox:false
        }
    }
    componentDidMount(){
        if(this.props.tickets){
            this.props.dispatch(startGetTicket())
        }
        
        if(this.props.customer){
            this.props.dispatch(startGetCustomers())
        }
        if(this.props.department){
            this.props.dispatch(startGetDepartment())
        }
        if(this.props.employees){
            this.props.dispatch(startGetEmployee())
        }
    }
    handleCheckBox  = (value,id)=>{
     const data  = {
         isResolved:!value
     }
     this.props.dispatch(startUpdateIsResolved(id,data))

    }
    handleShow = (id)=>{
        return this.props.history.push(`/tickets/${id}`)
    }
    handleRemove = (id)=>{
         this.props.dispatch(startDeleteTickets(id))
    }
    render(){
       
       const filteredTickets = this.props.tickets.filter(tkt=>tkt.isResolved === false)
       const completed = this.props.tickets.filter(tkt=>tkt.isResolved === true)
       console.log(filteredTickets)
       const high = filteredTickets.filter(tkt=>tkt.priority === 'high').length
       const medium = filteredTickets.filter(tkt=>tkt.priority === 'medium').length
       const low = filteredTickets.filter(tkt=>tkt.priority === 'low').length
      
        return(
            <div>
                
               <h1>Ticket Home</h1>
                <table className='table'>
                <thead>
                    <tr>
                        <th>Code No.</th>
                        <th>Customer</th>
                        <th>Department</th>
                        <th>Employee</th>
                        <th>Message</th>
                        <th>priority</th>
                        <th>action</th>
                        <th>Remove</th>
                        <th>Complete</th>
                    </tr>
                
                </thead>
                <tbody>
                    {this.props.customer !=  [] && this.props.employees !=[]?
                    
                    
                        this.props.tickets.map(tkts=>{
                            let department = this.props.department.find(dep=>dep._id==tkts.department)
                            let customer = this.props.customer.find(cst=>cst._id === tkts.customer)
                            let employee =  this.props.employees.find(emp=>emp._id == tkts.employees[0]._id)
                            if(!tkts.isResolved){
                                return(
                                    <tr key={tkts._id}>
                                      <td>{tkts.code}</td>
                                      <td>{customer?customer.name:'loading'}</td>
                                      <td>{department?department.name:'loading'}</td>
                                      <td>{employee?employee.name:'loading'}</td>
                                      <td>{tkts.message}</td>
                                      <td>{tkts.priority}</td>
                                      <td><button className='btn btn-info' onClick={()=>{this.handleShow(tkts._id)}}>show</button></td>
                                      <td><button className='btn btn-danger' onClick={()=>{this.handleRemove(tkts._id)}}>Remove</button></td>
                                      <td><input type='checkbox' value={tkts.isResolved} 
                                      onChange={()=>{this.handleCheckBox(tkts.isResolved,tkts._id)}}/></td>
                                    </tr>
                                )
                            }
                          
                        })
                    
                    
                    :''}
                    
                </tbody>
                </table>
                <Link to ={'ticket/new'}>New ticket</Link><br/>

                <progress id="file" className='progress-bar progress-bar-striped progress-bar-animated'value={completed.length} max={this.props.tickets.length}/> 
                <Chart
                    chartType="PieChart"
                    data={[["Age", "Weight"], ["Low", low], ["medium", medium],["high",high]]}
                    options={pieOptions}
                    graph_id="PieChart"
                    width={"100%"}
                    height={"400px"}
                    legend_toggle
        />
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data}
        />
              
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return {
        tickets:state.tickets,
        employees:state.employee,
        department:state.department,
        customer:state.customers
    }
}
export default connect(mapStateToProps)(TicketHome)