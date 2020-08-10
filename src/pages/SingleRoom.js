import React, { useContext } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link, useParams } from 'react-router-dom'
import { RoomContext } from '../Context'
import Styled from '../components/StyledHero'
const SingleRoom = () => {
    const value = useContext(RoomContext)
    let { getRoom } = value
    let { slug } = useParams()
    const room = getRoom(slug)
    if (!room) {
        return (
            <div className="error"><h3>no such room could be found...</h3>
                <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
            </div>
        )
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
    const [bgImg, ...image] = images
    return (
        <>
            <Styled img={bgImg || defaultBcg} >
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className="btn-primary">back to rooms</Link>
                </Banner>
            </Styled>
            <section className="single-room">
                <div className="single-room-images">
                    {image.map((item, index) => (<img src={item} key={index} alt={name} />))}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: {size}SQFT</h6>
                        <h6>max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
                        <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
                        <h6>{breakfast && 'free breakfast included'}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className='extras'>
                    {extras.map((item, index) => (<li key={index}>- {item}</li>))}
                </ul>
            </section>
        </>
    )
}

export default SingleRoom
