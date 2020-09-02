import React from 'react';
import memorice from '../Img/memorice.png'
import crucigrama from '../Img/crucigrama.png'

export const GameDownload = () => {
    return (
        <div className='download'>
            <h4>Maravilloso eres muy bueno con los juegos, por eso te regalamos los siguientes juegos para que los descargues y los imprimas</h4>
    
       <div className='downbox'>
    <h5>Descarga el siguiente Memorice, imprímelo, córtalo y diviértete con tu familia </h5>
    <a href="https://drive.google.com/file/d/1NCr278-q-4Z8HZSy9H-CMinVBTVS6wWB/view?usp=sharing" download="HH_GanemosleAlVirus_PDF_M1_T2.pdf"><img class="projectImg" src={memorice} width='250px' alt="project memorice"></img></a>
    </div>
    
    <div className='downbox'>
    <h5>Descarga el siguiente Crucigrama, imprimelo y resuelvelo junto a tu familia</h5>
    <a href="https://drive.google.com/file/d/1NXwaEQYIrNRfmTHpDh-gZdcEqlxAc1Ps/view?usp=sharing" download="HH_GanemosleAlVirus_PDF_M2_T1.pdf"><img class="projectImg" src={crucigrama} width='250px' alt="project crucigrama"></img></a>
    </div>
    
    </div>
    )
}