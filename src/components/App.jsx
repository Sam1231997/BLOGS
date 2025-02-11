import React from "react";

import Home from "./Home";
import Navbar from "./Navbar";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  return(
  <Router>
<div className="App">
  <Navbar/>
  <div className="content">

  <Switch>
    <Route exact path ="/">
    <Home/>
    </Route>
    <Route path ="/">
      <Create/>
    </Route>
  </Switch>
  </div>
</div>
</Router>  
  );
}



export default App;
