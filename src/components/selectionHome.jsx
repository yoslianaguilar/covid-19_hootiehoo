import React from 'react';
import { Link } from "react-router-dom";

export const SelectionHome = () =>{
  return(
    <div className='btn-container'>
        <Link to='/adultsHome'><button>Adulto/a</button></Link>
        <Link to='/kidsHome'><button>Niño/a</button></Link>
      </div>
  )
}