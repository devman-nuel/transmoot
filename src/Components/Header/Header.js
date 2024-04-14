import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faHomeAlt} from '@fortawesome/free-solid-svg-icons';
import { faImages} from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import { faSort} from '@fortawesome/free-solid-svg-icons';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';
import { faImagePortrait} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <div className='salutation'>
        <span>Dashboard</span>
        <p>Welcome, Devman_nuel</p>
      </div>

      <div className='post-nav'>
        <div className='search-bar'>
          <input
            type="text"
            placeholder="Type here..."
          />
          <button className='search-icon' type="submit">
            Search
          </button>
        </div>

        <div className='menu-cons'>
          {showMenu ? (
            <img
              className="close-icon"
              src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1713047941/icons8-close-50_2_idlt9u.png"
              alt="Close"
              onClick={toggleMenu}
            />
          ) : (
            <img
              className="menu-icon"
              src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1713047941/icons8-menu-50_2_leyspe.png"
              alt="Menu"
              onClick={toggleMenu}
            />
          )}
          {showMenu && (
            <div className="fixed-component">
              {/* Your fixed component content goes here */}
              <div className='sidebar'>
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
