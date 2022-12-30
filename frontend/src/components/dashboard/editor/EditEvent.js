import  React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default class EditEvent extends  Component{

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            oid:'',
            ename: "",
            edue: "",
            edes: "",
            link: ""
        }
    }

    componentDidMount() {
        
        let link =window.location.href;
        const id = link.slice(link.lastIndexOf('/')+1);
        console.log('id',id);

        axios.get('http://localhost:5000/api/event/edit/'+id)
            .then(res => {
                this.setState({
                    oid: res.data.oid,
                    ename: res.data.ename,
                    edue: res.data.edue,
                    edes: res.data.edes,
                    link: res.data.link

                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };


    onSubmit(e){
        e.preventDefault();
        let Email = this.state.email;
        const obj ={
            oid: this.state.oid,
            ename: this.state.ename,
            edue: this.state.edue,
            edes: this.state.edes,
            link: this.state.link,
            date: Date.now,
            status: "Pending"
        };

        //console.log('Update id '+this.props.match.params.id)
        let link =window.location.href;
        const id = link.slice(link.lastIndexOf('/')+1);
        axios.post('http://localhost:5000/api/event/update/'+id)
            .then(res => console.log(res.data))
            .catch(error => console.log(error));
        this.props.history.push('/editor/dashboard');
    }

    render() {
        return(
            <Router>
                <div className="container" style={{marginTop:10}}>
                    <h3 className="text-center">Edit Event</h3>
                    <form onSubmit={this.onSubmit} className="form-control-plaintext">
                       
                        <div className="form-group">
                            <label> Event Name :</label>
                            <input type ="text" className="form-control" name="ename" id="ename" value={this.state.ename} onChange = {this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label>Event Due :</label>
                            <input type ="text" className="form-control"  name="edue" id="edue"  value={this.state.edue} onChange = {this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label>Link (Optional) :</label>
                            <input type ="text" className="form-control" name="link" id="link"  value={this.state.link} onChange = {this.onChange}/>
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