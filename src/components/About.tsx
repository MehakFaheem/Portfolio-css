import React from 'react'
import Image from 'next/image'
import '../styles/about.css';

const About = () => {
  return (
    <div id="abt-sec" className='about-section'>
      <div data-aos="zoom-in-up" className='about-image-container'>
        <Image
          src="/pink.jpeg" 
          alt="Animated Girl"
          className="about-image"
          width={450}
          height={450}
        />
      </div>
      <div id='About' className='about-content'>
        <h2 data-aos="zoom-in-up" className='about-title'>About Me</h2>
        <p data-aos="zoom-in-up" className='about-description'>
          I'm currently studying at GIAIC with a focus on Artificial Intelligence. My core skills span across web development and programming, including expertise in Tailwind CSS, HTML, TypeScript, C++, Python, JavaScript, Next.js, and React. Passionate about turning ideas into digital reality, I love crafting clean and efficient code that powers innovative solutions. Always eager to learn, I'm continually expanding my skill set to keep up with the fast-evolving tech world.
        </p>
      </div>
    </div>
  )
}

export default About