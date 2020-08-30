import React from 'react';
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

export const AdultSideBar = () => (
    <Styles>
        <Navbar fluid className={styles.sidebar} inverse >
            
           <Navbar.Brand href='/'> 
               
           </Navbar.Brand>

        <Navbar.Toggle aría-controls='basic-navbar-nav' />

         <Navbar.Collapse id='Basic-navbar-nav'>

            <Nav className='ml-auto'>
                <Nav.Item><Nav.Link href='/'>Noticias</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/About'>Tips</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/Contact'>Material descargable</Nav.Link></Nav.Item><Nav.Item>
                    </Nav.Item>
            </Nav>
         </Navbar.Collapse>

        </Navbar>
    </Styles>
);