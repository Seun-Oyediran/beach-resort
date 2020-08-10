import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
const Room = ({ rm }) => {
    // console.log(rm);
    return (
        <>
            <article className="room">
                <div className="img-container">
                    <img src={rm.images[0] || defaultImg} alt={rm.name} />
                    <div className="price-top">
                        <h6>${rm.price}</h6>
                        <p>per night</p>
                    </div>
                    <Link to={`/rooms/${rm.slug}`} className='btn-primary room-link'>Features</Link>
                </div>
                <p className="room-info">{rm.name}</p>
            </article>
        </>
    )
}


export default Room
