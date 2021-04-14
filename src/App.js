import React from "react";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ColorContextProvider } from "./global/ColorContext";
import Main from "./pages/Main";
import { MainContentContextProvider } from "./global/MainContentContext";
const App = () => {
  return (
    <div>
      <ColorContextProvider>
        <MainContentContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Main} />
            </Switch>
          </Router>
        </MainContentContextProvider>
      </ColorContextProvider>
    </div>
  );
};

export default App;
