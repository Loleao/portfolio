import React from 'react'
import './Hero.css'
import Button from '../../components/button/Button'

export const Hero = () => {
  return (
    <section className='hero-section'>
        <div className='hero-content-container'>
            <h1>Ingeniero de Software</h1>
            <h2>Fullstack Junior</h2>
            <p>Desarrollador apasionado por crear soluciones web modernas y escalables.</p>
            <div className='hero-button-container'>
                <Button type='primary'>Ver proyectos</Button>
                <Button type='secondary'>Contactar</Button>
            </div>
        </div>
    </section>
  )
}
