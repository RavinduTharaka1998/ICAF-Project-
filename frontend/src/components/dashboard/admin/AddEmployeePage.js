import  React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";


export default  class Create extends  Component{


    constructor(props) {
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

    onChangeName(e){
        this.setState( {
            name: e.target.value
        });
    }
    onChangeEmail(e){

        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }
    onChangeCPassword(e){
        this.setState( {
            cpassword: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const obj = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            cpassword : this.state.cpassword
        };


                if(this.state.password === this.state.cpassword) {
                    axios.post('http://localhost:5000/admin/add', obj)
                        .then(res => {
                            alert("Registration Successfully")
                            console.log(res.data)
                            this.props.history.push('/EmpView');
                        });

                }
                else{
                    alert('Passwords are different...')
                }


        this.setState({
            name :'',
            email:'',
            password:'',
            cpassword:''

        })

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
            <div className='container'>
            <Router>
                <div className="container " style={{marginTop:10}}>
                    <h5 className="text-center">Employee Registration Form</h5>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name :</label>
                            <input type ="text" required = "Please enter name" className="form-control" value={this.state.name} onChange = {this.onChangeName}/>
                        </div>
                        <div className="form-group">
                            <label>eMail Address :</label>
                            <input type ="text" required = "Please enter address" className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type ="text" required = "Please enter address" className="form-control" value={this.state.password} onChange = {this.onChangePassword}/>
                        </div>
                        <div className="form-group">
                            <label>CPassword :</label>
                            <input type ="text" required = "Please enter address" className="form-control" value={this.state.cpassword} onChange = {this.onChangeCPassword}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type = "submit" value = "Register Employee" className="btn-primary"/>
                        </div>
                    </form>
                </div>
            </Router>
            </div>
            </div>
        )
    }
}


