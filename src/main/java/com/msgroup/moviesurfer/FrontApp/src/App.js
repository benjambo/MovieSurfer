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
import { Spring } from "react-spring/renderprops";

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={GalleryPage} />
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ duration: 800 }}
          >
            {props => (
              <div style={props}>
                <Route path="/sign" component={SignPage} />
                <Route path="/about" component={About} />
                <Route path="/admin/login" component={AdminLogin} />
                <Route path="/admin/addMovie" component={AddMovie} />
              </div>
            )}
          </Spring>
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
