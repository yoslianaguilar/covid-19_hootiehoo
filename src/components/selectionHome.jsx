import React from 'react';
import {
  BrowserRouter as Router, Link, Switch, Route
} from "react-router-dom";
import { AdultHome } from '../views/adultHome';
import { KidsHome } from '../views/kidsHome';

export const SelectionHome = () =>{
  return(
    <div className ='inicio'>
      <h3>¡Ganémosle al virus!</h3> 
    <p className='text'>Bienvenido! Aquí encontrarás información relevante sobre el Covid-19, actividades para niños, consejos,
    material descargable, videos y mucho más.</p>  

    <div className='buttons-cont'>
      <Router>
        <Link to='/adultHome'><button>Adulto</button></Link>
        <Link to='/kidsHome'><button>Niño</button></Link>
        <Switch>
          <Route exact path='/adultHome' component= {AdultHome}/>
          <Route exact path='/kidsHome' component= {KidsHome} />
        </Switch>
      </Router>
      </div>
    </div>
  )
}