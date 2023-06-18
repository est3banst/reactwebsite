import React from 'react';
import './hero.css'
import { SlCursor } from 'react-icons/sl'

export default function Hero (){
    return(
    <div className='Hero'>
        <span className='Hero-section'>
            <h3>Tenemos el diseño perfecto para tu espacio</h3>
            <div className='Hero-link'>
            <h3>Ponete en contacto con un asesor<a href="https://wa.me/+59898775976?text=Estoy%20interesado%20en%20un%20presupuesto%20para%20renovar%20mi%20cocina"><i><SlCursor/></i></a></h3>
            </div>
        </span>
        
    </div>
    )
}