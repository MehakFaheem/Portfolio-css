import React from 'react';
import '../styles/headings.css';

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
  return (
    <div className='heading'>
        <p>{title}</p>
    </div>
  );
}

export default Heading;
