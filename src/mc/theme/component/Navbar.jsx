import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../theme-context'
import '../theme.css'

function Navbar() {

  const {theme, toggleTheme} = useTheme();

  return (
    <nav className='theme-body navbar '>
      <div className=''>
        <Link to='/' className='link '>Home</Link>
        <Link to='/about' className='link'>About</Link>
        <Link to='/contact' className='link'>Contact</Link>
      </div>
      <div className='mode-switch'>
        <label>
          <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  )
}

export default Navbar