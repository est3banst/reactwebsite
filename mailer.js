import * as React from 'react';
import './form.css'

export const Mailer = () => {
    
    return (
        <div className='Container'>
            <form className="form-control">
                <p>Ya es hora de renovar tu placard, llegaste al lugar correcto!</p>
                <input type='text' id='name' placeholder='Nombre completo' required></input>
                <input type='email' id='email' placeholder='Correo' required></input>
                <textarea placeholder='Comunicate con nosotros' name='message' cols='30' rows='10' required></textarea>
                <button type='submit'>Enviar mensaje</button>
            </form>
        </div>
        
    )
}