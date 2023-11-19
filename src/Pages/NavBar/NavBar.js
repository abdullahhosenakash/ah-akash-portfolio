import React from 'react';
import { Link } from 'react-router-dom';
import CustomNavLink from '../Utilities/CustomNavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import SunIcon from '../Utilities/SunIcon';

const NavBar = ({ toggled, setToggled }) => {
  return (
    <div className='navbar bg-base-200 px-24'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to='/' className='btn btn-ghost text-xl'>
          Abdullah Hosen Akash
        </Link>
      </div>
      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <CustomNavLink to='/' toggle={toggled}>
              Home
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to='/projects' toggle={toggled}>
              Projects
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to='/resume' toggle={toggled}>
              Resume
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to='/about' toggle={toggled}>
              About
            </CustomNavLink>
          </li>
          <li>
            <Link
              to='https://www.facebook.com/abdullahhosen.akash'
              target='_blank'
              className='text-lg px-4 mr-2'
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>
          <li>
            <Link
              to='https://github.com/abdullahhosenakash'
              target='_blank'
              className='text-lg px-4 mr-2'
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
          <li>
            <Link
              to='https://www.linkedin.com/in/md-abdullah-hosen-339916229'
              target='_blank'
              className='text-lg px-4'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
          {/* <div className='divider divider-horizontal'></div>
          <li>
            <button className='' onClick={() => setToggled(!toggled)}>
              {toggled ? (
                <FontAwesomeIcon icon={faMoon} className='text-lg w-[20px]' />
              ) : (
                <SunIcon />
              )}
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
