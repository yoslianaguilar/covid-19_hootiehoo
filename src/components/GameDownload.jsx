import React from 'react';
import memorice from '../Img/memorice.png'
import crucigrama from '../Img/crucigrama.png'
import sopa from '../Img/sopa.png'

export const GameDownload = () => {
    return (
        <div className='download'>
            <h5>Maravilloso eres muy bueno con los juegos, por eso te regalamos los siguientes juegos para que los descargues y los imprimas</h5>
    
       <div className='downgame'>
    <h5>Descarga el siguiente Memorice, imprímelo, córtalo y diviértete con tu familia </h5>
    <a href="https://drive.google.com/file/d/1NCr278-q-4Z8HZSy9H-CMinVBTVS6wWB/view?usp=sharing" download="Memorice_Escuadron_Prenvencion"><img class="projectImg" src={memorice} width='250px' alt="project memorice"></img></a>
    </div>
    
    <div className='downgame'>
    <h5>Descarga el siguiente Crucigrama, imprimelo y resuelvelo junto a tu familia</h5>
    <a href="https://drive.google.com/file/d/1NXwaEQYIrNRfmTHpDh-gZdcEqlxAc1Ps/view?usp=sharing" download="Crucigrama_Escuadron_Prenvencion"><img class="projectImg" src={crucigrama} width='250px' alt="project crucigrama"></img></a>
    </div>

    <div className='downgame'>
    <h5>Descarga la siguiente Sopa de letras, imprimela y descubre las palabras junto a tu familia</h5>
    <a href="https://drive.google.com/file/d/1t46Uz2xsYwt4z9RgI7PlWkdpW6qeKY_t/view?usp=sharing" download="SopaDeLetras_Escuadron_Prenvencion"><img class="projectImg" src={sopa} width='250px' alt="project sopa"></img></a>
    </div>
    
    </div>
    )
}