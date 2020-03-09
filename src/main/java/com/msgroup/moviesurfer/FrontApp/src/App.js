import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignPage from "./model/SignPage";
import { Home } from "./model/Home";
import { GalleryPage } from "./model/GalleryPage";
import { About } from "./model/About";
import { Footer } from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";
import AdminLogin from "./model/AdminLogin";
import AddMovie from "./model/AddMovie";
import NotFound from "./model/NotFound";

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign" component={SignPage} />
          <Route path="/reservation" component={GalleryPage} />
          <Route path="/about" component={About} />
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin/addMovie" component={AddMovie} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
