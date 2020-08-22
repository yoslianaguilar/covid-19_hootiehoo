import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AboutPage } from "../views/abouts";
import {ContactsPage} from '../views/contacts'
import { HomePage} from '../views/home'

import { NavBar } from '../components/NavBar';
import { Layout } from '../components/Layout';
// import { Jumbotron } from '../components/Jumbotron';
  

export const AppRouter = () => {
  return (
    <React.Fragment>
        <NavBar />
     {/* <Jumbotron /> */}
    <Layout>
    <Router>
{/*     
        // <nav>
        //   <Link to="/home">Inicio</Link>
        //   <Link to="/about">Nosotros</Link>
        //   <Link to="/contacts">Contacto</Link>
        // </nav>
         */}
        <Switch>
          <Route path='/about' component= {AboutPage} />
          <Route path='/contacts' component= {ContactsPage} />
          {/* <Route path="/home" component={HomePage} /> */}
          <Route exact path="/" component={HomePage} />
        </Switch>

    </Router>
    </Layout>
    </React.Fragment>
  );
}