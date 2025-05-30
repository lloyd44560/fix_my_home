import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavItem from './NavItem';

export default function NavBar({ currentPage, setCurrentPage }) {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '10px 0',
        backgroundColor: '#086cfc',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 999,
      }}
    >
      <NavItem icon={<HomeIcon />} label="Home" active={currentPage === 'home'} onClick={() => setCurrentPage('home')} />
      <NavItem icon={<MessageIcon />} label="Messages" active={currentPage === 'messages'} onClick={() => setCurrentPage('messages')} />
      <NavItem icon={<AccountCircleIcon />} label="Account" active={currentPage === 'account'} onClick={() => setCurrentPage('account')} />
    </nav>
  );
}