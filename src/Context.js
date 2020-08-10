import React, { Component } from 'react'
// import items from './data'
import Client from './Contentful'

export const RoomContext = React.createContext()
export default class Context extends Component {
    state = {
        rooms: [],
        featuredRooms: [],
        sortedRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }
    getData = async () => {
        try {
            let res = await Client.getEntries({
                content_type: 'beach22517',
                order: 'sys.createdAt'
            })
            let rooms = this.formatData(res.items)
            let featuredRooms = rooms.filter(rm => rm.featured === true)
            let maxPrice = Math.max(...rooms.map(item => item.price))
            let maxSize = Math.max(...rooms.map(item => item.size))
            console.log(rooms);
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize
            })

        } catch (error) {
            console.log(error);
        }
    }
    componentDidMount() {
        this.getData()
    }

    formatData(params) {
        let tempItems = params.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(img => img.fields.file.url)

            let newdata = { id, ...item.fields, images }
            return newdata
        })
        return tempItems
    }
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        const rem = tempRooms.find(rm => rm.slug == slug)
        return rem
    }
    handleChange = e => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = e.target.name
        this.setState({
            [name]: value
        }, this.filterRooms)
    }

    filterRooms = () => {

        let { rooms, type, capacity, price, minSize, maxSize, maxPrice, breakfast, pets } = this.state

        // all the rooms
        let tempRooms = [...rooms]


        // filter by type
        if (type != 'all') {
            tempRooms = tempRooms.filter(rm => rm.type == type)
        }

        //filter by capacity
        if (+capacity != 1) {
            tempRooms = tempRooms.filter(rm => rm.capacity >= +capacity)
        }

        //filter by price
        tempRooms = tempRooms.filter(rm => rm.price <= +price)

        //filter by size
        tempRooms = tempRooms.filter(rm => rm.size >= +minSize && rm.size <= +maxSize)

        //filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(rm => rm.breakfast == true)
        }

        //filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(rm => rm.pets == true)
        }
        this.setState({
            sortedRooms: tempRooms
        })
    }
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

