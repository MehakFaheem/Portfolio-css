import React from 'react';
import Image from 'next/image';
import '../styles/card.css';

interface propsType {
    img: string;
}

const Card: React.FC<propsType> = ({ img }) => {
    return (
        <div className="card">
            <div data-aos="zoom-in-up" className="image-container">
                <Image className="image" src={img} width={500} height={500} alt="Image" />
            </div>
        </div>
    );
};

export default Card;
