import React from 'react'

function Contact() {
    return (
        <div className="p-6 bg-white rounded-lg shadow-2xl m-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or need assistance, please feel free to contact us using the information below:
        </p>
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.293 6.293A1 1 0 013 6h14a1 1 0 01.707 1.707l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414zM3 4a3 3 0 013-3h8a3 3 0 013 3v1h2a3 3 0 013 3v7a3 3 0 01-3 3H4a3 3 0 01-3-3V7a3 3 0 013-3h2V4zm7 9a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold">Email</p>
            <p className="text-gray-600">contact@electriccarstations.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 0a7 7 0 00-7 7c0 5.004 6.2 10.078 6.519 10.352a1 1 0 001.462 0C10.8 17.078 17 12.004 17 7a7 7 0 00-7-7zm0 12a5 5 0 100-10 5 5 0 000 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold">Address</p>
            <p className="text-gray-600">123 Main Street, City, Country</p>
          </div>
        </div>
      </div>
    )
}

export default Contact
