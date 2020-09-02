import React from 'react';
import { GameJump } from '../components/GameJump.jsx'
import { Puzzle } from '../components/Puzzle.jsx'
import { KidsRouters } from '../routers/kidsRouters';
import { GameDownload } from '../components/GameDownload.jsx'
import '../css/kids.css';

export const kidsGame = () =>{
  return(
    <div className ='view-container games'>
          <KidsRouters />
    <h3>Juegos</h3>
    <GameJump/> 
    <Puzzle/> 
    <GameDownload/>     
    </div>
  )
}