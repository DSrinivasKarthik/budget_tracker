import React from 'react';

function AccountSection({ section, onSectionSelected }) {
  return (
    <div className="account-section">
      <h3>{section.name}</h3>
      <p>Budget: ₹{section.budget}</p>
      <button onClick={() => onSectionSelected(section)}>Select</button>
    </div>
  );
}

export default AccountSection;
