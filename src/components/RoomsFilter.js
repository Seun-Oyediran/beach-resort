import React, { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from './Title'
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
const RoomsFilter = ({ rooms }) => {
    const value = useContext(RoomContext)
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = value
    let types = getUnique(rooms, 'type')
    types = ['all', ...types]
    let options = types.map((rm, index) => (<option key={index} value={rm}>{rm}</option>))
    let people = getUnique(rooms, 'capacity')
    let options2 = people.map((rm, index) => (<option key={index} value={rm}>{rm}</option>))
    return (
        <>

            <section className="filter-container">
                <Title title={`search rooms`} />
                <form className="filter-form">
                    {/* select type */}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select name="type" id="type" value={type} className='form-control' onChange={handleChange}>
                            {options}
                        </select>
                    </div>
                    {/* end select type */}
                    {/* guest */}
                    <div className="form-group">
                        <label htmlFor="capacity">Capacity</label>
                        <select name="capacity" id="capacity" value={capacity} className='form-control' onChange={handleChange}>
                            {options2}
                        </select>
                    </div>
                    {/* end guest */}
                    {/* room price */}
                    <div className="form-group">
                        <label htmlFor="price">
                            room price ${price}
                        </label>
                        <input type="range" name="price" min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control' />
                    </div>
                    {/* end of room price */}
                    {/* size */}
                    <div className="form">
                        <label htmlFor="size">room size</label>
                        <div className="size-inputs">
                            <input type="number" name="minSize" value={minSize} onChange={handleChange} className='size-input' id="size" />
                            <input type="number" name="maxSize" value={maxSize} onChange={handleChange} className='size-input' id="size" />
                        </div>
                    </div>
                    {/* end of size */}
                    {/* extras */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" checked={breakfast} id="breakfast" onChange={handleChange} />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox" name="pets" checked={pets} id="pets" onChange={handleChange} />
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
                    {/* end of extras */}
                </form>
            </section>

        </>
    )
}

export default RoomsFilter
