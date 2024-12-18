import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ProSidebar className="h-screen">
      <Menu iconShape="square">
        <MenuItem>
          <Link to="/dashboard">Overview</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/analytics">Analytics</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/settings">Settings</Link>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
