import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        img: "/todoapp.jpg",
        link: "https://to-do-d18yk7s7o-mehak-s-projects.vercel.app/",
    },
    {
        id: 1,
        img: "/timer.jpg",
        link: "https://timer-mu-sage.vercel.app/",
    },
    {
        id: 2,
        img: "/weatherappic.png",
        link: "https://github.com/MehakFaheem/weather_app",
    },
    {
        id: 3,
        img: "/charity.jpg",
        link: "https://hopefor-humanity.vercel.app/",
    },
];

const projects = () => {
    return (
        <div id='projects' className='container pt-10'>
            <Heading data-aos="zoom-in-up" title='Projects' />
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center'>
                {data.map((el) => (
                    <a href={el.link} target='_blank' rel='noopener noreferrer' key={el.id}>
                        <Card
                            img={el.img}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default projects;
