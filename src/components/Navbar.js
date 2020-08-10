import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(prev => !prev)
    }
    return (
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/'>
                            <img src={logo} alt="Beach Logo" />
                        </Link>
                        <button onClick={handleToggle} className='nav-btn'>
                            <i className="fas fa-align-right fa-2x"></i>
                        </button>
                    </div>
                    <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li><li>
                            <Link to='/rooms'>Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
