import React from 'react'
import './ProjectCard.css'

export const ProjectCard = ({project}) => {
  return (
    <div className='project-card-container'>
        <div className='project-card-image'>
            <img alt='project' src={project.imageUrl}></img>
        </div>
        <div className='project-card-content'>
            <h3 className='project-card-title'>
                {project.title}
            </h3>
            <div className='project-card-tags-container'>
                {project.tags.map((tag) =>(
                    <div className='project-card-tag'>
                        {tag}
                    </div>
                ))}
            </div>
            <p className='project-card-description'>
                {project.description}
            </p>
            <div className='project-card-button-container'>
                <button className='project-card-demo-button'>
                    Live Demo
                </button>
                <button className='project-card-code-button'>
                    Codigo
                </button>
            </div>
        </div>
    </div>
  )
}
