import React from 'react'
import '../../Components/Header/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import'../../index.css';
const Header = () => {
  return (
    <div className='header_Outer_Container'>
        <div className='header_Container'>
            <div className='header_Left'>
                <ul>
                    
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Brows by Languages</li>
                </ul>

            </div>
            <div className='header_right'>
                <ul>
                    <li>< SearchIcon /></li>
                    <li><NotificationsNoneIcon/></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;