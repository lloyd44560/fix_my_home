import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showAgentDetails, setShowAgentDetails] = useState(false);
  const [showPropertyReport, setShowPropertyReport] = useState(false);

  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <>
          {/* Hero Section */}
          <div
            style={{
              height: 200,
              backgroundImage: 'url("https://via.placeholder.com/1200x300")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: '0 20px',
              borderRadius: 8,
            }}
          />

          {/* Sections */}
          <div style={{ padding: 20 }}>
            <Section title="Report Required Maintenance/Issues">
              <p>Let us know if something needs repair or attention.</p>
            </Section>

            <Section title="My Requests">
              <p>View or track your service requests here.</p>
            </Section>

            <Section title="Profile Completion">
              <p>Complete your profile to get the best service experience.</p>
            </Section>

            <SectionToggle
              title="See Agent Details"
              isExpanded={showAgentDetails}
              onToggle={() => setShowAgentDetails(!showAgentDetails)}
            >
              <p>Name: Jane Doe</p>
              <p>Contact: jane@example.com</p>
            </SectionToggle>

            <SectionToggle
              title="See Property Report"
              isExpanded={showPropertyReport}
              onToggle={() => setShowPropertyReport(!showPropertyReport)}
            >
              <p>Property Status: Good</p>
              <p>Last Inspection: June 2024</p>
            </SectionToggle>
          </div>
        </>
      );
    }

    if (currentPage === 'messages') {
      return (
        <div style={{ padding: 20 }}>
          <h2>Messages</h2>
          <p>No new messages at the moment.</p>
        </div>
      );
    }

    if (currentPage === 'account') {
      return (
        <div style={{ padding: 20 }}>
          <h2>Account</h2>
          <p>Username: johndoe</p>
          <p>Email: johndoe@example.com</p>
        </div>
      );
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navbar */}
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
        <NavItem
          icon={<HomeIcon />}
          label="Home"
          active={currentPage === 'home'}
          onClick={() => setCurrentPage('home')}
        />
        <NavItem
          icon={<MessageIcon />}
          label="Messages"
          active={currentPage === 'messages'}
          onClick={() => setCurrentPage('messages')}
        />
        <NavItem
          icon={<AccountCircleIcon />}
          label="Account"
          active={currentPage === 'account'}
          onClick={() => setCurrentPage('account')}
        />
      </nav>

      {/* Page Title */}
      <div style={{ padding: 20 }}>
        <h1 style={{ margin: 0, color: '#333' }}>
          {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
        </h1>
      </div>

      {renderContent()}
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: active ? '#FFD700' : '#fff', // Highlight active
      }}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: 16,
      }}
    >
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      {children}
    </div>
  );
}

function SectionToggle({ title, isExpanded, onToggle, children }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: 16,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={onToggle}
      >
        <h2 style={{ margin: 0 }}>{title}</h2>
        {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      {isExpanded && <div style={{ marginTop: 10 }}>{children}</div>}
    </div>
  );
}
