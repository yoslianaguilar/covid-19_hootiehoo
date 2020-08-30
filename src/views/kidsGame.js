import React from 'react';
import { GameJump } from '../components/GameJump.jsx'
import { Puzzle } from '../components/Puzzle.jsx'
import { KidsSideBar } from '../components/KidsSideBar';

export const kidsGame = () =>{
  return(
    <div>
          <KidsSideBar />
    Pagina de Juegos para los Niños  
    <GameJump/> 
    <Puzzle/>      
    </div>
  )
}