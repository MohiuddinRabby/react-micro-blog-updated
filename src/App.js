import React from "react";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ColorContextProvider } from "./global/ColorContext";
import Main from "./pages/Main";
const App = () => {
  return (
    <div>
      <ColorContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Router>
      </ColorContextProvider>
    </div>
  );
};

export default App;
