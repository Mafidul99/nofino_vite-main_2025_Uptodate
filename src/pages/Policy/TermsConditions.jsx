import React from 'react'

const TermsConditions = () => {
  return (
    <div className='flex items-center justify-center w-full '>
      <div className='max-w-[1200px] w-full items-center justify-center px-4 my-4 mx-auto'>
        <div className="w-full px-5 py-5 text-gray-800 rounded-md bg-slate-100 dark:bg-gray-700 dark:text-white">
          <h1 className="items-center mb-6 text-3xl font-bold text-center underline uppercase ">Terms & Conditions</h1>

          <p className="mb-4">
            Welcome to our website. These terms and conditions outline the rules and regulations for the use of our service.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use the site if you do not accept all of the terms stated on this page.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-semibold">2. License</h2>
          <p className="mb-4">
            Unless otherwise stated, we or our licensors own the intellectual property rights for all material on the site. All intellectual property rights are reserved.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-semibold">3. User Obligations</h2>
          <ul className="mb-4 list-disc list-inside">
            <li>You must not republish material from this site</li>
            <li>You must not sell or rent material</li>
            <li>You must not reproduce, duplicate or copy material</li>
            <li>You must not redistribute content from this website</li>
          </ul>

          <h2 className="mt-8 mb-4 text-2xl font-semibold">4. Modifications</h2>
          <p className="mb-4">
            We may revise these terms of service for our website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions.
          </p>

          <h2 className="mt-8 mb-4 text-2xl font-semibold">5. Contact</h2>
          <p>
            If you have any questions about our Terms & Conditions, please contact us at <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions;