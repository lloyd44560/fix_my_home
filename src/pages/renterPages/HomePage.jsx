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

  const dummyMessages = [
    { id: 1, sender: 'Admin', message: 'Welcome to the app!', date: 'Aug 1, 2025' },
    { id: 2, sender: 'Support', message: 'Your request has been received.', date: 'Aug 2, 2025' },
    { id: 3, sender: 'Manager', message: 'Your lease renewal is due next month.', date: 'Aug 3, 2025' },
  ];

  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <>
          {/* Hero Section */}
          <div
            style={{
              height: 250,
              backgroundImage: 'url("https://via.placeholder.com/1200x350")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: '0 20px',
              borderRadius: 12,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
          />

          {/* Home Sections */}
          <div style={{ padding: '30px 20px', backgroundColor: '#f5f7fa' }}>
            <Section title="Quick Actions">
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <ActionCard label="Report Issue" />
                <ActionCard label="Update Profile" />
                <ActionCard label="Renew Lease" />
              </div>
            </Section>

            <Section title="Announcements">
              <p style={{ marginBottom: 8 }}>📢 <strong>Power Interruption</strong> on Aug 3, 9AM–12NN</p>
              <p>💧 <strong>Water Maintenance</strong> on Aug 5, whole day</p>
            </Section>

            <Section title="My Requests">
              <p>You currently have <strong>2 active requests</strong>. Track or update them here.</p>
            </Section>

            <SectionToggle
              title="See Agent Details"
              isExpanded={showAgentDetails}
              onToggle={() => setShowAgentDetails(!showAgentDetails)}
            >
              <p><strong>Name:</strong> Jane Doe</p>
              <p><strong>Email:</strong> jane@example.com</p>
              <p><strong>Phone:</strong> +63 912 345 6789</p>
            </SectionToggle>

            <SectionToggle
              title="See Property Report"
              isExpanded={showPropertyReport}
              onToggle={() => setShowPropertyReport(!showPropertyReport)}
            >
              <p><strong>Property Status:</strong> Good</p>
              <p><strong>Last Inspection:</strong> June 2024</p>
              <p><strong>Next Scheduled:</strong> December 2024</p>
            </SectionToggle>

            <Section title="FAQs">
              <ul style={{ paddingLeft: 20 }}>
                <li>How do I report issues?</li>
                <li>How do I contact my agent?</li>
                <li>Can I manage my lease online?</li>
              </ul>
            </Section>

            <Section title="Recommended Services">
              <p>🧹 Cleaning | 🧰 Plumbing | 🛠️ Electrical</p>
            </Section>
          </div>
        </>
      );
    }

    if (currentPage === 'messages') {
      return (
        <div style={{ padding: '30px 20px' }}>
          <h2 style={{ marginBottom: 20 }}>📨 Your Messages</h2>
          {dummyMessages.map((msg) => (
            <div
              key={msg.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 16,
                marginBottom: 12,
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              }}
            >
              <p style={{ margin: 0, fontWeight: 'bold' }}>{msg.sender}</p>
              <p style={{ margin: '4px 0' }}>{msg.message}</p>
              <p style={{ margin: 0, fontSize: 12, color: '#888' }}>{msg.date}</p>
            </div>
          ))}
        </div>
      );
    }

    if (currentPage === 'account') {
      return (
        <div style={{ padding: '30px 20px' }}>
          <h2 style={{ marginBottom: 20 }}>👤 Account Settings</h2>
          <form style={{ backgroundColor: '#fff', padding: 20, borderRadius: 12, maxWidth: 500, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <Input label="Username" placeholder="johndoe" />
            <Input label="Email" placeholder="johndoe@example.com" type="email" />
            <Input label="Phone Number" placeholder="+63 912 345 6789" />
            <button
              type="submit"
              style={{
                marginTop: 16,
                backgroundColor: '#0A66C2',
                color: 'white',
                padding: '10px 16px',
                border: 'none',
                borderRadius: 6,
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Save Changes
            </button>
          </form>
        </div>
      );
    }
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '12px 0',
          backgroundColor: '#0A66C2',
          color: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 999,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
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

      {/* Title */}
      <div style={{ padding: '24px 20px 0' }}>
        <h1 style={{ margin: 0, fontSize: '28px', color: '#1c1e21' }}>
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
        fontWeight: 500,
        fontSize: 16,
        
        // borderBottom: active ? '2px solid #FFD700' : '2px solid transparent',
        paddingBottom: 4,
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
        padding: '20px',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        marginBottom: 24,
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: 20, color: '#333' }}>{title}</h2>
      {children}
    </div>
  );
}

function SectionToggle({ title, isExpanded, onToggle, children }) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        marginBottom: 24,
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
        <h2 style={{ margin: 0, fontSize: 20 }}>{title}</h2>
        {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
      {isExpanded && <div style={{ marginTop: 12 }}>{children}</div>}
    </div>
  );
}

function ActionCard({ label }) {
  return (
    <div
      style={{
        backgroundColor: '#0A66C2',
        color: '#fff',
        padding: '16px 20px',
        borderRadius: 10,
        minWidth: 150,
        textAlign: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
        flex: 1,
      }}
    >
      {label}
    </div>
  );
}

function Input({ label, type = 'text', placeholder }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: 'block', marginBottom: 4, fontWeight: 500 }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '10px 12px',
          borderRadius: 6,
          border: '1px solid #ccc',
          fontSize: 14,
        }}
      />
    </div>
  );
}
