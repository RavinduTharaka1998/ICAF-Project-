import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";//home
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";

//Dashboards
//1 Admin
import AdminDashboard from "./components/dashboard/admin/adminDashboard";
import empadd from "./components/dashboard/admin/AddEmployeePage";
import empview from "./components/dashboard/admin/ViewEmployeePage";
import empedit from "./components/dashboard/admin/EditEmployee";
import conview from "./components/dashboard/admin/ViewConferencePage";
//2 editor
import editorDashboard from "./components/dashboard/editor/editorDashboard";
//3 reviewer
import reviewerDashboard from "./components/dashboard/reviewer/reviewerDashboard";
import workshop from "./components/dashboard/reviewer/ViewWorkshopPage"
import reserach from "./components/dashboard/reviewer/ViewResearchPage"
//4 attendee
import attendee from "./components/dashboard/attendee/Dashboard";
//5 Workshop presenter
import wp from "./components/dashboard/workshopPresenter/Dashboard";
//6 researcher
import researcher from "./components/dashboard/researcher/Dashboard";
//Downloads
import download from "./components/downloads/download";
//Keynotes
import keynotes from "./components/keynotes/keynotes";
//Add event - Editor
import insertEvent from "./components/dashboard/editor/InsertEvent";
//Edit event - Editor
import EditEvent from "./components/dashboard/editor/EditEvent";
//Program
import ProgramMain from './components/dashboard/program/ViewEventsPage';



// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />



            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/downloads" component={download} />
            <Route exact path="/keynotes" component={keynotes} />
            <Route exact path="/programs" component={ProgramMain} />

            
            <Switch>
              <PrivateRoute path="/admin/dashboard" component={AdminDashboard} />
              <PrivateRoute path="/editor/dashboard" component={editorDashboard} />
              <PrivateRoute path="/reviewer/dashboard" component={reviewerDashboard} />
              <PrivateRoute path="/workshop_presenter/dashboard" component={wp} />
              <PrivateRoute path="/researcher/dashboard" component={researcher} />
              <PrivateRoute path="/attendee/dashboard" component={attendee} />
              <PrivateRoute path="/editor/add/event" component={insertEvent} />
              <PrivateRoute path="/editor/edit/event" component={EditEvent} />

              <Route exact path="/admin/dashboard" />
              <Route exact path="/EmpAdd" component={empadd} />
              <Route exact path="/EmpView" component={empview} />
              <Route exact path="/EmpEdit/:id" component={empedit} />
              <Route exact path="/ConView" component={conview} />

              <Route exact path="/reviewer/dashboard" />
              <Route exact path="/WorkshopView" component={workshop} />
              <Route exact path="/ResearchView" component={reserach} />

            </Switch>
            
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
