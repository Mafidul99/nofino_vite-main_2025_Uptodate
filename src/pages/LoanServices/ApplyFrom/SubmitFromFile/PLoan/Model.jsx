import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Model = ({setNotification}) => {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    const formData = useRef();

  const formSubmit = (e) =>{
      e.preventDefault();

      const serviceID = 'service_qbx1dqs';
      const templateID = 'template_nqnt1ed';
      const templateParams = {
        loanAmount: e.target['loan-amount'].value,
        monthlyIncome: e.target['monthly-income'].value,
        purposeOfLoan: e.target['purpose-of-loan'].value,
        loanMonths: e.target['loan-months'].value,
        userName: e.target['user-name'].value,
        fatherName: e.target['father-name'].value,
        motherName: e.target['mother-name'].value,
        email: e.target['email'].value,
        phone: e.target['phone'].value,
        dob: e.target['dob'].value,
        pan: e.target['pan'].value,
        aadhaar: e.target['aadhaar'].value,
        voter: e.target['voter'].value,
        gender: e.target['gender'].value,
        category: e.target['category'].value,
        maritalStatus: e.target['marital-status'].value,
        qualification: e.target['qualification'].value,
        spouseName: e.target['spouse-name'].value,
        accountNumber: e.target['account-number'].value,
        ifsc: e.target['ifsc'].value,
        branch: e.target['branch'].value,
        address: e.target['address'].value,
        street: e.target['street'].value,
        district: e.target['district'].value,
        city: e.target['city'].value,
        state: e.target['state'].value,
        zip: e.target['zip'].value,

        filePan: e.target['file-pan'].files[0],
        fileAadhaar: e.target['file-aadhaar'].files[0],
        fileVoter: e.target['file-voter'].files[0],
        accountProof: e.target['file-bank-pass'].files[0],
        fileLicense: e.target['file-license'].files[0],
        fileShopPhoto: e.target['file-shop-photo'].files[0],
        filePhoto: e.target['file-photo'].files[0],
        fileSignature: e.target['file-signature'].files[0],

      };
      const options = {
        publicKey: 'ctWlcd_EJZ66ACCLS',
      };

      emailjs.sendForm(serviceID, templateID, templateParams, formData.current, options).then(
        () => {
          setNotification("Your form has been submitted successfully!");
          setTimeout(() => {
            setNotification("");
          }, 3000);
          formData.current.reset();
      }, (error) => {
          console.log(error.text);
          setNotification("An error occurred while submitting your form.");
          setTimeout(() => {
            setNotification("");
          }, 3000);
      });    
     
  }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <div className="border-[1px] dark:border-[#D6D6D6] border-green-300 border-dashed rounded-md p-4">
                            {/* <h2 className="text-2xl font-bold mb-4">Loan Details</h2> */}
                            <div className="grid grid-cols-2 gap-4 mb-3">
                                <div className="flex flex-col">
                                    <label htmlFor="loan-amount" className="mb-2 items-center justify-center">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Loan Amount</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                        <span className='text-[12px] font-[700] text-red-500 dark:text-[#D6D6D6]'> Rs. 20000/- & 50000/-</span>
                                    </label>
                                    <input type="number" id="loan-amount" name="loan-amount" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder='Enter Loan Amount' required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="monthly-income" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Monthly Income *</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="number" id="monthly-income" name="monthly-income" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder='Enter Monthly Income' required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="income" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Purpose of Loan</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <select name="loan-purpose" id="loan-purpose" className="border border-gray-300 p-2 rounded dark:bg-gray-600 dark:text-[#fff]
                    focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400 text-[15px]
                    dark:focus:ring-green-500 dark:focus:border-green-500 fromSelect" required autoComplete="off">
                                        <option value="">Select Purpose</option>
                                        <option value="education">Education</option>
                                        <option value="business">Business</option>
                                        <option value="personal">Personal</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="loanMonths" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Loan Months</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <select name="loan-months" id="loan-months" className="border border-gray-300 p-2 rounded dark:bg-gray-600 dark:text-[#fff]
                        focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400 text-[15px]
                        dark:focus:ring-green-500 dark:focus:border-green-500" required autoComplete="off">
                                        <option value="">Select Loan Months</option>
                                        <option value="6 Months">6 Months</option>
                                        <option value="12 Months">12 Months</option>
                                        <option value="24 Months">24 Months</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button onClick={nextStep} className="bg-green-500 text-white px-4 py-2 shadow-md rounded">Next</button>
                        </div>                        
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="border-[1px] dark:border-[#D6D6D6] border-green-300 border-dashed rounded-md p-4">
                            {/* <h2 className="text-2xl font-bold mb-4">Step 2: Address Details</h2> */}
                            <div className="grid grid-cols-3 gap-4 mt-2">
                                <div className="flex flex-col">
                                    <label htmlFor="user-Name" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Your Name</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="user-name" name="user-name" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder='Enter Your Name' required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="fname" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Father Name</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="fname" name="fname" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder='Enter Father Name' required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="mname" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Mother Name</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="mname" name="mname" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder='Enter Mother Name' required autoComplete="off" />
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4 mt-2 mb-4">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Email Address</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="email" id="email" name="email" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder='Enter Email' required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Mobile Number</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="tel" id="phone" name="phone" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder='Enter Mobile Number' required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="dob" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Date of Birth</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="date" id="dob" name="dob" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder='Enter Date of Birth' required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="pan" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Pan Card Number</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="pan" name="pan" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder='Enter Pan Card Number' required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="aadhaar" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Aadhaar Card Number</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="number" id="aadhaar" name="aadhaar" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder='Enter Aadhaar Card Number' required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="voter" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Voter Card Number</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="voter" name="voter" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder='Enter Voter Card Number' required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="gender" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Gender</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <select id="gender" name="gender" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]
                            focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400
                            dark:focus:ring-green-500 dark:focus:border-green-500" required autoComplete="off">
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="category" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Category</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <select id="category" name="category" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]
                        focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400
                            dark:focus:ring-green-500 dark:focus:border-green-500" required autoComplete="off">
                                        <option value="">Select Category</option>
                                        <option value="general">General</option>
                                        <option value="obc">OBC</option>
                                        <option value="sc">SC</option>
                                        <option value="st">ST</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="marital-status" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Marital Status</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <select id="marital-status" name="marital-status" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]
                            focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400
                            dark:focus:ring-green-500 dark:focus:border-green-500" required autoComplete="off">
                                        <option value="">Select Marital Status</option>
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                        <option value="divorced">Divorced</option>
                                        <option value="widowed">Widowed</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="qualification" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Qualification</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <select id="qualification" name="qualification" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]
                            focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400
                            dark:focus:ring-green-500 dark:focus:border-green-500" required autoComplete="off">
                                        <option value="">Select Qualification</option>
                                        <option value="graduate">Graduate</option>
                                        <option value="postgraduate">Postgraduate</option>
                                        <option value="phd">PhD</option>
                                    </select>
                                </div>
                                <div className="flex flex-col col-span-2">
                                    <label htmlFor="spouse-name" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Spose Name</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="spouse-name" name="spouse-name" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder="Enter Spouse Name" required autoComplete="off" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 shadow-md rounded">Previous</button>
                            <button onClick={nextStep} className="bg-green-500 text-white px-4 py-2 shadow-md rounded">Next</button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <div className="border-[1px] dark:border-[#D6D6D6] border-green-300 border-dashed rounded-md p-4">
                            {/* <h2 className="text-2xl font-bold mb-4">Step 2: Address Details</h2> */}
                            <div className="grid grid-cols-3 gap-4 mt-2">
                                <div className="flex flex-col">
                                    <label htmlFor="account-number" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Account Number</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="account-number" name="account-number" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder="Enter Account Number" required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="ifsc" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>IFSC Code</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="ifsc" name="ifsc" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder="Enter IFSC Code" required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="branch" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Branch Name</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="branch" name="branch" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder="Enter Branch Name" required autoComplete="off" />
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4 mt-4 mb-4">
                                <div className="flex flex-col col-span-2">
                                    <label htmlFor="address" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>House No/Name</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="address" name="address" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder="Enter Address" required autoComplete="off" />
                                </div>
                                <div className="flex flex-col col-span-2">
                                    <label htmlFor="street" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Street</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="street" name="street" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder="Enter Street" required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="district" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>District</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="district" name="district" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder="Enter District" required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="city" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>City</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="text" id="city" name="city" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder="Enter City" required autoComplete="off" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="state" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>State</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <select name="state" id="state" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]
                            focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400
                            dark:focus:ring-green-500 dark:focus:border-green-500" required autoComplete="off">
                                        <option value="">Select State</option>
                                        <option value="CA">California</option>
                                        <option value="TX">Texas</option>
                                        <option value="NY">New York</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="zip" className="mb-2">
                                        <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Zip Code</span>
                                        <span className='text-red-500 text-[18px]'> * </span>
                                    </label>
                                    <input type="number" id="zip" name="zip" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
                                        placeholder="Enter Zip Code" required autoComplete="off" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 shadow-md rounded">Previous</button>
                            <button onClick={nextStep} className="bg-green-500 text-white px-4 py-2 shadow-md rounded">Next</button>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <div className="border-[1px] dark:border-[#D6D6D6] border-green-300 border-dashed rounded-md p-4">
                        {/* <h2 className="text-2xl font-bold mb-4">Step 3: Confirmation</h2> */}
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            <div className="flex flex-col">
                                <label htmlFor="file-pan" className="mb-2">
                                    <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Pan Card</span>
                                    <span className='text-red-500 text-[18px]'> * </span>
                                </label>
                                <input type="file" id="file-pan" name="file-pan" className="border border-gray-300 p-2
                                    rounded dark:bg-gray-600 dark:text-[#fff]" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="file-aadhar" className="mb-2">
                                    <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Aadhaar Card</span>
                                    <span className='text-red-500 text-[18px]'> * </span>
                                </label>
                                <input type="file" id="file-aadhar" name="file-aadhar" className="border border-gray-300 p-2 rounded dark:bg-gray-600 dark:text-[#fff]" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="file-voter" className="mb-2">
                                    <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Voter Card</span>
                                    <span className='text-red-500 text-[18px]'> * </span>
                                </label>
                                <input type="file" id="file-voter" name="file-voter" className="border border-gray-300 p-2 rounded dark:bg-gray-600 dark:text-[#fff]" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="file-bank-pass" className="mb-2">
                                    <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Bank Passbook / Statement</span>
                                    <span className='text-red-500 text-[18px]'> * </span>
                                </label>
                                <input type="file" id="file-bank-pass" name="file-bank-pass" className="border border-gray-300 p-2 rounded dark:bg-gray-600 dark:text-[#fff]" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="file-license" className="mb-2">
                                    <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Trade License / Business Proof (if applicable)</span>
                                    <span className='text-red-500 text-[18px]'> * </span>
                                </label>
                                <input type="file" id="file-license" name="file-license" className="border border-gray-300 p-2 rounded dark:bg-gray-600 dark:text-[#fff]" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="file-shop-photo" className="mb-2">
                                    <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Shop Photo / Office Photo</span>
                                    <span className='text-red-500 text-[18px]'> * </span>
                                </label>
                                <input type="file" id="file-shop-photo" name="file-shop-photo" className="border border-gray-300 p-2 rounded dark:bg-gray-600 dark:text-[#fff]" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="file-photo" className="mb-2">
                                    <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Your Photo</span>
                                    <span className='text-red-500 text-[18px]'> * </span>
                                </label>
                                <input type="file" id="file-photo" name="file-photo" className="border border-gray-300 p-2 rounded dark:bg-gray-600 dark:text-[#fff]" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="file-signature" className="mb-2">
                                    <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Your Signature</span>
                                    <span className='text-red-500 text-[18px]'> * </span>
                                </label>
                                <input type="file" id="file-signature" name="file-signature" className="border border-gray-300 p-2 rounded dark:bg-gray-600 dark:text-[#fff]" required />
                            </div>

                        </div>
                        <div className="grid grid-cols-1 gap-4 mt-4">
                        <div className="flex flex-col justify-start mb-2">
                            <input type="checkbox" id="declaration" name="declaration" className="inline mb-2 border border-gray-300 p-2 rounded w-6 h-6" required autoComplete="off"/>
                            <span className='text-[15px] font-[500] dark:text-[#D6D6D6] inline-block'> I hereby declare that all the information given above is true and correct to the best of my knowledge. All the information shared in the Loan request is correct, and I take full responsibility for its correctness. I solemnly declare that the information in this Loan request is true to the best of my knowledge and belief.</span>
                        </div>
                        </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 shadow-md rounded">Previous</button>
                            <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500
                                to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none rounded
                                focus:ring-green-300 dark:focus:ring-green-800 shadow-md shadow-green-500/50 dark:shadow-md
                                dark:shadow-green-800/80 font-medium  text-[16px] px-4 py-2">
                                    Submit
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="items-center w-full mt-[30px] mb-[40px] relative bg-[#f8f8f8] dark:bg-gray-700 p-4 py-4 rounded-md shadow-md">
                <h3 className="text-[27px] font-roboto font-[700] text-green-600 text-center uppercase underline">
                        Business Loan Application Form
                </h3>
                <p className='text-red-500 text-center text-[15px] font-roboto font-[400] mb-3'>(Star Mark is Mandatory)</p>
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4 mb-6">
                <div className={`w-1/5 text-center ${currentStep >= 1 ? 'text-[15px] font-roboto inline-block py-1 px-1 rounded-full text-green-600 bg-green-200' : 'text-gray-400'}`}>Loan Details</div>
                <div className={`w-1/5 text-center ${currentStep >= 2 ? 'text-[15px] font-roboto inline-block py-1 px-1 rounded-full text-green-600 bg-green-200' : 'text-gray-400'}`}>Personal Details</div>
                <div className={`w-1/5 text-center ${currentStep >= 3 ? 'text-[15px] font-roboto inline-block py-1 px-1 rounded-full text-green-600 bg-green-200' : 'text-gray-400'}`}>Account/ Address Details</div>
                <div className={`w-1/5 text-center ${currentStep >= 4 ? 'text-[15px] font-roboto inline-block py-1 px-1 rounded-full text-green-600 bg-green-200' : 'text-gray-400'}`}>Documents Upload</div>

            </div>
                {/* <hr className='my-3 border-green-300 dark:border-[#f8f8f8]' /> */}
            <form enctype="multipart/form-data" method="post" onsubmit={formSubmit} ref={formData}>
                {renderStep()}
            </form>
        </div>
    );
};

export default Model;