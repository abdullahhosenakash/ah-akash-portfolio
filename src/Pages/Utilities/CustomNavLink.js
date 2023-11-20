import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, children, toggle }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `mr-2 btn btn-sm btn-ghost hover:text-secondary uppercase focus:bg-white ${
              toggle ? 'bg-gray-300' : 'bg-slate-700'
            }`
          : 'mr-2 btn btn-sm btn-ghost uppercase'
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
