import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


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
.navbar-brand, .navbar-nav .nav-link {
color: white;

&:hover {
    color: #ec8313ec;
  }
 }
 .navbar2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    grid-gap: 10px;
    background: #562a99a8;
    color:white;
    padding: 5px 0;
    border-bottom: 2px solid #ec8313ec;
    border-radius:10px;
}
a {
    color:white;
}

`;

export const KidsRouters = () => (

    <NavBarContainer>
         <div className="navbar2">
        <Link to="/kidsHome">Niños</Link>
        <Link to="/quiz">Trivias</Link>
        <Link to="/games">Juegos</Link>
        <Link to="/Videos">Videos</Link>
    </div>
   </NavBarContainer>
);



