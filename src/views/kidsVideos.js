import React from 'react';
import { KidsRouters } from '../routers/kidsRouters';
import '../css/kids.css';

export const kidsVideos = () =>{
  return(
    <div className ='videos'>
    <KidsRouters />
    <h3>Videos</h3>
    </div>
  )
}