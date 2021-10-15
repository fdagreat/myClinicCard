import classes from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import PageNotFound from "./components/404/PageNotFound";
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
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
