import React, { useState } from 'react';
import { ClipboardList, Calculator, DollarSign } from 'lucide-react';

const ClaimSubmissionPage = () => {
  const [claimDetails, setClaimDetails] = useState({
    claimNumber: 'PUA0300331',
    claimantName: 'Rasmeet Kour',
    age: '34',
    occupation: 'Accountant',
    claimedAmount: '',
  });

  const [totalPayable, setTotalPayable] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClaimDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    // This is a placeholder calculation. Replace with your actual calculation logic.
    const claimed = parseFloat(claimDetails.claimedAmount) || 0;
    setTotalPayable(claimed * 0.8); // Example: 80% of claimed amount
  };

  const FormField = ({ label, name, value, onChange }) => (
    <div className="flex items-center mb-4">
      <label htmlFor={name} className="w-1/3 text-right pr-4 text-sm text-gray-600">{label}:</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-2/3 p-2 border border-gray-300 rounded-md"
      />
    </div>
  );

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <ClipboardList className="text-blue-600" size={24} />
            </div>
            <h1 className="text-2xl font-semibold">Claim Submission: {claimDetails.claimNumber}</h1>
          </div>
        </header>

        <div className="flex gap-6">
          <div className="w-2/3 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Claim Details</h2>
            <FormField label="Claim Number" name="claimNumber" value={claimDetails.claimNumber} onChange={handleInputChange} />
            <FormField label="Claimant Name" name="claimantName" value={claimDetails.claimantName} onChange={handleInputChange} />
            <FormField label="Age" name="age" value={claimDetails.age} onChange={handleInputChange} />
            <FormField label="Occupation" name="occupation" value={claimDetails.occupation} onChange={handleInputChange} />
            <FormField label="Claimed Amount" name="claimedAmount" value={claimDetails.claimedAmount} onChange={handleInputChange} />
          </div>

          <div className="w-1/3 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <DollarSign className="mr-2 text-green-500" size={20} />
              Claim Summary
            </h2>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Claimed Amount:</p>
              <p className="text-lg font-semibold">${claimDetails.claimedAmount || '0.00'}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Total Payable:</p>
              <p className="text-2xl font-bold text-green-600">${totalPayable.toFixed(2)}</p>
            </div>
            <button 
              onClick={calculateTotal}
              className="w-full bg-blue-500 text-white p-2 rounded-md flex items-center justify-center hover:bg-blue-600"
            >
              <Calculator className="mr-2" size={20} />
              Calculate
            </button>
            <button 
              className="w-full mt-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
            >
              Submit Claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimSubmissionPage;