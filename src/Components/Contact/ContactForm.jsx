import React, { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, message };
    try {
      const response = await fetch('backend.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      // Show success notification
      toast.success('Form submitted successfully!');
      // Clear the form inputs after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('There was an error!', error);
      // Show error notification
      toast.error('Form submission failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-64 bg-[#2e2b2c] p-5 absolute left-1/2 -bottom-44 -translate-x-1/2 text-white md:left-[60%] md:translate-x-0 lg:w-96 lg:p-8 lg:left-[65%] lg:-bottom-60 overflow-hidden'>
      <h2 className='font-bellefair text-base lg:text-xl'>Name</h2>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full pl-3 font-poppins py-1 lg:py-2 text-primary placeholder:text-primary border-none outline-none bg-[#3e3c3d]"
        placeholder='Your name here'
      />
      <h2 className='font-bellefair text-base lg:text-xl mt-4 lg:mt-8'>Email</h2>
      <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full pl-3 font-poppins py-1 lg:py-2 text-primary placeholder:text-primary border-none outline-none bg-[#3e3c3d]"
        placeholder='Your email here'
      />
      <h2 className='font-bellefair text-base lg:text-xl mt-4 lg:mt-8'>Message</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='w-full h-24 lg:h-36 pl-3 font-poppins py-1 text-primary placeholder:text-primary border-none outline-none bg-[#3e3c3d] resize-none'
        placeholder='Enter message here'
      />
      <button className='font-serif italic text-primary text-sm lg:text-base mt-6 lg:mt-8 w-full text-center border-b-2 border-t-2 border-primary py-1 outline-none'>
        Connect with Us ›
      </button>
      {/* Add the ToastContainer here */}
      <ToastContainer />
    </form>
  );
}

export default ContactForm;
