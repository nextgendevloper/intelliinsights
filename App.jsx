import React from "react";
import Home from "./Home";
import { Route, Switch} from "react-router";
import About from "./Pages/About";
import Contact from "./Pages/Contact"
import Service from "./Pages/Service"
import Error from "./Pages/Error"
import Career from "./Pages/Career";
import {HashRouter, HashRouter as Router, } from 'react-router-dom';




const App = () => {


  return(
   <>
   <HashRouter>
       <Switch>
        <Route exact path="/" refresh="true" component={Home}></Route>
        <Route path="/about" refresh="true" component={About}></Route>
        <Route path="/careers" refresh="true" component={Career}></Route>
        <Route path="/contact"  refresh="true" component={Contact}></Route>
        <Route path="/service" refresh="true" component={Service}></Route>
        <Route component={Error}></Route>
      </Switch>
      </HashRouter>
    </>
      
  );
};

export default App;