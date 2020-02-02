import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { SignPage } from "./model/SignPage";
import { Home } from "./model/Home";
import { About } from "./model/About";
import { Footer } from "./components/Footer";
import { NavigationBar } from "./components/NavigationBar";

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign" component={SignPage} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
