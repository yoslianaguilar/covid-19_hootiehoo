import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AboutPage } from "../views/about";
import { ContactPage } from '../views/contact'
import { HomePage} from '../views/home'

import { NavBar } from '../components/NavBar';

import { Layout } from '../components/Layout';

import { PsicologicosTips } from '../views/adultTips';
import { AdultNews } from "../views/adultNews";
import { AdultMaterialDownload } from "../views/materialDownload";
import { AdultsQuiz } from '../views/adultTrivia';

import { kidsQuiz } from "../views/kidsQuiz";
import { kidsGame } from "../views/kidsGame";
import { kidsVideos } from "../views/kidsVideos";
import { AdultsHome } from '../views/adultsHome';
import { KidsHome } from '../views/kidsHome';


export const AppRouter = () => {
  return (
    <React.Fragment>
        <NavBar />
      
    <Layout>
    <Router>

        <Switch>
          <Route path='/about' component= {AboutPage} />
          <Route path='/contact' component= {ContactPage} />
          <Route exact path="/" component={HomePage} />
          
          <Route path='/adultsHome' component= {AdultsHome}/>
          <Route path='/kidsHome' component= {KidsHome} />

          <Route path='/adultsHome' component= {AdultsHome} />
          <Route  path='/adultTips' component= {PsicologicosTips} />
          <Route  path='/adultNews' component= {AdultNews} />
          <Route  path="/materialDownload" component= {AdultMaterialDownload} />
          <Route  path="/adultTrivia" component= {AdultsQuiz}  />

          <Route path='/KidsHome' component= {KidsHome} />
           <Route path='/quiz' component= {kidsQuiz} />
          <Route path='/games' component= {kidsGame} />
          <Route path="/videos" component= {kidsVideos} />
         
        </Switch>

    </Router>
    </Layout>
    </React.Fragment>
  );
}