import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './ResearchTableRow';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";



class ViewApproveResearch extends Component{


    constructor(props) {
        super(props);
        this.state = {research : []};
    }

    componentDidMount() {

        axios.get('http://localhost:5000/research')
            .then(response => {
                this.setState({research : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
        return this.state.research.map(function (object, i){
            return <TableRow obj = {object} key = {i}/>;
        });
    }
    render() {
        return(
            <div>
                <hr/>
                <table className="table table-striped" style = {{marginTop :20}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tittle</th>
                        <th>Status</th>
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

export default ViewApproveResearch;
