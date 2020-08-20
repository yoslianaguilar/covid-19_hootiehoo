import React from 'react';
import {
  BrowserRouter as Router, Link, Switch, Route
} from "react-router-dom";
import { AdultHome } from '../views/adultHome';
import { KidsHome } from '../views/kidsHome';

export const SelectionHome = () =>{
  return(
    <div>
      <Router>
        <Link to='/adultHome'><button>Adulto</button></Link>
        <Link to='/kidsHome'><button>Niño</button></Link>
        <Switch>
          <Route path='/adultHome' component= {AdultHome}/>
          <Route path='/kidsHome' component= {KidsHome} />
        </Switch>
      </Router>
    </div>
  )
}