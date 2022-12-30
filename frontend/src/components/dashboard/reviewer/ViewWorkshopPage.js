import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './WorkshopTableRow';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";



class ViewWorkshopPage extends Component{


    constructor(props) {
        super(props);
        this.state = {work : []};
    }

    componentDidMount() {

        axios.get('http://localhost:5000/reviewer/Workshop')
            .then(response => {
                this.setState({work : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
        return this.state.work.map(function (object, i){
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
                                <Link to="/reviewer/dashboard" >Reviewer Home</Link>
                                <Link to="/WorkshopView" >Add Employee</Link>
                                <Link to="/ResearchView">View Employee</Link>
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
                            <th>Name</th>
                            <th>Tittle</th>
                            <th>email</th>
                            <th>Phone</th>
                            <th>File Path</th>
                            <th>File Name</th>
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

export default ViewWorkshopPage;
