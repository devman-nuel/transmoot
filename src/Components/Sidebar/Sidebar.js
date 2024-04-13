// Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faHomeAlt} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
       <div className='logo'>
         <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1712796881/Transmoot_Logo_aib80n.png' alt=''></img>
       </div>

       <div className='work'>
        <p>WORKSPACE</p>

        <div className='initial-box'>
           <div className='initial-con' >
            <div className='initial'></div>
            <span>Devman_nuel</span>
           </div>
           <FontAwesomeIcon icon={faCaretRight } />
        </div>
       </div>

       <div className='menu'>
        <p>MENU</p>

        <div className='menu-con'>
          <Link to={"./dashboard"} className='menu-links'>
           <FontAwesomeIcon icon={faHomeAlt} className='icon'/>Dashboard             
          </Link>
          <Link to={"./dashboard"} className='menu-links'>
           <FontAwesomeIcon icon={faHomeAlt} className='icon'/>Create            
          </Link>
          <Link to={"./dashboard"} className='menu-links'>
           <FontAwesomeIcon icon={faHomeAlt} className='icon'/>Teams            
          </Link>
          <Link to={"./dashboard"} className='menu-links'>
           <FontAwesomeIcon icon={faHomeAlt} className='icon'/>Manage            
          </Link>
          <Link to={"./dashboard"} className='menu-links'>
           <FontAwesomeIcon icon={faHomeAlt} className='icon'/>Analytics             
          </Link>
          <Link to={"./dashboard"} className='menu-links'>
           <FontAwesomeIcon icon={faHomeAlt} className='icon'/>Media Library             
          </Link>
        </div>
       </div>

       <div className='plan-upgrade'>
         <p>You are using a free account, upgrade your plan to unlock more features.</p>
         <button>Upgrade plan</button>
       </div>
    </div>
  );
}

export default Sidebar;