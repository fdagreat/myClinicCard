import classes from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import PageNotFound from "./components/404/PageNotFound";
import Dashboard from "./components/dashboard/Dashboard";
import ClinicReport from "./components/Reports/ClinicReport";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <div className={classes.App}>
        <Switch>
          <Route path="/" exact>
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/clinicreport">
            <ClinicReport />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
