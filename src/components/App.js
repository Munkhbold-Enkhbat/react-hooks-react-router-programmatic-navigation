import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";
import Detail from "./Detail";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });  

  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn} setFormData={setFormData}/>
      <Switch>
      <Route path="/detail">
          <Detail formData={formData}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login 
            formData={formData}  
            setFormData={setFormData}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route path="/">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;