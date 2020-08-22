import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { kidsQuiz } from "../views/kidsQuiz";
import { kidsGame } from "../views/kidsGame";
import { kidsVideos } from "../views/kidsVideos";



export const KidsRouters = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/quiz">Trivias</Link>
          <Link to="/games">Juegos</Link>
          <Link to="/videos">Videos</Link>
        </nav>
        <Switch>
          <Route path='/quiz' component= {kidsQuiz} />
          <Route path='/games' component= {kidsGame} />
          <Route path="/videos" component= {kidsVideos} />
          
        </Switch>
      </div>
    </Router>
  );
}