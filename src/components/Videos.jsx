import React from 'react';

export const Videos = () => {
    return (

        <div className ='videos'>

            <div className='title'>
            <h3>Videos</h3>
            </div>

            <div className='subtitle'>
            <h5>Conoce y sigue las aventuras de Puma Espuma y el Escuadrón Prevención </h5>
            </div>
           
            <div className ='videos-cont'>

            <div className ='video'>
            <h5>Una gran aventura en un mundo muy pequeño</h5>
             {/* eslint-disable-next-line  */}
            <iframe width="240" height="215" src="https://www.youtube.com/embed/tuILs6Zedco" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className ='video'>
            <h5>La corona es nuestra</h5>
                     {/* eslint-disable-next-line  */}
            <iframe width="240" height="215" src="https://www.youtube.com/embed/G2BHb6kWnRc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className ='video'>
            <h5>¿Te gusto la canción Puma Espuma y sus amigo/as? Te invitamos a aprenderla y cantarla junto a nosotros y todos tus amigos</h5>
             {/* eslint-disable-next-line  */}
            <iframe width="240" height="215" src="https://www.youtube.com/embed/9skA9MFlcs4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className ='video'>
            <h5>¡¡Mira como muchos niños y niñas cantan con Puma Espuma!!</h5>
          {/* eslint-disable-next-line  */}
            <iframe width="240" height="215" src="https://www.youtube.com/embed/zcG4TeFRSBA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        </div>
    )}