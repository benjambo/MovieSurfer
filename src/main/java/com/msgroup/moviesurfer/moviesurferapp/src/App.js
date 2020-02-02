import React from "react";
import "./App.css";
import { SignPage } from "./model/SignPage";
import { Footer } from "./components/Footer";
import { NavigationBar } from "./components/NavigationBar";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <SignPage />
      <Footer />
    </div>
  );
};

export default App;
