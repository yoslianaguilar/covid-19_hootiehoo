import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.navbar {
   background-color: #562a99a8; 
}

.navbar-brand, .navbar-nav .nav-link {
color: white;
0
&:hover {
    color: black;
  }

 }
`;

export const SideBar = () => (
    <Styles>
        <Navbar expand='lg'>
            
           <Navbar.Brand href='/'> 
            
           </Navbar.Brand>

        <Navbar.Toggle aría-controls='basic-navbar-nav' />

         <Navbar.Collapse id='Basic-navbar-nav'>

            <Nav className='ml-auto'>
                <Nav.Item><Nav.Link href='/'>PRUEBA</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/About'>HOLA</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/Contact'>CHAO</Nav.Link></Nav.Item><Nav.Item>
                    </Nav.Item>
            </Nav>
         </Navbar.Collapse>

        </Navbar>
    </Styles>
);





// const Styles = styled.div`
// .navbar {
//    background-color: #562a99a8; 
// }

// .navbar-brand, .navbar-nav .nav-link {
// color: white;
// 0
// &:hover {
//     color: black;
//   }

//  }
// `;


// export const KidsRouters = () => (
// <Styles>
//         <Navbar expand='lg'>
            
//            <Navbar.Brand href='/'> 
        
//            </Navbar.Brand>
//         <Navbar.Toggle aría-controls='basic-navbar-nav' />
//          <Navbar.Collapse id='Basic-navbar-nav'>

//             <Nav className='container-fluid h-100'>
//             <Nav.Item><Nav.Link href='/quiz'>Trivias</Nav.Link></Nav.Item>
//             <Nav.Item><Nav.Link href='/games'>Juegos</Nav.Link></Nav.Item>
//             <Nav.Item><Nav.Link href='/videos'>Videos</Nav.Link></Nav.Item>
      
//           </Nav>
//          </Navbar.Collapse>

//         </Navbar>
//     </Styles>
// );