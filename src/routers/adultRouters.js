import React from "react";
import { Link } from "react-router-dom";


export const AdultRouters = () => {
  return (
  
      <div className='buttons-cont' >
        <nav>
          <Link to="/adultTips"><button>Consejos</button></Link>
          <Link to="/adultNews"><button>Noticias</button></Link>
          <Link to="/materialDownload"><button>Material Descargable</button></Link>
        </nav>
       
      </div>
  
  );
}