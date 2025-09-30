import { useState, useRef, useEffect } from "react";
import { Modal, ModalBody, Button } from "react-bootstrap";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import Loader from "../../../../../components/Layouts/Loader";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


// import { IoWarningOutline } from "react-icons/io5";

const SubmitDialog = () => {
  const [formData, setFormData] = useState({      
      country: '',
      region: '',
    });
  const [isPending, setIsPending] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [isPanding, setIsPanding] = useState(false);

  const formDataRef = useRef();
  const [attachments, setAttachments] = useState([]);

  const handleAttachments = (e) => {
    setAttachments(Array.from(e.target.files));
  };

  const handleCountryChange = (val) => {
    setFormData((prev) => ({ ...prev, country: val, region: '' }));
  };

  const handleRegionChange = (val) => {
    setFormData((prev) => ({ ...prev, region: val }));
  };

  const convertFilesToBase64 = async (files) => {
    const promises = files.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({ base64: reader.result, name: file.name });
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });
    return Promise.all(promises);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsPanding(true)
    await new Promise((res) => setTimeout(res, 5000));
    setIsPanding(false);

    try {
      const base64Files = await convertFilesToBase64(attachments);

      const templateParams = {
        loan_amount: formDataRef.current.loan_amount.value,
        monthly_income: formDataRef.current.monthly_income.value,
        purpose_loan: formDataRef.current.purpose_loan.value,
        loan_months: formDataRef.current.loan_months.value,
        user_name: formDataRef.current.user_name.value,
        father_name: formDataRef.current.father_name.value,
        mother_name: formDataRef.current.mother_name.value,

        email: formDataRef.current.email.value,
        phone: formDataRef.current.phone.value,
        dob: formDataRef.current.dob.value,
        user_pan: formDataRef.current.user_pan.value,
        user_aadhaar: formDataRef.current.user_aadhaar.value,
        user_voter: formDataRef.current.user_voter.value,
        gender: formDataRef.current.gender.value,
        category: formDataRef.current.category.value,
        marital_status: formDataRef.current.marital_status.value,
        qualification: formDataRef.current.qualification.value,
        spouse_name: formDataRef.current.spouse_name.value,
        account_number: formDataRef.current.account_number.value,
        ifsc: formDataRef.current.ifsc.value,
        branch: formDataRef.current.branch.value,
        address: formDataRef.current.address.value,
        street: formDataRef.current.street.value,
        district: formDataRef.current.district.value,
        city: formDataRef.current.city.value,
        country: formDataRef.current.country.value,
        region: formDataRef.current.region.value,
        pin_code: formDataRef.current.pin_code.value,
        declaration: formDataRef.current.declaration.value,


        // Add support for up to 2 attachments, extend as needed
        attachment1: base64Files[10000000]?.base64 || '',
        attachment1_name: base64Files[0]?.name || '',
        attachment2: base64Files[100000000]?.base64 || '',
        attachment2_name: base64Files[1]?.name || '',
        attachment3: base64Files[100000000]?.base64 || '',
        attachment3_name: base64Files[1]?.name || '',
        attachment4: base64Files[100000000]?.base64 || '',
        attachment4_name: base64Files[1]?.name || '',
        attachment5: base64Files[100000000]?.base64 || '',
        attachment5_name: base64Files[1]?.name || '',
        attachment6: base64Files[100000000]?.base64 || '',
        attachment6_name: base64Files[1]?.name || '',
        attachment7: base64Files[100000000]?.base64 || '',
        attachment7_name: base64Files[1]?.name || '',
        attachment8: base64Files[100000000]?.base64 || '',
        attachment8_name: base64Files[1]?.name || '',
      };

      const result = await emailjs.send(
        import.meta.env.VITE_APP_MY_SERVICE_ID,
        import.meta.env.VITE_APP_MY_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_MY_PUBLIC_KEY
      );

      console.log('Email successfully sent:', result.text);
      toast.success("Form has been submitted successfully!");

      // ✅ Reset form and attachments
      formDataRef.current.reset();
      setAttachments([]);
    } catch (err) {
      console.error('Failed to send email:', err);
      toast.error("An error occurred while submitting your form.");
    }
  };

  // const formSubmit = (e) =>{
  //     e.preventDefault(); 
  //     const myServiceId = process.env.REACT_APP_MY_SERVICE_ID;
  //     const myTemplateId = process.env.REACT_APP_MY_TEMPLATE_ID;
  //     const myPublicKey = { publicKey: process.env.REACT_APP_MY_PUBLIC_KEY };
  //     emailjs.sendForm(myServiceId, myTemplateId, formData.current, myPublicKey).then(
  //       () => {
  //         toast.success("Form has been submitted successfully!");
  //         formData.current.reset();
  //     }, (error) => {
  //         console.log(error.text);
  //         toast.error("An error occurred while submitting your form.");
  //     });    

  // }

  useEffect(() => {
    const loadApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsPending(false);
    };

    loadApp();
  }, []);
  if (isPending) {
    return <Loader />;
  }

  return (
    <>
      <form ref={formDataRef} onSubmit={handleFormSubmit}
        className="bg-[#f8f8f8] dark:bg-gray-700 p-4 py-5 rounded-md shadow-md">
        <h3 className="text-[30px] font-roboto font-[700] text-green-600 text-center uppercase underline">
          Personal Loan Application Form</h3>
        <p className='text-red-500 text-center text-[18px] font-roboto font-[400]'>(Star Mark is Mandatory)</p>
        <h2 className='text-[20px] font-[700] dark:text-[#D6D6D6] py-3 underline'>Loan Details</h2>
        <div className="grid grid-cols-4 gap-4 lg:grid-cols-2 md:grid-cols-1 ">
          <div className="flex flex-col">
            <label htmlFor="loan_amount" className="items-center justify-center mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Loan Amount</span>
              <span className='text-red-500 text-[18px]'> * </span>
              <span className='text-[12px] font-[700] text-red-500 dark:text-[#D6D6D6]'> Rs. 20000/- & 50000/-</span>
            </label>
            <input type="number" name="loan_amount" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder='Enter Loan Amount' required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="monthly_income" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Monthly Income *</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="number" name="monthly_income" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder='Enter Monthly Income' required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="purpose_loan" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Purpose of Loan</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <select name="purpose_loan" className="border border-gray-300 p-2 rounded dark:bg-gray-600 dark:text-[#fff]
                focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400 text-[15px]
                  dark:focus:ring-green-500 dark:focus:border-green-500 fromSelect" required >
              <option value="">Select Purpose</option>
              <option value="education">Education</option>
              <option value="business">Business</option>
              <option value="personal">Personal</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="loan_months" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Loan Months</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <select name="loan_months" className="border border-gray-300 p-2 rounded dark:bg-gray-600 dark:text-[#fff]
                    focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400 text-[15px]
                      dark:focus:ring-green-500 dark:focus:border-green-500" required >
              <option value="">Select Loan Months</option>
              <option value="6 Months">6 Months</option>
              <option value="12 Months">12 Months</option>
              <option value="24 Months">24 Months</option>
            </select>
          </div>
        </div>
        <h2 className='text-[20px] font-[700] dark:text-[#D6D6D6] py-3 underline mt-3'>Personal Details</h2>
        <div className="grid grid-cols-3 gap-4 mt-2 lg:grid-cols-2 md:grid-cols-1">
          <div className="flex flex-col">
            <label htmlFor="user_name" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Your Name</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="text" name="user_name" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder='Enter Your Name' required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="father_name" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Father Name</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="text" name="father_name" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder='Enter Father Name' required />
          </div>
          <div className="flex flex-col lg:col-span-2 md:col-span-1">
            <label htmlFor="mother_name" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Mother Name</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="text" name="mother_name" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder='Enter Mother Name' required />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-2 lg:grid-cols-2 md:grid-cols-1">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Email Address</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="email" name="email" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder='Enter Email' required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Mobile Number</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="number" name="phone" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder='Enter Mobile Number' required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dob" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Date of Birth</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="date" name="dob" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder='Enter Date of Birth' required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="user_pan" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Pan Card Number</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="text" name="user_pan" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder='Enter Pan Card Number' required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="user_aadhaar" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Aadhaar Card Number</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="number" name="user_aadhaar" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder='Enter Aadhaar Card Number' required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="user_voter" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Voter Card Number</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="text" name="user_voter" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder='Enter Voter Card Number' required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Gender</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <select name="gender" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]
                        focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400
                          dark:focus:ring-green-500 dark:focus:border-green-500" required >
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
            <select name="category" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]
                       focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400
                        dark:focus:ring-green-500 dark:focus:border-green-500" required >
              <option value="">Select Category</option>
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="marital_status" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Marital Status</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <select name="marital_status" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]
                        focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400
                        dark:focus:ring-green-500 dark:focus:border-green-500" required >
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
            <select name="qualification" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]
                        focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400
                          dark:focus:ring-green-500 dark:focus:border-green-500" required >
              <option value="">Select Qualification</option>
              <option value="graduate">Graduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="phd">PhD</option>
            </select>
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label htmlFor="spouse_name" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Spose Name</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="text" name="spouse_name" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder="Enter Spouse Name" required />
          </div>
        </div>
        <h2 className='text-[20px] font-[700] dark:text-[#D6D6D6] py-3 underline mt-3'>Account Details</h2>
        <div className="grid grid-cols-3 gap-4 mt-2 lg:grid-cols-2 md:grid-cols-1">
          <div className="flex flex-col">
            <label htmlFor="account_number" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Account Number</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="number" name="account_number" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder="Enter Account Number" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="ifsc" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>IFSC Code</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="text" name="ifsc" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder="Enter IFSC Code" required />
          </div>
          <div className="flex flex-col lg:col-span-2 md:col-span-1">
            <label htmlFor="branch" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Branch Name</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="text" name="branch" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder="Enter Branch Name" required />
          </div>
        </div>
        <h2 className='text-[20px] font-[700] dark:text-[#D6D6D6] py-3 underline mt-3'>Address Details</h2>
        <div className="grid grid-cols-4 gap-4 mt-2 lg:grid-cols-2 md:grid-cols-1">
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label htmlFor="address" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>House No/Name</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="text" name="address" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder="Enter Address" required />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label htmlFor="street" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Street</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="text" name="street" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder="Enter Street" required />
          </div>
          {/* <div className="flex flex-col">
            <label htmlFor="district" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>District</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="text" name="district" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder="Enter District" required />
          </div> */}
          <div className="flex flex-col">
            <label htmlFor="city" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>City</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="text" name="city" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder="Enter City" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Country</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            {/* <select name="state" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]
                         focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400
                          dark:focus:ring-green-500 dark:focus:border-green-500" required >
              <option value="">Select State</option>
              <option value="CA">California</option>
              <option value="TX">Texas</option>
              <option value="NY">New York</option>
            </select> */}
            <CountryDropdown
              value={formData.country}
               name="country"
              onChange={handleCountryChange}
              className="w-full px-3 py-2 bg-[#fff] border rounded dark:bg-gray-600 dark:text-white"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>State</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            {/* <select name="state" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]
                         focus:ring-green-500 focus:border-green-500 block w-full  dark:border-gray-600 dark:placeholder-gray-400
                          dark:focus:ring-green-500 dark:focus:border-green-500" required >
              <option value="">Select State</option>
              <option value="CA">California</option>
              <option value="TX">Texas</option>
              <option value="NY">New York</option>
            </select> */}
            <RegionDropdown
            country={formData.country}
              name="region"
              value={formData.region}
              onChange={handleRegionChange}
              className="w-full px-3 py-2 bg-[#fff] border rounded dark:bg-gray-600 dark:text-white"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pin_code" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Pin Code</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="number" name="pin_code" className="border border-gray-300 p-2 text-[15px] rounded dark:bg-gray-600 dark:text-[#fff]"
              placeholder="Enter Pin Code" required />
          </div>
        </div>
        <h2 className='text-[20px] font-[700] dark:text-[#D6D6D6] py-3 underline mt-3'>Documents Upload</h2>
        <div className="grid grid-cols-3 gap-4 mt-2 lg:grid-cols-2 md:grid-cols-1">
          <div className="flex flex-col">
            <label htmlFor="attachmentsPan" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Pan Card</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="file" name="attachmentsPan" className="border border-gray-300 p-2
                   rounded dark:bg-gray-600 dark:text-[#fff]" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="attachmentsAadhar" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Aadhaar Card</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="file" name="attachmentsAadhar" className="border border-gray-300 p-2 rounded dark:bg-gray-600
             dark:text-[#fff]" required onChange={handleAttachments} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="attachmentsVoter" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Voter Card</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="file" name="attachmentsVoter" className="border border-gray-300 p-2 rounded dark:bg-gray-600
             dark:text-[#fff]" required onChange={handleAttachments} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="attachmentsBankPass" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Bank Passbook / Statement</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="file" name="attachmentsBankPass" className="border border-gray-300 p-2 rounded dark:bg-gray-600
             dark:text-[#fff]" required onChange={handleAttachments} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="attachmentsLicense" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Trade License / Business Proof (if applicable)</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="file" name="attachmentsLicense" className="border border-gray-300 p-2 rounded dark:bg-gray-600
             dark:text-[#fff]" required onChange={handleAttachments} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="attachmentsShopPhoto" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Shop Photo / Office Photo</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="file" name="attachmentsShopPhoto" className="border border-gray-300 p-2 rounded dark:bg-gray-600
             dark:text-[#fff]" required onChange={handleAttachments} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="attachmentsPhoto" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Your Photo</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="file" name="attachmentsPhoto" className="border border-gray-300 p-2 rounded dark:bg-gray-600
             dark:text-[#fff]" required onChange={handleAttachments} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="attachmentsSignature" className="mb-2">
              <span className='text-[15px] font-[500] dark:text-[#D6D6D6]'>Your Signature</span>
              <span className='text-red-500 text-[18px]'> * </span>
            </label>
            <input type="file" name="attachmentsSignature" className="border border-gray-300 p-2 rounded dark:bg-gray-600
             dark:text-[#fff]" required onChange={handleAttachments} />
          </div>

        </div>
        <h2 className='text-[20px] font-[700] dark:text-[#D6D6D6] py-3 underline mt-3'>Declaration
          <span className='text-red-500 text-[18px]'> * </span>
        </h2>
        <div className="grid grid-cols-1 gap-4 mt-2">
          <div className="flex flex-col justify-start mb-2">
            <input type="checkbox" name="declaration" className="inline w-6 h-6 p-2 mb-2 border border-gray-300 rounded" required />
            <span className='text-[15px] font-[500] dark:text-[#D6D6D6] inline-block'>
              I hereby declare that all the information given above is true and correct to the best of my knowledge.
              All the information shared in the Loan request is correct, and I take full responsibility for its correctness.
              I solemnly declare that the information in this Loan request is true to the best of my knowledge and belief.</span>
          </div>
        </div>
        <div className="justify-center w-full mt-4 text-center item-center justify-items-center">
          <div className="flex flex-col">
            <button type="submit" className="text-white bg-gradient-to-r from-green-500 via-green-600
                  to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                  focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg
                  dark:shadow-green-800/80 font-[700] rounded-lg text-[18px] px-3 py-3 text-center me-2.5 mb-2.5"
              disabled={isPanding} >

              {isPanding ? "submitting..." : "Save & Continue"}
            </button>

          </div>
        </div>
        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup centered className="modal fade popup-modal" id="popup-modal" tabIndex="-1" aria-hidden="true">
          {/* <Modal.Header closeButton /> */}
          <ModalBody>
            <div className="px-2 py-2 text-center">
              <HiOutlineExclamationCircle className="w-20 h-20 mx-auto mb-3 text-red-600" />
              <h3 className="mb-3 text-[20px] font-[700] text-gray-500 font-roboto">
                Are you sure you want to Submit the Form ?
              </h3>
              <div className="flex justify-center gap-4 font-roboto">
                <Button type="submit" id="submit" color="red" className="bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none
                    focus:ring-red-300 dark:focus:ring-red-800 font-[16px] rounded-lg text-sm inline-flex items-center 
                    px-3 py-2 text-center">
                  Yes, I'm sure
                </Button>
                <Button color="alternative" onClick={() => setOpenModal(false)} className="bg-gray-600 hover:bg-gray-800 focus:ring-4 
                    focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-[16px] rounded-lg text-sm inline-flex items-center 
                    px-3 py-2 text-center">
                  No, cancel
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </form>
    </>
  )
}

export default SubmitDialog;