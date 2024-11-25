import React from 'react';
import Navbar from './Navbar'; // Importing a Navbar component
import Image from 'next/image'; // Importing Next.js Image component
import '../styles/hero.css'; // Importing the CSS styles

const Hero = () => {
  return (
      <div>
        <Navbar /> {/* Navbar component */}
        <div className='hero-container'>
          <div className='hero-text'>
            <div>
              <p className='text-animation'>Hi,</p>
              <p className='text-animation'>
                I'm <span className='highlight-text'>Mehak</span>
              </p>
            </div>
          </div>
          
          <div id="hero" className='hero-image-container'>
            <div className='image-wrapper'>
              <Image
                src="/purple4k.jpeg" // Path to the image
                alt="Animated Girl" // Alt text for the image
                className="object-cover" // Ensures image covers the container area
                width={256} // Image width
                height={256} // Image height
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Hero; // Exporting the Hero component
