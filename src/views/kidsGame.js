import React from 'react';
import { GameJump } from '../components/GameJump.jsx'
import { Puzzle } from '../components/Puzzle.jsx'
import { KidsRouters } from '../routers/kidsRouters';

export const kidsGame = () =>{
  return(
    <div>
          <KidsRouters />
    Pagina de Juegos para los Niños  
    <GameJump/> 
    <Puzzle/>      
    </div>
  )
}