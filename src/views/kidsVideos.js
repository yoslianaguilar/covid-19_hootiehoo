import React from 'react';
import { KidsRouters } from '../routers/kidsRouters';
import { Videos } from '../components/Videos.jsx';
import '../css/kids.css';

export const kidsVideos = () =>{
  return(
    <div className ='view-container videos'>
    <KidsRouters />
    <h3>Videos</h3>
    <Videos/> 
    </div>
  )
}