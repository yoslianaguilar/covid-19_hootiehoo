import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AboutPage } from "../views/abouts";
import {ContactsPage} from '../views/contacts'
import { HomePage} from '../views/home'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
       
              <Link to="/">Inicio</Link>
          
              <Link to="/about">Nosotros</Link>
            
              <Link to="/contacts">Contacto</Link>
           
        </nav>

        
       <Switch>

          <Route path='/about' component= {AboutPage} />
          <Route path='/contacts' component= {ContactsPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/" component={HomePage} />
               
        </Switch>
      </div>
    </Router>
  );
}