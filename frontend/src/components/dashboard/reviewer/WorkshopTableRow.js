import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class WorkshopTableRow extends Component {
    constructor(props) {
        super(props);
        this.approve = this.approve.bind(this);
        this.reject = this.reject.bind(this);
    }
    approve(){
        axios.post('http://localhost:5000/reviewer/approvework/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))

        window.location.reload(false);
    }
    reject(){
        axios.post('http://localhost:5000/reviewer/rejectwork/'+this.props.obj._id)
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
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.contact_no}
                </td>
                <td>
                    {this.props.obj.filePath}
                </td>
                <td>
                    {this.props.obj.filename}
                </td>
                <td>
                    {this.props.obj.review_state}
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
export default WorkshopTableRow;