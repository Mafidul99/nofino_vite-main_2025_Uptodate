import React from 'react'
import SupportLayout from './SupportLayout';


const contactS = [
  {
    address: "Office Address / Contact No.",
    answer: {
      addr: "Mandia, mandia, barpeta, Assam- 781308",
      email: "support@example.com.",
      phone: "6002561417"
    },
  },
];

const Support = () => {
  return (
    <>
      <div className='flex items-center justify-center w-full my-3 '>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4 py-3 '>
          <div className='grid w-full grid-cols-2 gap-3'>
          <SupportLayout title="Frequently Asked Questions">
            <div className="w-full space-y-6">
              {contactS.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{faq.address}</h3>
                  <p className="text-gray-600 dark:text-[#f3f3f3e8]">
                    <strong>Address:</strong> {faq.answer.addr}</p>
                  <p className="text-gray-600 dark:text-[#f3f3f3e8]">
                    <strong>Email:</strong> {faq.answer.email}</p>
                  <p className="text-gray-600 dark:text-[#f3f3f3e8]">
                    <strong>Phone:</strong> {faq.answer.phone}</p>
                </div>
              ))}
            </div>
            {/* <div className="w-full space-y-4">
              {contactS.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{faq.address}</h3>
                  <p className="text-gray-600 dark:text-[#f3f3f3e8]">{faq.answer}</p>
                </div>
              ))}
            </div> */}
          </SupportLayout>
          <SupportLayout title="Contact Support">
            <form className="w-full space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Name</label>
                <input type="text" className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm dark:text-white dark:bg-gray-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
                <input type="email" className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm dark:text-white dark:bg-gray-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Message</label>
                <textarea rows="4" className="block w-full px-3 py-2 mt-1 border-gray-300 rounded-md shadow-sm dark:text-white dark:bg-gray-600" />
              </div>
              <button type="submit" className="items-center justify-center px-4 py-2 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Send
              </button>
            </form>
          </SupportLayout>
          </div>
        </div>
      </div>
    </>
  )
}

export default Support;