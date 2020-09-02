import React from 'react';
import { MaterialDownload } from '../components/MaterialDownload.jsx';
import {AdultsRouters} from '../routers/adultsRouters'
import '../css/adults.css';

export const AdultMaterialDownload = () =>{
  return(
    <div className='view-container download'>
      <AdultsRouters />
    <MaterialDownload />
    </div>
  )
}