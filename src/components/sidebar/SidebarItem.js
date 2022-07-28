import React from 'react';
import './sidebar.css';
import { ArrowRight } from '@mui/icons-material';

const SidebarItem = ({ arrow, icon, label }) => {
  return (
    <div className={ (label !== "Memory storage") ? "sidebar-item" : "sidebar-item memory_storage" } >
        <div className="sidebar-item__arrow">
            { arrow && (<ArrowRight />) }
        </div>
        <div className="sidebar-item__main">
            { icon }
            <p>{ label }</p>
        </div>
    </div>
  )
}

export default SidebarItem