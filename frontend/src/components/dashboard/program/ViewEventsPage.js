import React, { Component } from 'react';
import axios from 'axios';
import Program from './Program';//
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import './program.css';

class ProgramMain extends Component {

    constructor(props) {
        super(props);
        this.state = { eventRes: [] };
    }

    componentDidMount() {

        axios.get('http://localhost:5000/api/event/approved')
            .then(response => {
                
                this.setState({ eventRes: response.data });

            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        return this.state.eventRes.map(function (object, i) {
            return <Program obj={object} key={i} />;
        });
    }
    render() {
        return (

            <div className="fixed">
                <div className="row">
                    <div className="divcenter3">
                        <h4 className="PageTitles">PROGRAM SCHEDULE</h4>
                        <hr class="style2"></hr>
                    </div>
                </div>
                {this.tabRow()}

            </div>
        );
    }
}

export default ProgramMain;
