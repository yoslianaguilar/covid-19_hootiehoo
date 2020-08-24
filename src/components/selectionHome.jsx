import React from 'react';
import { Link } from "react-router-dom";


export const SelectionHome = () =>{
  return(
    <div className='buttons-cont'>
      
        <Link to='/adultHome'><button>Adulto</button></Link>
        <Link to='/kidsHome'><button>Niño</button></Link>
       
      </div>
  )
}