import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import'../../Components/Footer/Footer.css';
const Footer = () => {
  return (
    <div className='footer_outer_container'>
    <div className='footer_inner_container'>
    <div className='footer_icons'>
      <FacebookOutlinedIcon/>
      <InstagramIcon/>
      <YouTubeIcon/>
    </div>
    <div className='footer_data'>
      <div>
        <ul>
          <li><a href="/" alt="">Audio Description</a></li>
          <li><a href="/" alt="">Investor</a></li>
          <li><a href="/" data-Legal="">Notice</a> </li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a href="/" alt="">Help Center</a></li>
          <li><a href="/" alt="">Jobs</a></li>
          <li><a href="/" alt="">Cookie Preferences</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a href="/" alt="">Gift Cards</a></li>
          <li><a href="/" alt="">Terms of Use</a></li>
          <li><a href="/" alt="">Corporate Information</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a href="/" alt="">Media Center</a></li>
          <li><a href="/" alt="">Privacy</a></li>
          <li><a href="/" alt="">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div className='Service_code'>
      <p>
        Service Code
      </p>
    </div>
    <div className='Copy-write'>
      &copy; 1997-2024 Netflix, Inc.
    </div>
    </div>
    </div>
  );
}

export default Footer;