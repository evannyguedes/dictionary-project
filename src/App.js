import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
//Pages
import MainPage from "./MainPage";
import NotFound from "./NotFound";
import Dictionary from "./Dictionary";

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404" component={NotFound} />
          <Route exact path="/dictionary" component={Dictionary} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
};

export default App;
