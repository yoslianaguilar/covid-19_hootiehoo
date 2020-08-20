import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { PsicologicosTips } from '../views/adultTips';
import { AdultNews } from "../views/adultNews";
import { AdultMaterialDownload } from "../views/materialDownload";


export const AdultRouters = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/adultTips">Consejos</Link>
          <Link to="/adultNews">Noticias</Link>
          <Link to="/materialDownload">Material Descargable</Link>
        </nav>
        <Switch>
          <Route path='/adultTips' component= {PsicologicosTips} />
          <Route path='/adultNews' component= {AdultNews} />
          <Route path="/materialDownload" component= {AdultMaterialDownload} />
        </Switch>
      </div>
    </Router>
  );
}