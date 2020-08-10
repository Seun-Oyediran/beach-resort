import React, { useContext } from 'react'
import { RoomContext } from '../Context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'
const FeaturedRooms = () => {
    const value = useContext(RoomContext)
    let { featuredRooms, loading } = value
    // console.log(featuredRooms);

    return (
        <>
            <section className="featured-rooms">
                <Title title='featured rooms'>
                </Title>
                <div className="featured-rooms-center">
                    {loading && <Loading />}
                    {!loading && featuredRooms.map(rm => (<Room key={rm.id} rm={rm} />))}
                </div>
            </section>
        </>

    )
}

export default FeaturedRooms
