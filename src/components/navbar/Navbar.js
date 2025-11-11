import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <header className='header-section'>
        <div></div>
        <nav className='navbar-content'>
            <a href='#inicio'>Inicio</a>
            <a href='#acerca'>Acerca</a>
            <a href='#habilidades'>Habilidades</a>
            <a href='#proyectos'>Proyectos</a>
            <a href='#contacto'>Contacto</a>
        </nav>
        <button className='day-night-button'>
            &#9789;
        </button>
    </header>
  )
}
