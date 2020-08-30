// import React from "react";
// import { Link } from "react-router-dom";

// export const KidsRouters = () => {
//   return (
   
//       <div className='buttons-cont' >
//       <nav>
//         <Link to="/quiz"><button>Trivias</button></Link>
//         <Link to="/games"><button>Juegos</button></Link>
//         <Link to="/videos"><button>Videos</button></Link>
//       </nav>
     
//     </div>
    
//   );
// }


import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.navbar {
   background-color: #72BAEC; 
}

.navbar-brand, .navbar-nav .nav-link {
color: white;
0
&:hover {
    color: black;
  }

 }
`;


export const KidsRouters = () => (
<Styles>
        <Navbar expand='lg'>
            
           <Navbar.Brand href='/'> 
        
           </Navbar.Brand>
        <Navbar.Toggle aría-controls='basic-navbar-nav' />
         <Navbar.Collapse id='Basic-navbar-nav'>

            <Nav className='ml-auto'>
            <Nav.Item><Nav.Link href='/quiz'>Trivias</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href='/games'>Juegos</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href='/videos'>Videos</Nav.Link></Nav.Item>
      
          </Nav>
         </Navbar.Collapse>

        </Navbar>
    </Styles>
);