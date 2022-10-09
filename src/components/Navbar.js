import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/angular">Angular Stuff</Link>
            <Link to="/energy">Energy</Link>
            <Link to="/kinematics">Kinematics</Link>
            <Link to="/momentum">Momentum</Link>
        </div>
    )
}

export default Navbar