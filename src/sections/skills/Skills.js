import React, { useState } from 'react'
import './Skills.css'
import { skillsData } from '../../data/skills/SkillsData'

const SkillCard = ({ name, icon: IconComponent, color }) => {
    return (
    <div className='skill-card-container'>
        <span>
            <IconComponent size={50} color={color} />
        </span>
        <p>
            {name}
        </p>
    </div>
    )
}

export const Skills = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const limit = 6
    const skillList = isExpanded ? skillsData : skillsData.slice(0,limit)
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    }
    const showToggleButton = skillsData.length > limit

  return (
    <section className='skills-section'>
        <div>
            <h2 className='skills-title-container'>
                Habiliades tecnicas
            </h2>
            <div className='skills-title-line'></div>
        </div>

        <div className='skill-cards-container'>
            {skillList.map((skill) => (
                <SkillCard key={skill.key} name={skill.name} icon={skill.icon} color={skill.color}/>
            ))}
        </div>

        {showToggleButton &&(
            <div className='skills-button-container'>
                <button className='skills-button' onClick={ toggleExpansion }>
                    {isExpanded ? 'Ver menos' : 'Ver mas'}
                </button>
            </div>
        )}
    </section>
  )
}
