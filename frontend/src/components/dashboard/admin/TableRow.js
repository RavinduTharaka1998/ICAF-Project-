import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){

        axios.get('http://localhost:5000/admin/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');

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
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.password}
                </td>
                <td>
                    {this.props.obj.cpassword}
                </td>
                <td>
                    <Link to={"/EmpEdit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>

                </td>
                <td>
                    <td><button onClick={this.delete} className="btn btn-danger">Remove</button></td>

                </td>
            </tr>
        );
    }
}

export default TableRow;