import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout2 = (props) => (
<Container>   
{props.children}
<Layout2/>







</Container> 
);