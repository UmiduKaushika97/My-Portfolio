// import React from 'react'
import Frontend from './Frontend';
import Coursework from './Coursework';
import './Skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills 🛠️</h2>
      <span className="section__subtitle">My Technical Skills</span>

      <div className="skills__container container grid">
        <Frontend />
        <Coursework />
      </div>
    </section>
  )
}

export default Skills