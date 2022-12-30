import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";
import { push as RouterPush } from 'react-router-redux';


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        
        axios.get('http://localhost:5000/api/event/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        
    
    }
    render() {
        return (
            <tr>
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
                    {this.props.obj.link}
                </td>
                <td>
                    {this.props.obj.date}
                </td>
                <td>
                    {this.props.obj.status}
                </td>
              
                <td>
                    <Link to={"/editor/edit/event/"+this.props.obj._id} className="btn btn-primary">Edit</Link>

                </td>
                <td>
                    <td><button onClick={this.delete} className="btn btn-danger">Remove</button></td>

                </td>
            </tr>
        );
    }
}

export default TableRow;