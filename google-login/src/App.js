import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { gapi } from "gapi-script";

function App() {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "131581938677-8ddp4920lduil2ns50v22gpkb8g7o2ns.apps.googleusercontent.com",
      plugin_name: "krayo",
    });
  });

  return (
    <div className="App">
      <ToastContainer />
      <Router basename="/">
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/Dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;