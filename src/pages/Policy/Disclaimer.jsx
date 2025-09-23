import React from 'react'

const Disclaimer = () => {
  return (
    <div className='flex items-center justify-center w-full '>
      <div className='max-w-[1200px] w-full items-center justify-center px-4 my-4 mx-auto'>
        <div className="w-full px-5 py-5 text-gray-800 rounded-md bg-slate-100 dark:bg-gray-700 dark:text-white">
          <h1 className="items-center mb-6 text-3xl font-bold text-center underline uppercase">Disclaimer</h1>

          <p className="mb-4">
            The information provided on this website is for general informational purposes only and does not constitute financial, legal, or professional advice. [Your Bank Name] does not guarantee the accuracy, completeness, or usefulness of any information.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-semibold">No Financial Advice</h2>
          <p className="mb-4">
            All services and content are provided “as is” without warranty. You should consult with a qualified financial advisor before making any banking decisions.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-semibold">Limitation of Liability</h2>
          <p className="mb-4">
            [Your Bank Name] will not be liable for any loss or damage including indirect or consequential loss arising out of or in connection with the use of this website or services.
          </p>

          <p className="mt-8 text-sm text-gray-500">Last Updated: September 23, 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Disclaimer;