import React, { useState } from 'react'
import Title from './Title'
const Services = () => {
    const [services, setServices] = useState([{
        icon: <i className="fas fa-cocktail"></i>,
        title: 'free cocktails',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates in consequuntur debitis.'
    },
    {
        icon: <i className="fas fa-hiking"></i>,
        title: 'endless hiking',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates in consequuntur debitis.'
    },
    {
        icon: <i className="fas fa-shuttle-van"></i>,
        title: 'free shuttle',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates in consequuntur debitis.'
    },
    {
        icon: <i className="fas fa-beer"></i>,
        title: 'strongest beer',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates in consequuntur debitis.'
    },
    ])
    return (
        <>
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {services.map((item, index) => (
                        <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    ))}
                </div>

            </section>
        </>
    )
}

export default Services
