import React from 'react'
import './Header.css';
import BoltIcon from '@mui/icons-material/Bolt';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'

const Header = ({userAuth}) => {
    return (
        <header>
            <Link to={userAuth ? "/home" : "/"} className='nameComp'><BoltIcon className='logo' /><h3>Three Pics</h3></Link>
            {userAuth && <Link to="/profile"> <Avatar className="avatar" sx={{ width: 24, height: 24 }} /></Link>}
        </header>
    )
}

export default Header