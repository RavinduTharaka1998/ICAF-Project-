import React, {Component} from 'react';
import axios from "axios";


class TableRow extends Component {
    constructor(props) {
        super(props);
        this.payment = this.payment.bind(this);
    }

    payment(){

        window.open('https://docs.google.com/forms/d/e/1FAIpQLSdaP10i5tm0aSXLcOKWjtCZ1NPXtfzHaAWs3QWufKWiUtxlXg/viewform');
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.review_state}
                </td>
                <td>
                    <td><button onClick={this.payment} className="btn btn-danger">Go to Payment</button></td>

                </td>
            </tr>
        );
    }
}

export default TableRow;