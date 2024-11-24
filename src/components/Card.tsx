import React from 'react'
import Image from 'next/image';
import '../styles/card.css';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, img, desc, tags }) => {
  return (
    <div className="card">
        <div data-aos="zoom-in-up" className="image-container">
            <Image className="image" src={img} width={500} height={500} alt={title} />
        </div>

        {/* The below section is commented, but I've converted it too */}
        {/* <div className="content">
            <div className="title">{title}</div>
            <div className="description">{desc}</div>
            <div className="tags-container">
                {tags.map((el) => (
                <div className="tag" key={el}>
                    {el}
                </div>))}
            </div>
        </div> */}
    </div>
  );
}

export default Card;
