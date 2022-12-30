import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import empedit from './EditEmployee'


class ViewEmployeePage extends Component{


    constructor(props) {
        super(props);
        this.state = {employee : []};
    }

    componentDidMount() {


        axios.get('http://localhost:5000/admin')
            .then(response => {
                this.setState({employee : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
        return this.state.employee.map(function (object, i){
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
                <h5 className="text-center"><center>Welcome Employee Page</center></h5>
                <hr/>
                    <table className="table table-striped" style = {{marginTop :20}}>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>eMail</th>
                            <th>Password</th>
                            <th>CPassword</th>
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

export default ViewEmployeePage;
