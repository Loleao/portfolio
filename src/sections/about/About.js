import React from 'react'
import './About.css'
import profilePhoto from '../../assets/about/pfp.jpg'

export const About = () => {
  return (
    <section className='about-section'>
        <div>
            <h2 className='about-title-container'>
                Acerca de Mi
            </h2>
            <div className='about-title-line'></div>
        </div>
        <div className='about-content-container'>
            <div className='about-description'>
                <p className='about-paragraph'>
                    Soy un desarrollador Full Stack Junior con una sólida formación en ingeniería de software y una pasión por crear experiencias digitales excepcionales. Mi enfoque se centra en escribir código limpio, mantenible y escalable.
                </p>
                <p className='about-paragraph'>
                    <b>Soft Skills:</b> Trabajo colaborativo, comunicación efectiva, resolución de problemas complejos, adaptabilidad a nuevas tecnologías y metodologías ágiles. Capacidad para traducir requisitos técnicos en soluciones prácticas y orientadas al usuario.
                </p>
                <div className='about-soft-skills'>
                    <div className='about-skill-box'>
                        <p>
                            Clean Code
                        </p>
                    </div>
                    <div className='about-skill-box'>
                        <p>
                            Team Player
                        </p>
                    </div>
                    <div className='about-skill-box'>
                        <p>
                            Problem Solver
                        </p>
                    </div>
                </div>
            </div>
            <div className='about-profile-image-container'>
                <img className='about-profile-image' alt='Profile' src={profilePhoto}></img>
            </div>
        </div>
    </section>    
  )
}
