import React from 'react';
import gob from '../Img/gob.png'
import establecimientos from '../Img/establecimientos.png'
import saludresponde from '../Img/saludresponde.png'
import Personaje21 from '../Img/Personaje21.png'


export const AdultNewsInf = () => {
    return (
        <div>
        <div className='newsbox'>
        <img class="projectImg" src={Personaje21} width='120px' alt="project Personaje"></img> 
        </div>

        <div className='newsbox'>
        <h5>Infórmate aquí sobre la última cifra oficial entregados por el Ministerio de Salud</h5>
        <a href="https://www.gob.cl/coronavirus/cifrasoficiales/" ><img class="projectImg" src={gob} width='200px' alt="project gob"></img></a>      
        </div>

        <div className='newsbox'>
        <h5>Si deseas conocer la ubicación del establecimiento de salud más cercano a tu domicilio puedes buscarlo pinchando en la siguiente imagen </h5>
        <a href="https://saludresponde.minsal.cl/establecimientos-de-salud/" ><img class="projectImg" src={establecimientos} width='200px' alt="project establecimientos"></img></a>      
        </div>

        <div className='newsbox'>
        <h5>Tienes síntomas y no sabes que hacer, donde llamar, a donde ir o simplemente necesitas orientación ingresa Aquí </h5>
        <a href="https://saludresponde.minsal.cl/" ><img class="projectImg" src={saludresponde} width='200px' alt="project establecimientos"></img></a>      
        </div>
        
       </div>
    )
}