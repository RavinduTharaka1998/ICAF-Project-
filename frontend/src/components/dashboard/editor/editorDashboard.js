import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import './editor.css';


import ViewEventsPage from "./ViewEventsPage";


class Dashboard extends Component {
  oninsertEventClicked = e => {
    e.preventDefault();
    //this.props.logoutUser();
    this.props.history.push('/editor/add/event');
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "30vh" }} className="valign-wrapper">
        <div className="row">
          <h5>Welcome! {user.name} (Editor)</h5>
          <hr></hr>
          <div className="landing-copy col s12 center-align">

            
           <div className="left">
            <button
              style={{
                width: "200px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.oninsertEventClicked}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3 "
            >
              Insert Event
            </button>
            </div>



          </div>

          <ViewEventsPage/>
          
        </div>

      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
