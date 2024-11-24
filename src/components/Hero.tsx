import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import '../styles/hero.css';

const Hero = () => {
  return (
      <div>
        <Navbar />
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
                src="/purple4k.jpeg"
                alt="Animated Girl"
                className="object-cover"
                width={256}
                height={256}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Hero;
