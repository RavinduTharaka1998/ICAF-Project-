import  React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";


export default  class EditEmployee extends  Component{


    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCPassword = this.onChangeCPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email:'',
            password:'',
            cpassword:''
        }
    }

    componentDidMount() {
        alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:5000/admin/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    oid: res.data.oid,
                    name: res.data.name,
                    address: res.data.address,
                    nic: res.data.nic,
                    phone: res.data.phone,
                    employee_type: res.data.employee_type,
                    email: res.data.email,
                    password: res.data.password,
                    cpassword: res.data.cpassword
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }
    onChangeCPassword(e){
        this.setState({
            cpassword: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        let Email = this.state.email;
        const obj ={

            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            cpassword: this.state.cpassword,
        };

        console.log('Update id '+this.props.match.params.id)
        axios.post('http://localhost:5000/admin/update/'+this.props.match.params.id,obj)
            .then(res => console.log(res.data));
        alert("Update Successful");
        this.props.history.push('/EmpView');

        window.location.reload(false);
    }

    render() {
        return(
            <Router>
                <div className="container" style={{marginTop:10}}>
                    <h5 className="text-center">Edit Employee Bios</h5>
                    <form onSubmit={this.onSubmit} className="form-control-plaintext">
                        <div className="form-group">
                            <label>Name :</label>
                            <input type ="text" className="form-control"  value={this.state.name} onChange = {this.onChangeName}/>
                        </div>
                        <div className="form-group">
                            <label>email Address :</label>
                            <input type ="text" className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type ="text" className="form-control" value={this.state.password} onChange = {this.onChangePassword}/>
                        </div>
                        <div className="form-group">
                            <label>CPassword :</label>
                            <input type ="text" className="form-control" value={this.state.cpassword} onChange = {this.onChangeCPassword}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type = "submit" value = "Update Details" className="btn-primary"/>
                        </div>
                    </form>
                </div>
            </Router>
        )
    }
}