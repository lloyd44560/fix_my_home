import React, { useState } from 'react';
import NavBar from '../../components/home/NavBar';
import HeroBanner from '../../components/home/HeroBanner';
import Section from '../../components/home/Section';
import SectionToggle from '../../components/home/SectionToggle';

export default function TraderHomePage() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showAgentDetails, setShowAgentDetails] = useState(false);
  const [showPropertyReport, setShowPropertyReport] = useState(false);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroBanner />
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
      case 'messages':
        return (
          <div style={{ padding: 20 }}>
            <h2>Messages</h2>
            <p>No new messages at the moment.</p>
          </div>
        );
      case 'account':
        return (
          <div style={{ padding: 20 }}>
            <h2>Account</h2>
            <p>Username: johndoe</p>
            <p>Email: johndoe@example.com</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div style={{ padding: 20 }}>
        <h1 style={{ margin: 0, color: '#333' }}>
          {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
        </h1>
      </div>
      {renderContent()}
    </div>
  );
}
