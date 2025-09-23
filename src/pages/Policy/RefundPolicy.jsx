import React from 'react'

const RefundPolicy = () => {
  return (
    <div className='flex items-center justify-center w-full '>
      <div className='max-w-[1200px] w-full items-center justify-center px-4 my-4 mx-auto'>
        <div className="w-full px-5 py-5 text-gray-800 rounded-md bg-slate-100 dark:bg-gray-700 dark:text-white">
          <h1 className="items-center mb-6 text-3xl font-bold text-center underline uppercase">Refund Policy</h1>
          <p className="mb-4">
            This Refund Policy outlines the rules regarding refunds for services provided by [Your Bank Name].
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Eligibility for Refunds</h2>
          <p className="mb-4">
            Refunds may be issued for duplicate payments or erroneous transactions, subject to review and approval.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-semibold">2. Processing Time</h2>
          <p className="mb-4">
            Approved refunds will be processed within 7–14 business days to the original payment method.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-semibold">3. Non-Refundable Services</h2>
          <p className="mb-4">
            Certain services (such as account maintenance fees or wire transfers) are non-refundable.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-semibold">4. Contact</h2>
          <p>
            To request a refund, please contact our support team at <a href="mailto:support@examplebank.com" className="text-blue-600 underline">support@examplebank.com</a>.
          </p>

          <p className="mt-8 text-sm text-gray-500">Last Updated: September 23, 2025</p>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy;