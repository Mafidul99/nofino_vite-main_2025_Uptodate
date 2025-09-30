import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const Accounts = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    fname: '',
    mname: '',
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
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4 py-4">
      <form
        onSubmit={handleSubmit}
        className="w-full p-8 space-y-6 bg-[#fff] dark:bg-gray-700 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-green-500">
          Your Account Opening Form
        </h2>

        {/* Personal Details */}
        <section>
          <h3 className="mb-4 text-xl font-semibold dark:text-white">Personal Details</h3>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
            <input
              type="text"
              name="fullname"
              placeholder="Your Full Name"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded dark:bg-gray-600 dark:text-white"
            />
            <input
              type="text"
              name="fname"
              placeholder="Father Name"
              value={formData.fname}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded  dark:bg-gray-600 dark:text-white"
            />
            <input
              type="text"
              name="mname"
              placeholder="Mother Name"
              value={formData.mname}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded  dark:bg-gray-600 dark:text-white"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded dark:bg-gray-600 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded dark:bg-gray-600 dark:text-white"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded dark:bg-gray-600 dark:text-white"
            />
          </div>
        </section>

        {/* Address Details */}
        <section>
          <h3 className="mb-4 text-xl font-semibold dark:text-white">Address Details</h3>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded dark:bg-gray-600 dark:text-white"
            />
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded dark:bg-gray-600 dark:text-white"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded dark:bg-gray-600 dark:text-white"
            />

            <CountryDropdown
              value={formData.country}
               name="country"
              onChange={handleCountryChange}
              className="w-full px-4 py-2 bg-[#fff] border rounded dark:bg-gray-600 dark:text-white"
              required
            />
            <RegionDropdown
              country={formData.country}
              name="region"
              value={formData.region}
              onChange={handleRegionChange}
              className="w-full px-4 py-2 bg-[#fff] border rounded dark:bg-gray-600 dark:text-white"
              required
            />
            <input
              type="number"
              name="zip"
              placeholder="ZIP/Postal Code"
              value={formData.zip}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded dark:bg-gray-600 dark:text-white"
            />
          </div>
        </section>

        {/* Account Details */}
        <section>
          <h3 className="mb-4 text-xl font-semibold dark:text-white">Account Details</h3>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#fff] border rounded dark:bg-gray-600 dark:text-white"
              required
            >
              <option value="savings">Savings Account</option>
              <option value="current">Current Account</option>
              <option value="student">Student Account</option>
              <option value="zero Balance Account">Zero Balance Account</option>
            </select>
            <input
              type="number"
              name="initialDeposit"
              placeholder="Initial Deposit"
              value={formData.initialDeposit}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded  dark:bg-gray-600 dark:text-white"
              required
            />
          </div>
        </section>

      <div className=' items-center justify-center justify-items-center text-center'>
        <button
          type="submit"
          className="py-2 px-4 font-semibold text-white transition bg-green-600 rounded-md hover:bg-blue-700"
        >
          Submit Application
        </button>
      </div>
      </form>
    </div>
  );
};

export default Accounts;
