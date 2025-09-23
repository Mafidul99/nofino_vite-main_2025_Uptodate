import React from 'react'
import { Link } from 'react-router-dom';


const faqItems = [
  { q: "What is cash management?", a: "Cash management includes collecting, handling, and using cash efficiently in business operations." },
  { q: "Can I integrate this with my ERP?", a: "Yes, we support integrations with all major ERP systems." },
  { q: "Is this suitable for SMEs?", a: "Absolutely! Our solution scales for small to large enterprises." },
];

const benefits = [
  "Improve liquidity forecasting and decision making",
  "Centralized control over all accounts and entities",
  "Reduce operational costs with automation",
  "Enhanced compliance and audit trails",
];
const features = [
  { title: "Automated Reconciliation", desc: "Eliminate manual errors and accelerate your cash processing." },
  { title: "Real-Time Visibility", desc: "Monitor your cash flow and balances in real-time across all accounts." },
  { title: "Secure Transactions", desc: "Top-grade security for all transfers and cash operations." },
];

const Faq = () => {
  return (
    <>
      <div className='flex items-center justify-center w-full my-3 '>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4 py-3 '>
          <section className="w-full my-2 ">
            <h2 className="mb-8 text-3xl font-bold text-center underline dark:text-white">FAQs</h2>
            <div className="px-4 py-4 mx-auto space-y-6 rounded-md bg-gray-50 dark:bg-gray-700">
              {faqItems.map((item, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-green-500">{item.q}</h3>
                  <p className="mt-1 text-gray-600 dark:text-white">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="w-full px-6 py-16 my-2 text-center text-white bg-blue-600 rounded-md">
            <h2 className="mb-4 text-3xl font-bold">Ready to Optimize Your Cash Flow?</h2>
            <p className="mb-6 text-lg">Contact us today and streamline your treasury operations with ease.</p>
            <Link to="/contact" className="px-6 py-3 font-semibold text-gray-600 transition bg-[#fff] rounded-full hover:text-white hover:bg-green-500">
              Request a Demo
            </Link>
          </section>
          <section className="items-center w-full my-3">
            <h2 className="mb-8 text-3xl font-bold text-center underline dark:text-white">Why Choose Our Cash Management?</h2>
            <ul className="px-4 py-4 mx-auto space-y-4 text-gray-700 list-disc dark:text-white list-inside bg-[#fff] rounded-md dark:bg-gray-700">
              {benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </section>
          <section className="w-full my-3">
            <h2 className="mb-10 text-3xl font-bold text-center underline dark:text-white">Key Features</h2>
            <div className="grid grid-cols-3 gap-8 mx-auto">
              {features.map((f, i) => (
                <div key={i} className="p-6 transition bg-[#fff] dark:bg-gray-700 rounded shadow hover:shadow-lg ">
                  <h3 className="mb-2 text-xl font-semibold dark:text-white">{f.title}</h3>
                  <p className="text-gray-600 dark:text-[#ecececdc]">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Faq;