import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './ConferenceTableRow';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import empedit from './EditEmployee'


class ViewConferencePage extends Component{


    constructor(props) {
        super(props);
        this.state = {event : []};
    }

    componentDidMount() {

        axios.get('http://localhost:5000/admin/conference')
            .then(response => {
                this.setState({event : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
        return this.state.event.map(function (object, i){
            return <TableRow obj = {object} key = {i}/>;
        });
    }
    render() {
        return(
            <div>
                <div className="navbar-fixed">
                    <nav className="z-depth-0">
                        <div className="nav-wrapper white">

                            <div className="topnav" id="myTopnav">
                                <Link to="/admin/dashboard" >Admin Home</Link>
                                <Link to="/EmpAdd" >Add Employee</Link>
                                <Link to="/EmpView">View Employee</Link>
                                <Link to="/ConView">View Conference</Link>
                                <Link to="/CusView" >View Customer</Link>
                                <Link to="/PayView" >View Payments</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <h5 className="text-center"><center>Welcome Conference Page</center></h5>
                <hr/>
                    <table className="table table-striped" style = {{marginTop :20}}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Event Name</th>
                            <th>Event_Deu</th>
                            <th>Event_Des</th>
                            <th>Date</th>
                            <th>Link</th>
                            <th>Status</th>
                            <th colSpan="2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.tabRow()}
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default ViewConferencePage;
