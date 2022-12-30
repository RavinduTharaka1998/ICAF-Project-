import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEvent } from "../../../actions/authActions";
import classnames from "classnames";

class insertEvent extends Component {
  constructor() {
    super();
    this.state = {
      ename: "",
      edue: "",
      edes: "",
      link: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    //if (this.props.auth.isAuthenticated) {
      //this.props.history.push("/dashboard");
   // }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newEvent = {
      ename: this.state.ename,
      edue: this.state.edue,
      edes: this.state.edes,
      link: this.state.link
    };

    this.props.addEvent(newEvent, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/editor/dashboard" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              Editor Dashboard
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Insert Event</b> 
              </h4>
             
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.ename}
                  error={errors.ename}
                  id="ename"
                  type="text"
                  className={classnames("", {
                    invalid: errors.ename
                  })}
                />
                <label htmlFor="ename">Event Name</label>
                <span className="red-text">{errors.ename}</span>
              </div>


              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.edue}
                  error={errors.edue}
                  id="edue"
                  type="text"
                  className={classnames("", {
                    invalid: errors.edue
                  })}
                />
                <label htmlFor="edue">Event Due</label>
                <span className="red-text">{errors.edue}</span>
              </div>


              <div className="input-field col s12">
                <textarea
                onChange={this.onChange}
                value={this.state.edes}
                error={errors.edes}
                id="edes"
                type="text"
                className={classnames("", {
                    invalid: errors.edes
                })}>
                </textarea>
                
                <label htmlFor="edes">Event Description </label>
                <span className="red-text">{errors.edes}</span>
              </div>


              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.link}
                  error={errors.link}
                  id="link"
                  type="text"
                  className={classnames("", {
                    invalid: errors.link
                  })}
                />
                <label htmlFor="link">Link (Optional)</label>
                <span className="red-text">{errors.link}</span>
              </div>


              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
               
               Insert Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

insertEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEvent }
)(withRouter(insertEvent));