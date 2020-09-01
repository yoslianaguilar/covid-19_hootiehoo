import React from 'react';

export const Videos = () => {
    return (
        <div className ='videos'>
            <h4>Conoce y sigue las aventuras de Puma Espuma y el Escuadrón Prevención </h4>

            <div className ='videos-cont'>
            <p>Una gran aventura en un mundo muy pequeño</p>
             {/* eslint-disable-next-line  */}
            <iframe width="300" height="215" src="https://www.youtube.com/embed/tuILs6Zedco" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
            <p>La corona es nuestra</p>
                     {/* eslint-disable-next-line  */}
            <iframe width="300" height="215" src="https://www.youtube.com/embed/G2BHb6kWnRc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <p>¿Te gusto la canción Puma Espuma y sus amigos? Te invitamos a aprenderla y cantarla junto a nosotros y todos tus amigos</p>
             {/* eslint-disable-next-line  */}
            <iframe width="300" height="215" src="https://www.youtube.com/embed/9skA9MFlcs4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
            <p>¡¡Mira como muchos niños y niñas cantan con Puma Espuma!!</p>
          {/* eslint-disable-next-line  */}
            <iframe width="300" height="2" src="https://www.youtube.com/embed/zcG4TeFRSBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
        </div>



    )}