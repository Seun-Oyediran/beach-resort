import React from 'react'

const MemeImg = ({ memes }) => {
    return (
        <div className='img-box'>
            <img src={memes.url} alt={memes.name} />

        </div>
    )
}

export default MemeImg
