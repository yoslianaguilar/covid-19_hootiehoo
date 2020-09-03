import React from 'react';
import { MaterialDownload } from '../components/MaterialDownload.jsx';
import {AdultsRouters} from '../routers/adultsRouters'
import '../css/adults.css';

export const AdultMaterialDownload = () =>{
  return(
    <div className='view-container download'>
      <AdultsRouters />
      <div className='title'>
          <h4>Material para descargar</h4> 
          </div>
    <MaterialDownload />
    </div>
  )
}