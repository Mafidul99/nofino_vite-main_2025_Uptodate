import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const Accounts = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    region: '',
    accountType: 'savings',
    initialDeposit: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (val) => {
    setFormData((prev) => ({ ...prev, country: val, region: '' }));
  };

  const handleRegionChange = (val) => {
    setFormData((prev) => ({ ...prev, region: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Account Opening Form Submitted!");
  };

  return (
    <div className="flex justify-center min-h-screen px-4 py-10 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Bank Account Opening Form
        </h2>

        {/* Personal Details */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Personal Details</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </section>

        {/* Address Details */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Address Details</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />

            <CountryDropdown
              value={formData.country}
              onChange={handleCountryChange}
              className="w-full px-4 py-2 bg-white border rounded"
              required
            />
            <RegionDropdown
              country={formData.country}
              value={formData.region}
              onChange={handleRegionChange}
              className="w-full px-4 py-2 bg-white border rounded"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP/Postal Code"
              value={formData.zip}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </section>

        {/* Account Details */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Account Details</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border rounded"
              required
            >
              <option value="savings">Savings Account</option>
              <option value="current">Current Account</option>
              <option value="student">Student Account</option>
            </select>
            <input
              type="number"
              name="initialDeposit"
              placeholder="Initial Deposit"
              value={formData.initialDeposit}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
        </section>

        <button
          type="submit"
          className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Accounts;
