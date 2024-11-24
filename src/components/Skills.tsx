import React from 'react';
import { Icon } from '@iconify/react';
import '../styles/skills.css';

const Skills = () => {
  return (
    <div data-aos="zoom-in-up" id='Skills' className='skills-container'>
      <div className='skills-inner'>
        <div>
          <h2 className='skills-heading'>Skills</h2>
        </div>
        <div className='skills-icons'>
          <Icon icon="logos:html-5" className="skill-icon" aria-label="HTML5" />
          <Icon icon="logos:css-3" className="skill-icon" aria-label="CSS3" />
          <Icon icon="logos:tailwindcss-icon" className="skill-icon" aria-label="TailwindCSS" />
          <Icon icon="logos:nextjs-icon" className="skill-icon" aria-label="Next.js" />
          <Icon icon="logos:react" className="skill-icon" aria-label="React" />
          <Icon icon="logos:typescript-icon" className="skill-icon" aria-label="TypeScript" />
          <Icon icon="logos:python" className="skill-icon" aria-label="Python" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
