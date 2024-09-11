import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardList, User, Package, ChevronDown, Calculator } from 'lucide-react';

const ClaimAssessmentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    claimNumber: 'PUA0300331',
    claimantName: 'Rasmeet Kour',
    age: '34',
    dob: '20/02/1990',
    occupation: 'Accountant',
    riskAddress: 'Pendle Way Pendle Hill NSW',
    product: 'Personal Accident & Sickness Insurance',
    claimedAmount: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/submit-claim', { state: { formData } });
  };

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <ClipboardList className="text-blue-600" size={24} />
            </div>
            <h1 className="text-2xl font-semibold">{formData.claimNumber}</h1>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-white text-gray-700 rounded-md shadow">Finance <ChevronDown size={16} className="inline" /></button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-md shadow">Tasks <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs">1</span></button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-md shadow">Letters</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-md shadow">History</button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md shadow">Capture Claim</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-md shadow">Communications</button>
          </div>
        </header>

        <div className="flex gap-6">
          <div className="w-2/3">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <ClipboardList className="mr-2 text-green-500" size={20} /> Claim Details
              </h2>
              <FormField label="Claim Number" name="claimNumber" value={formData.claimNumber} onChange={handleInputChange} />
              <FormField label="Claimant Name" name="claimantName" value={formData.claimantName} onChange={handleInputChange} />
              <FormField label="Age" name="age" value={formData.age} onChange={handleInputChange} />
              <FormField label="Date of Birth" name="dob" value={formData.dob} onChange={handleInputChange} />
              <FormField label="Occupation" name="occupation" value={formData.occupation} onChange={handleInputChange} />
              <FormField label="Risk Address" name="riskAddress" value={formData.riskAddress} onChange={handleInputChange} />
              <FormField label="Product" name="product" value={formData.product} onChange={handleInputChange} />
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Package className="mr-2 text-orange-500" size={20} /> Cover Details
              </h2>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Product</th>
                    <th className="px-4 py-2 text-left">Cover</th>
                    <th className="px-4 py-2 text-left">Inception</th>
                    <th className="px-4 py-2 text-left">Expiry</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t px-4 py-2">{formData.product}</td>
                    <td className="border-t px-4 py-2">Standard Cover</td>
                    <td className="border-t px-4 py-2">11/09/2024</td>
                    <td className="border-t px-4 py-2">11/09/2025</td>
                    <td className="border-t px-4 py-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-1/3">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Calculator className="mr-2 text-blue-500" size={20} />
                Claim Calculation
              </h2>
              <FormField label="Claimed Amount" name="claimedAmount" value={formData.claimedAmount} onChange={handleInputChange} />
              <button 
                onClick={handleSubmit}
                className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 flex items-center justify-center"
              >
                <Calculator className="mr-2" size={20} />
                Calculate and Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimAssessmentForm;