import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import '../css/adults.css';

const NavBarContainer = styled.div`
position: sticky;
top: 71px;
z-index: 1;
@media (max-width: 768px) {
    top: 62px;
  }
.navbar {
    display:flex;
    flex-direction:column;
}
.mobile-navbar {
    @media (max-width: 768px) {
        display: grid; 
        grid-template-columns: 1fr 70px;
      }
}
.navbar2 {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
   grid-gap: 0px;
   background: #562a99a8;
   color:white;
   padding: 8px 0;
   border-bottom: 2px solid #ec8313ec;
   border-radius:10px;
}
a {
   color:white;
}

`;

export const AdultsRouters = () => (

    <NavBarContainer>
         <div className="navbar2">
        <Link to='/adultsHome'>Adultos</Link>
        <Link to='/adultTips'>Consejos</Link>
        <Link to='/adultTrivia'>Trivias</Link>
        <Link to='/adultNews'>Noticias</Link>
        <Link to='/materialDownload'>Descarga</Link>
    </div>
   </NavBarContainer>
);



