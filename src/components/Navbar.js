// styles 
import './Navbar.css'

import { Link } from 'react-router-dom';

import React from 'react';

const Navbar = () => {
  return (
    <div className = 'navbar'>
        <nav>
            <Link>
                <h1>Cooking ninjas</h1>
            </Link>

        </nav>
    </div>
  )
}

export default Navbar