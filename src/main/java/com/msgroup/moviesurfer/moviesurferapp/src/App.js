import React from "react";
import "./App.css";
import { SignPage } from "./model/SignPage";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <SignPage />
      <Footer />
    </div>
  );
};

export default App;
