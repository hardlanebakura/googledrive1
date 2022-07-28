import React from 'react';
import './sidebar.css';
import NewFile from './NewFile';
import SidebarItem from './SidebarItem';
import { InsertDriveFile, ImportantDevices, PeopleAlt, QueryBuilder as QueryBuilderIcon, StarBorder as StarBorderIcon, DeleteOutline, CloudQueue as Cloud } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <NewFile />
        <div className="sidebar__items-container">
            <SidebarItem arrow icon = {(<InsertDriveFile />)} label = { "MyDrive" } />
            <SidebarItem arrow icon = {(<ImportantDevices />)} label = { "Computers" } />
            <SidebarItem icon = {(<PeopleAlt />)} label = { "Shared with me" } />
            <SidebarItem icon = {(<QueryBuilderIcon />)} label = { "Recent" } />
            <SidebarItem icon = {(<StarBorderIcon />)} label = { "Starred" } />
            <SidebarItem icon = {(<DeleteOutline />)} label = { "Bin" } />
        </div>
          <SidebarItem icon = {(<Cloud />)} label = { "Memory storage" } />
    </div>
  )
}

export default Sidebar