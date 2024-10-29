'use client'
import ClientRow from '@/app/components/admin/customerRow'
import React, { useState, useEffect } from 'react';
const page = () => {
  const [customers, setCustomers] = useState([]);
  function formatDate(dateString) {
    if (!dateString) return "N/A"; 
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  const handleRowClick = (customerId) => {
    console.log('Clicked customer ID:', customerId);
    alert('Clicked customer ID: ' + customerId)
  };

  useEffect(() => {
    fetch('/api/customers')
      .then((response) => response.json())
      .then((data) => setCustomers(data.results))
      .catch((error) => console.error('Error fetching customers:', error));
  }, []);

  return (
    <div className='mx-16 mt-10 pb-6'>
        <div className='text-normal-green text-5xl italic font-bold'>Clients</div>
        <div className='flex items-center space-x-4 mt-5'>
        <svg width="22" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="7" width="16" height="2" fill="#8A9E79"/>
        <rect x="8" y="11" width="8" height="2" fill="#8A9E79"/>
        <rect x="10" y="15" width="4" height="2" fill="#8A9E79"/>
        </svg>
        <div className='flex items-center border border-normal-green rounded-md px-3 py-2 hover:border-green-700 hover:shadow-lg focus-within:border-green-700'>
            <input type="text" placeholder="Search" className='text-normal-green w-[236px] outline-none bg-white' />
            <svg className='text-normal-green w-5 h-5 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4a6 6 0 100 12 6 6 0 000-12zm13 15l-7.5-4.5" />
            </svg>
        </div>
        <select className='w-[169px] border border-normal-green text-normal-green bg-white py-2 px-3 rounded-md hover:border-green-700 hover:shadow focus:border-green-700'>
            <option disabled>Type</option>
            <option>Business</option>
            <option>Private</option>
        </select>
        <select className='w-[169px] border border-normal-green bg-white py-2 px-3 text-normal-green rounded-md hover:border-green-700 hover:shadow focus:border-green-700'>
            <option disabled>Status</option>
            <option>Ongoing</option>
            <option>Completed</option>
        </select>
        <input type="date" className='w-[224px] border border-normal-green py-2 px-3 text-normal-green rounded-md bg-white hover:border-green-700 hover:shadow focus:border-green-700' />
        <button className='btn border-none hover:bg-yellow-700 active:bg-green-900 w-[202px] bg-light-green text-white py-2 px-5 rounded-md'>
            Filter
        </button>
        </div>
        <div className='flex w-full flex-col mt-5'>
            <div className='w-full grid grid-cols-5 text-normal-green text-xl font-bold'>
                <div className='flex justify-center'>Client Name</div>
                <div className='flex justify-center'>Type</div>
                <div className='flex justify-center'>Status</div>
                <div className='flex justify-center w-11/12'>Created At</div>
            </div>
            <hr className='bg-normal-green h-[2px] w-full mt-3'></hr>
            {customers.map((customer) => (
          <div
            key={customer._id}
            className="cursor-pointer"
            onClick={() => handleRowClick(customer._id)}
          >
            <ClientRow
              name={customer.name}
              type={customer.type}
              status={customer.status}
              createdAt={formatDate(customer.date)}
            />
          </div>
        ))}
        </div>
        <div className='flex justify-end'>
            <button className='btn border-none hover:bg-yellow-700  font-bold text-xl w-[201px] h-14 bg-light-green text-white mt-6 rounded-md'>
                + Add Client
            </button>
        </div>
    </div>
  )
}

export default page