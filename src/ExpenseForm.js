import React, { useState } from 'react';

function ExpenseForm({ section, selectedSubsection, onSubsectionSelected, onExpenseSubmit }) {
  const [particulars, setParticulars] = useState('');
  const [billNo, setBillNo] = useState('');
  const [billDate, setBillDate] = useState('');
  const [amount, setAmount] = useState('');
  const [sectionInCharge, setSectionInCharge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an expense object with the form data
    const expense = {
      particulars,
      billNo,
      billDate,
      amount: parseFloat(amount), // Convert to float
      sectionInCharge,
      subsection: selectedSubsection ? selectedSubsection.name : '',
    };

    // Pass the expense object to the onExpenseSubmit function
    onExpenseSubmit(expense);

    // Clear form fields after submission
    setParticulars('');
    setBillNo('');
    setBillDate('');
    setAmount('');
    setSectionInCharge('');
  };

  return (
    <div>
      <h3>Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Particulars:
          <input
            type="text"
            value={particulars}
            onChange={(e) => setParticulars(e.target.value)}
            required
          />
        </label>
        <label>
          Subsection:
          <select
            value={selectedSubsection ? selectedSubsection.name : ''}
            onChange={(e) => {
              const selectedSubsection = section.subsections.find(
                (subsection) => subsection.name === e.target.value
              );
              onSubsectionSelected(selectedSubsection);
            }}
            required
          >
            <option value="" disabled>Select a Subsection</option>
            {section.subsections.map((subsection, index) => (
              <option key={index} value={subsection.name}>
                {subsection.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Bill No:
          <input
            type="text"
            value={billNo}
            onChange={(e) => setBillNo(e.target.value)}
            required
          />
        </label>
        <label>
          Bill Date:
          <input
            type="date"
            value={billDate}
            onChange={(e) => setBillDate(e.target.value)}
            required
          />
        </label>
        <label>
          Bill Amount (in Rupees):
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <label>
          Section In-Charge:
          <input
            type="text"
            value={sectionInCharge}
            onChange={(e) => setSectionInCharge(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
