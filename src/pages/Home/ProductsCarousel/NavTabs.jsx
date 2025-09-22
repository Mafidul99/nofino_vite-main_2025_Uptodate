// src/components/NavTabs.jsx
import React, { useState } from 'react';
import GoldLoanData from './Products/GoldLoanData';
import ProductLoanData from './Products/ProductLoanData';
import BusinessLoanData from './Products/BusinessLoanData';
import GroupLoanData from './Products/GroupLoanData';
import PersanalLoanData from './Products/PersanalLoanData';
import VehiLoanData from './Products/VehiLoanData';

const tabs = [
  { id: 'Gold Loan', label: 'Gold Loan' },
  { id: 'Product Loan', label: 'Product Loan' },
  { id: 'Business Loan', label: 'Business Loan' },
  { id: 'Group Loan', label: 'Group Loan' },
  { id: 'Personal Loan', label: 'Personal Loan' },
  { id: 'Loan Against Vehicle', label: 'Loan Against Vehicle' },
];

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState('Gold Loan');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Gold Loan':
        return (
          <div>
              <GoldLoanData />
          </div>
        );
      case 'Product Loan':
        return (
          <div>
            <ProductLoanData/>
          </div>
        );
      case 'Business Loan':
        return (
          <div>
            <BusinessLoanData/>
          </div>
        );
        case 'Group Loan':
        return (
          <div>
            <GroupLoanData/>
          </div>
        );
        case 'Personal Loan':
        return (
          <div>
            <PersanalLoanData/>
          </div>
        );
        case 'Loan Against Vehicle':
        return (
          <div>
            <VehiLoanData/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center w-full mt-5">
        <div className="flex-wrap justify-between max-w-[1200px] w-full items-center px-4">
      {/* Tabs */}
      <div className="w-full items-center font-roboto tracking-[2px] dark:bg-gray-700 bg-[#fff] border-[1px] border-gray-300 dark:border-0 shadow-xl rounded-[7px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-[16px] font-[700] font-roboto transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-[#4ddc0aa3] text-gray-500 dark:text-[#fff] rounded-md'
                : 'border-transparent dark:text-white dark:hover:text-gray-500 rounded-md text-gray-500 hover:text-gray-500 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="my-4">
        {renderTabContent()}
      </div>
    </div>
    </div>
  );
};

export default NavTabs;
