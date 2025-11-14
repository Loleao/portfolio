import React, { useState } from 'react'
import './Projects.css'
import { projectFilters, projectsData } from '../../data/projects/ProjectsData'
import { ProjectCard } from '../../components/projectCard/ProjectCard'

export const Projects = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const limit = 6
    const [activeFilter, setActiveFilter] = useState('Todos')
    const filteredProjects = projectsData.filter(project =>
        activeFilter === 'Todos' || project.tags.includes(activeFilter)
    )
    const projectList = isExpanded ? filteredProjects : filteredProjects.slice(0,limit)
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    }
    const showToggleButton = filteredProjects.length > limit
  return (
    <section className='projects-section'>
        <div className='projects-title-container'>
            <h2>
                Proyectos destacados
            </h2>
            <div className='projects-title-bar'></div>
            <h3>
                Explora mi trabajo y descubre cómo aplico las mejores prácticas de desarrollo
            </h3>
        </div>
        <div className='projects-filter-container'>
            {projectFilters.map((tag) => (
                <button className={`projects-filter-button ${activeFilter === tag ? 'active' : ''}`}
                key={tag}
                onClick={() => {
                        setActiveFilter(tag)
                        setIsExpanded(false)
                    }}>
                    {tag}
                </button>
            ))}
        </div>
        <div className='projects-cards-container'>
            {projectList.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>

        {showToggleButton &&(
            <div className='projects-button-container'>
                <button className='projects-show-more-button' onClick={ toggleExpansion }>
                    {isExpanded ? 'Ver menos' : 'Ver mas'}
                </button>
            </div>
        )}
    </section>
  )
}
