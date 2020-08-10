import React from 'react'
import Room from './Room'

const RoomsList = ({ rooms }) => {
    return (
        <>
            {rooms.length < 1 && <div className="empty-search">
                <h3>Unfortunately no rooms matched your search parameters</h3>
            </div>}
            {rooms.length > 0 && <section className="roomslist">
                <div className="roomslist-center">
                    {rooms.map((rm) => (<Room key={rm.id} rm={rm} />))}
                </div>
            </section>}
        </>
    )
}

export default RoomsList
