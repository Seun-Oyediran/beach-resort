import React, { useState, useEffect } from 'react'

import MemeImg from './MemeImg'
const Memes = ({ meme }) => {



    return (
        <>
            <section>
                <div className="container">
                    <div className="con-box">
                        {meme.map((memes) => (<MemeImg key={memes.id} memes={memes} />))}
                    </div>

                </div>
            </section>

        </>
    )
}

export default Memes
