import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class ConferenceTableRow extends Component {
    constructor(props) {
        super(props);
        this.approve = this.approve.bind(this);
        this.reject = this.reject.bind(this);
    }
    approve(){
        axios.post('http://localhost:5000/admin/approve/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))

        window.location.reload(false);
    }
    reject(){
        axios.post('http://localhost:5000/admin/reject/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))

        window.location.reload(false);
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.ename}
                </td>
                <td>
                    {this.props.obj.edue}
                </td>
                <td>
                    {this.props.obj.edes}
                </td>
                <td>
                    {this.props.obj.date}
                </td>
                <td>
                    {this.props.obj.link}
                </td>
                <td>
                    {this.props.obj.status}
                </td>
                <td>
                    <td><button onClick={this.approve} className="btn btn-primary">Approve</button></td>
                </td>
                <td>
                    <td><button onClick={this.reject} className="btn btn-danger">Reject</button></td>
                </td>
            </tr>
        );
    }
}
export default ConferenceTableRow;