import React, { Component } from "react";
import { Link } from "react-router-dom";
import './css/landing.css'; 


class Landing extends Component {
  render() {
    return (
    <div className="bg">
      <div className="container fixed valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4 className="MainTitle">
              <br></br>
             WELCOME TO ICAF 2021
            </h4>
            <br></br>

            <h4 className="SubTitle"> International Conference on Application Frameworks.</h4>


            <p className="flow-text white-text text-darken-0">
            <p>SLIIT Technology Research Conference</p> 
            <p> SLIIT is organizing an academic conference where researchers are warmly welcom to present their latest 
findings and implementations of different programming languages including Java, JavaScript, 
Python and many more.</p>
              <p>Physical Conference</p> 
              <p>July 25 - July 28 2021</p>
              <p>At SLIIT main auditorium</p>
            </p>

            
            <br />
            <hr></hr>
            <br></br>
            <br></br>
            <div className="col s12 ">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
       
            

         
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
 
      </div>


      </div>
    );
  }
}

export default Landing;
