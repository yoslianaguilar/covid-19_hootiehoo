import React from "react";
import { Link } from "react-router-dom";

export const KidsRouters = () => {
  return (
   
      <div>
        <nav>
          <Link to="/quiz">Trivias</Link>
          <Link to="/games">Juegos</Link>
          <Link to="/videos">Videos</Link>
        </nav>
        
      </div>
    
  );
}