import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./Componete/Footer/Footer"
import Nav from "./Componete/Nav/Nav"
import Main from "./Componete/Main/Main"
import Youtube from './Componete/Youtube/Youtube'

//pages
import Iphone from "./Componete/Pages/Iphone/iphone";
import Mac from "./Componete/Pages/Mac/Mac";
 import Four04 from "./Componete/Pages/Four04/Four04";
import Productpage from "./Componete/Pages/Productpage/Productpage";

// import general css
import  "./Componete/Assets/css/styles.css"

function App() {
  return (
    <Router>
    <div className = "App" >

      
      <Nav />
      <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />
           <Route path="/" component={Four04} /> 
        </Switch>
      
      <Youtube />
       <Footer />
    </div>
    </Router>
  )
}

export default App
