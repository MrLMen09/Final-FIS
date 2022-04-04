import React from 'react';
import './Footer.css';

function Footer () {
    
    return(
        <div className='contenedorFooter'>
            <div className='grupo'>
                <img src="../media/code.png" alt="" className='imgFooter'/>
                <h2>Grupo 4</h2>
            </div>
            
            <div className='vertical'>
                
            </div>

            <div className='integrantes'>
                <div className='c1'>
                    <h2>Andres Morera</h2>
                    <h2>Camilo Mendez</h2>
                    <h2>David Sanabria</h2>
                </div>
                <div className='c2'>
                    <h2>Jonathan Castellanos </h2>
                    <h2>Ginneidy Leon</h2>
                    <h2>Luis Mendoza</h2>
                </div>
                
            </div>

        </div>
    );
}

export default Footer;