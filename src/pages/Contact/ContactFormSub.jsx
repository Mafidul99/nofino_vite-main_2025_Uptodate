import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import GoogleMapIndex from './GoogleMapIndex';
import { toast } from 'react-toastify';




export const ContactFormSub = () => {
  // const [notification, setNotification] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', subject: '', message: '' });
  
  
   useEffect(() => {
    
  }, [formData]);

  const [isPanding, setIsPanding] = useState(false);

  const contForm = useRef();

  const contSendEmail = async (e) => {
    e.preventDefault();
    setIsPanding(true)
    await new Promise((res) => setTimeout(res, 5000));
    setIsPanding(false);
    setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });


      const myServiceId = (import.meta.env.VITE_APP_MY_SERVICE_ID);
      const myTemplateId = (import.meta.env.VITE_APP_MY_TEMPLATE_ID);
      const myPublicKey = { publicKey: (import.meta.env.VITE_APP_MY_PUBLIC_KEY)};

    emailjs.sendForm(myServiceId, myTemplateId, contForm.current, myPublicKey).then(
      () => {
        // setNotification("Your Contact form has been submitted successfully!");
        // setTimeout(() => {
        //   setNotification("");
        // }, 9000);
        toast.success("Your Contact form has been submitted successfully!");
        contForm.current.reset();


      }, (error) => {
        console.log(error.text);
        toast.error("An error occurred while submitting your Contact form.");

        // setNotification("An error occurred while submitting your Contact form.");
        // setTimeout(() => {
        //   setNotification("");
        // }, 9000);

      });
  };




  return (
    <>
      <div className="relative flex justify-center items-top ">
        <div className="max-w-[1200px] w-full mx-auto px-4 py-3">
          <div className="mt-5 overflow-hidden">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-2 lg:gap-2 md:grid-cols-1 sm:grid-cols-1">
              <div className="p-3 bg-[#fff] dark:bg-gray-800 shadow-md rounded-lg">
                <GoogleMapIndex />
              </div>
              <div className="border-[1.5px] shadow-md border-solid border-gray-500 rounded-lg dark:border-[#D6D6D6] bg-[#fff] dark:bg-gray-700" >
                <form method="POST" className="flex flex-col justify-center p-6" ref={contForm} onSubmit={contSendEmail}>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-1 sm:grid-cols-1">
                    <div>
                      <label htmlFor="name" className="block dark:text-[#D6D6D6] text-[14px] font-roboto font-bold leading-6 text-gray-900">Your Full Name</label>
                      <div className="mt-2.5">
                        <input type="text"
                          id="name"
                          name="name"
                          className="block w-full rounded-md font-roboto px-3.5 py-2 bg-gray-100 border-[1px] border-gray-400
                           text-gray-700 shadow-sm dark:bg-[#fff] dark:text-gray-800 font-[500]
                             sm:text-sm sm:leading-6" required autoComplete="off" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-sm dark:text-[#D6D6D6] text-[14px] font-roboto font-bold leading-6 text-gray-900">Mobile Number</label>
                      <div className="mt-2.5">
                        <input type="number"
                          id="mobile"
                          name="mobile"
                          className="block w-full rounded-md font-roboto px-3.5 py-2 bg-gray-100 border-[1px] border-gray-400
                           text-gray-700 shadow-sm dark:bg-[#fff] dark:text-gray-800 font-[500]
                             sm:text-sm sm:leading-6" required autoComplete="off" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm dark:text-[#D6D6D6] text-[14px] font-roboto font-bold leading-6 text-gray-900">Your Email ID</label>
                      <div className="mt-2.5">
                        <input type="email"
                          id="email"
                          name="email"
                          className="block w-full rounded-md font-roboto px-3.5 py-2 bg-gray-100 border-[1px] border-gray-400
                           text-gray-700 shadow-sm dark:bg-[#fff] dark:text-gray-800 font-[500]
                             sm:text-sm sm:leading-6" required autoComplete="off" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm dark:text-[#D6D6D6] text-[14px] font-roboto font-bold leading-6 text-gray-900">Subject</label>
                      <div className="mt-2.5">
                        <input type="text"
                          id="subject"
                          name="subject"
                          className="block w-full rounded-md font-roboto px-3.5 py-2 bg-gray-100 border-[1px] border-gray-400
                           text-gray-700 shadow-sm dark:bg-[#fff] dark:text-gray-800 font-[500]
                             sm:text-sm sm:leading-6" required autoComplete="off" />
                      </div>
                    </div>

                    <div className="col-span-2 md:col-span-1 sm:col-span-1">
                      <label htmlFor="message" className="block text-sm dark:text-[#D6D6D6] text-[14px] font-roboto font-bold leading-6 text-gray-900">Message</label>
                      <div className="mt-2.5">
                        <textarea rows="4"
                          id="message"
                          name="message"
                          className="block w-full rounded-md font-roboto px-3.5 py-2 bg-gray-100 border-[1px] border-gray-400
                           text-gray-700 shadow-sm dark:bg-[#fff] dark:text-gray-800 font-[500]
                             sm:text-sm sm:leading-6" required autoComplete="off"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-8">
                    <button type="submit" className="text-white bg-green-500 dark:bg-green-500 w-full capitalize
                          shadow-md  dark:shadow-md font-[700] rounded-md text-[16px] px-3 py-2 text-center"
                      disabled={isPanding} >
                      {isPanding ? "submitting..." : "send message"}
                    </button>
                  </div>
                  {/* <div className="relative top-[-15px] flex items-center">
                  {
                    notification && (
                      <div className="absolute px-3 py-3 mb-2 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        <span className="font-[16px]">{notification}</span>
                      </div>
                    )
                  }
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
}
export default ContactFormSub;


