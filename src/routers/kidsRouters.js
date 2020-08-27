import React from "react";
import { Link } from "react-router-dom";

export const KidsRouters = () => {
  return (
   
      <div className='buttons-cont' >
      <nav>
        <Link to="/quiz"><button>Trivias</button></Link>
        <Link to="/games"><button>Juegos</button></Link>
        <Link to="/videos"><button>Videos</button></Link>
      </nav>
     
    </div>
    
  );
}


