import React from "react";
import { Link } from "react-router-dom";


export const AdultRouters = () => {
  return (
  
      <div>
        <nav>
          <Link to="/adultTips">Consejos</Link>
          <Link to="/adultNews">Noticias</Link>
          <Link to="/materialDownload">Material Descargable</Link>
        </nav>
       
      </div>
  
  );
}