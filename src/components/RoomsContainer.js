import React, { useContext } from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomContext } from '../Context'
import Loading from './Loading'
const RoomsContainer = () => {
    const value = useContext(RoomContext)

    return (<>
        {value.loading && <Loading />}
        {
            !value.loading &&
            <>
                <RoomsFilter rooms={value.rooms} />
                <RoomsList rooms={value.sortedRooms} /></>
        }

    </>

    )
}

export default RoomsContainer
