import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar {
   background-color: #562a99a8; 
   position:fixed;
}

.navbar-brand, .navbar-nav .nav-link {
color: white;
0
&:hover {
    color: black;
  }

 }
`;


export const AdultsRouters = () => (

<Styles>
        <Navbar expand='lg'>
       
           <Navbar.Brand href='/'> 
           </Navbar.Brand>
        <Navbar.Toggle aría-controls='basic-navbar-nav' />
      
         <Navbar.Collapse id='Basic-navbar-nav'>
      

         <Nav className='container-fluid h-100'>
            <Nav.Item><Nav.Link href='/adultTips'>Consejos</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href='/adultNews'>Noticias</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href='/materialDownload'>Material descargable</Nav.Link></Nav.Item>
   
          </Nav>
         </Navbar.Collapse>



        </Navbar>
       
    </Styles>
 
);