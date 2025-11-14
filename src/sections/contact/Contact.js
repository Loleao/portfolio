import React, { useState } from 'react'
import './Contact.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Contact = () => {
    const [formData, setFormData] = useState({name:'',email:'',message:''})
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.prevetDefault()
        alert(`Formulario enviado. Revisar consola para datos: ${JSON.stringify(formData)}`);
        console.log('Datos del formulario:', formData);
    }
  return (
    <section className='contact-section'>
        <div className='contact-title-container'>
            <h2>Contacto</h2>
            <div className='contact-title-bar'></div>
            <p>¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!</p>
        </div>
        <div className='contact-content'>
            <div className='contact-info-container'>
                <div className='contact-info-item'>
                    <IoMdMail className='contact-icon'/>
                    <div className=' contact-info'>
                        <h2>Email</h2>
                        <p>desarrollador@ejemplo.com</p>
                    </div>
                </div>
                <div className='contact-info-item'>
                    <FaLinkedin className='contact-icon'/>
                    <div className=' contact-info'>
                        <h2>LinkedIn</h2>
                        <p>linkedin.com/in/desarrollador</p>
                    </div>
                </div>
                <div className='contact-info-item'>
                    <FaGithub className='contact-icon'/>
                    <div className=' contact-info'>
                        <h2>GitHub</h2>
                        <p>github.com/desarrollador</p>
                    </div>
                </div>
            </div>
            <div className='contact-form-container'>
                <form onSubmit={handleSubmit} className='contact-form'>
                    <label>
                        Nombre
                    </label>
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label>
                        Email
                    </label>
                    <input 
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>
                        Mensaje
                    </label>
                    <textarea 
                        name='message'
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    <button type='submit' className='contact-form-button'>
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}
