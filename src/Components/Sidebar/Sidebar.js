// Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faHomeAlt} from '@fortawesome/free-solid-svg-icons';
import { faImages} from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import { faSort} from '@fortawesome/free-solid-svg-icons';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';
import { faImagePortrait} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar-con">
       <div className='sidebar'>
       <div className='logo'>
         <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1713129613/Transmoot_the_logo_o8au8z.png' alt=''></img>
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
           <FontAwesomeIcon icon={faHomeAlt} className='icon'/> <p>Dashboard </p>          
          </Link>
          <Link to={"./dashboard"} className='menu-links'>
           <FontAwesomeIcon icon={faImages} className='icon'/> <p>Create</p>             
          </Link>
          <Link to={"./dashboard"} className='menu-links'>
           <FontAwesomeIcon icon={faPeopleGroup} className='icon'/> <p>Teams </p>             
          </Link>
          <Link to={"./dashboard"} className='menu-links'>
           <FontAwesomeIcon icon={ faSort} className='icon'/>  <p>Manage </p>            
          </Link>
          <Link to={"./dashboard"} className='menu-links'>
           <FontAwesomeIcon icon={faDatabase} className='icon'/> <p>Analytics</p>               
          </Link>
          <Link to={"./dashboard"} className='menu-links'>
           <FontAwesomeIcon icon={faImagePortrait} className='icon'/><p>Media Library</p>                
          </Link>
        </div>
       </div>

       <div className='plan-upgrade'>
         <p>You are using a free account, upgrade your plan to unlock more features.</p>
         <button>Upgrade plan</button>
       </div>
       </div>
    </div>
  );
}

export default Sidebar;