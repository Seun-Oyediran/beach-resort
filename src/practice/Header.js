import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { gsap } from 'gsap';
const Header = () => {
    const [mount, setMount] = useState(false)
    useEffect(() => {
        setMount(true)
    }, [])
    const headerTL = gsap.timeline({ reversed: true })
    headerTL.to('.dropdown', 0.5, { height: 80 }).to('.dropdown', 0.5, { width: 300 }).to('.dropdown p', 0.3, { y: 0 })

    const trigger = () => {
        tweenCheck(headerTL)
    }
    const tweenCheck = (params) => {
        if (params.reversed()) {
            params.play()
        } else {
            params.reverse()
        }
    }
    return (
        <>
            <Router>
                <header>
                    <div className="container">
                        <h1>Photography</h1>
                        <div className="menu">
                            <p onClick={trigger}>
                                <i className="fas fa-ellipsis-h"></i>
                            </p>
                        </div>
                        <div className="dropdown">
                            <Link to='/meme'><p>Meme</p></Link>
                            {/* <Link path='/work'><p>Work</p></Link>
                        <Link path='/work'><p>Work</p></Link> */}
                        </div>
                    </div>
                </header>

            </Router>
        </>
    )
}

export default Header
