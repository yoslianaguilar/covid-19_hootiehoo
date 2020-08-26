import React from "react";
// import { Link } from "react-router-dom";
import {Nav} from 'react-bootstrap'

export const AdultRouters = () => {
  return (
  
<Nav defaultActiveKey="/adultHome" className="flex-column">
  <Nav.Link href="/adultTips">Consejos</Nav.Link>
  <Nav.Link eventKey="/adultNews">Noticias</Nav.Link>
  <Nav.Link eventKey="/materialDownload">Material Descargable</Nav.Link>
  
</Nav>



      /* <div className='buttons-cont' >
        <nav>
          <Link to="/adultTips"><button>Consejos</button></Link>
          <Link to="/adultNews"><button>Noticias</button></Link>
          <Link to="/materialDownload"><button>Material Descargable</button></Link>
        </nav>
       
      </div> */
  
  )
}