import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='flex items-center justify-center w-full '>
      <div className='max-w-[1200px] w-full items-center justify-center px-4 my-4 mx-auto'>
        <div className="w-full px-5 py-5 text-gray-800 rounded-md bg-slate-100 dark:bg-gray-700 dark:text-white">
          <h1 className="items-center mb-6 text-3xl font-bold text-center underline uppercase">Privacy Policy</h1>
          <p className="mb-4">
            [Your Bank Name] respects your privacy and is committed to protecting your personal data. This policy outlines how we collect, use, and safeguard your information.
          </p>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Information We Collect</h2>
          <p className="mb-4">
            We may collect data such as your name, email, phone number, account details, and transaction history.
          </p>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">2. Use of Data</h2>
          <p className="mb-4">
            We use this data to process transactions, provide customer support, and comply with legal obligations.
          </p>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">3. Security</h2>
          <p className="mb-4">
            Your data is stored securely using encryption and other technical safeguards.
          </p>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">4. Third-Party Services</h2>
          <p className="mb-4">
            We do not share your data with third parties without your consent unless required by law.
          </p>
          <p className="mt-8 text-sm text-gray-500">Last Updated: September 23, 2025</p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy;